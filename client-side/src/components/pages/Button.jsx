import React from 'react';

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center transition-colors hover:text-color-1 ${px || 'px-7'} ${
    white ? 'text-n-8' : 'text-n-1'
  } ${className || ''}`;

  const spanClass = 'relative z-10';

 
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClass}>{children}</span>
     
    </button>
  );


  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClass}>{children}</span>
      
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;