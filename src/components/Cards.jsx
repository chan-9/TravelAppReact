import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://wallpaperaccess.com/full/1180395.jpg'
              text='Gateway of India'
              label='Gateway'
              path='/services'
            />
            <CardItem
              src='https://www.planetware.com/wpimages/2020/02/india-varanasi-best-places-to-visit-ganges-river.jpg'
              text='Varanasi'
              label='History'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://static.toiimg.com/thumb/msid-55310626,width-748,height-499,resizemode=4,imgsize-175052/.jpg'
              text='Goa'
              label='Sea'
              path='/services'
            />
            <CardItem
              src='https://pbs.twimg.com/media/DQXee5lVoAACZ1w.jpg'
              text=' Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Thar Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;