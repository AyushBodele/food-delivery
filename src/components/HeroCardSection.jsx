import React from 'react';
import Card from './HeroCard'; 
import { cardData } from '../utils/data'; 

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
