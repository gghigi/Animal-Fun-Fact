import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

    const showBackground = true;
  
    const background = (
      <img 
      clasName='background' 
      alt='ocean' 
      src='/images/ocean.jpg'/>
      );

       const images = [];

 for(const animal in animals) {
   images.push(
     <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role='button'
      onClick={displayFact}/>
   )
 };

 function displayFact(e) {
   const selectedAnimals = e.target.alt;
   const animalsInfo = animals[selectedAnimals];
   const optionIndex = Math.floor(Math.random() * animalsInfo.facts.length);

   const funFact = animalsInfo.facts[optionIndex];
   document.getElementById('fact').innerHTML = funFact;
 };

 
 
    const animalFacts = (
      <div>
        <h1>
          {title === '' ? 'Click an animal for a fun fact' : title}
        </h1>
        {showBackground && background}
        <p id='fact'></p>
        <div className='animals'>
          {images}
        </div>
      </div>
      );
   



ReactDOM.render(animalFacts, document.getElementById('root'));
