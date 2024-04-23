import React from "react";
import './card.css';



const Card = (props) => {
  const { color, showCardColor } = props;

  const getColor = () => {
    showCardColor(color);
  };

  return (
    <div className='card' style={{ backgroundColor: color }} onClick={getColor}>
      {props.children}
    </div>
  );
};

Card.defaultProps = {
  color: 'red'
};

export default Card;