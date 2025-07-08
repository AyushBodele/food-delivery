import React from 'react';
import Card from './Card'; 
import { cardData } from '../../shared/constants/data'; 

const CardSection = () => {
  return (
    <div className="flex justify-center mt-7 ">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          discount={card.discount}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardSection;