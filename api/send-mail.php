<?php
// Autoriser l'accès depuis le front (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

// Lire les données JSON brutes
$data = json_decode(file_get_contents("php://input"), true);

// Validation des champs essentiels
if (
    empty($data["firstName"]) ||
    empty($data["lastName"]) ||
    empty($data["email"]) ||
    empty($data["message"]) ||
    !filter_var($data["email"], FILTER_VALIDATE_EMAIL)
) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Champs requis manquants ou email invalide."]);
    exit;
}

// Sanitation de l'email pour éviter l'injection
$email = filter_var($data["email"], FILTER_SANITIZE_EMAIL);
$email = str_replace(["\r", "\n"], "", $email); // protection contre header injection

$to = "contact@sqava.fr";
$subject = "Nouveau message de contact : " . strip_tags($data["subject"]);
$message = 
    "Nom : " . strip_tags($data["lastName"]) . " " . strip_tags($data["firstName"]) . "\n" .
    "Email : " . $email . "\n" .
    "Téléphone : " . strip_tags($data["phone"] ?? '') . "\n" .
    "Message :\n" . strip_tags($data["message"]);

$headers = "From: <$email>";

if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Échec de l'envoi."]);
}
?>
