import React, { useState, useRef, useEffect } from 'react';
import { Info } from 'lucide-react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current && 
        triggerRef.current && 
        !tooltipRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    if (isMobile && isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isVisible]);

  const handleInteraction = () => {
    if (isMobile) {
      setIsVisible(!isVisible);
    }
  };

  return (
    <span className="relative inline-block">
      <span
        ref={triggerRef}
        className={`border-b-2 border-dotted border-blue-500 cursor-help hover:border-blue-700 transition-colors duration-200 ${className}`}
       className={`border-b-2 border-dotted border-gray-400 cursor-help hover:border-gray-600 transition-colors duration-200 ${className}`}
        onMouseEnter={() => !isMobile && setIsVisible(true)}
        onMouseLeave={() => !isMobile && setIsVisible(false)}
        onClick={handleInteraction}
      >
        {children}
        {isMobile && (
          <Info className="inline w-3 h-3 ml-1 text-gray-500" />
        )}
      </span>
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className="absolute z-50 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-xl animate-fade-in"
          style={{
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '8px'
          }}
        >
          <div className="relative">
            {content}
            {/* Flèche */}
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"
            />
          </div>
        </div>
      )}
    </span>
  );
};

export default Tooltip;