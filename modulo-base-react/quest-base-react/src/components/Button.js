import React from 'react';

function alteraCase() {
  const paragraph = document.getElementById('text')
  const text = document.getElementById('text').textContent;
  
  console.log(text)
  if (text === text.toUpperCase()) {
    const textLowerCase = text.toLowerCase();
    paragraph.textContent = textLowerCase;
  } else {
    const textUpperCase = text.toUpperCase();
    paragraph.textContent = textUpperCase;
  }
  paragraph.style.color = 'red'
}

const Button = () => {
  return (
    <button onClick={alteraCase}>
      Clique aqui
    </button>
  );
};

export default Button;
