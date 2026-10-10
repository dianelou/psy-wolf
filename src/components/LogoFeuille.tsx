import React from 'react';

interface LogoFeuilleProps {
  className?: string;
  size?: number | string;
  alt?: string;
}

/**
 * Composant LogoFeuille :
 * Affiche directement le logo feuille officiel (logo-feuille.png)
 * sans altération ni déformation, en préservant son ratio d'origine.
 */
export const LogoFeuille: React.FC<LogoFeuilleProps> = ({ 
  className = "w-full h-full", 
  size,
  alt = "Logo Diane Wolf - Psychologue"
}) => {
  return (
    <img 
      src="/logo-feuille.png" 
      alt={alt}
      width={size} 
      height={size}
      className={`object-contain select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
      loading="eager"
      decoding="async"
    />
  );
};

export default LogoFeuille;
