import React from 'react';

function alteraCase() {
  const text = document.querySelector('p').textContent;
  
  if (text === text.toUpperCase()) {
    const textLowerCase = text.toLowerCase();
    document.querySelector('p').textContent = textLowerCase;
  } else {
    const textUpperCase = text.toUpperCase();
    document.querySelector('p').textContent = textUpperCase;
  }
}

const Button = () => {
  return (
    <button onClick={alteraCase}>
      Clique aqui
    </button>
  );
};

export default Button;
