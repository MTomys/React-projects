import React from 'react';

interface IProps {
  color?: string;
  text: string;
  onClick: React.MouseEventHandler;
}

const Button = ({ color, text, onClick }: IProps) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color ?? 'red' }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
