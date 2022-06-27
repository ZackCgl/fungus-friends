/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React from 'react'
import { Properties } from '../App';
import { mushrooms } from '../data/api';
import Popup from 'reactjs-popup';
import "./Names.css";

const Names:  React.FC<Properties> = ({colors, spots}) => {
  return (
    <div className='app__names'>
          {mushrooms.filter((val) => {
            if (spots == val.spots && val.color == colors) {
              return val
            }
            if (val.color == colors && spots == 100) {
              return val
            }
              
          }).map((mushroom) => {
            return (
              <div className='app__names__inner'> 
               
                {mushroom.name} 
                 {/*renders the stats in a popup*/}
                <Popup trigger={<button> Stats</button>} position="right center" className='app__popup'>
                <div>
                {mushroom.color == 0 && <div className='app__name'>Color: Red</div>}
                {mushroom.color == 1 && <div className='app__name'>Color: Green</div>}
                {mushroom.color == 2 && <div className='app__name'>Color: Yellow</div>}
                {mushroom.color == 3 && <div className='app__name'>Color: Blue</div>}

                {mushroom.spots == 0 && <div className='app__name'>Spots: none</div>}
                {mushroom.spots == 1 && <div className='app__name'>Spots: hidden</div>}
                {mushroom.spots == 2 && <div className='app__name'>Spots: dotted</div>}
                {mushroom.spots == 3 && <div className='app__name'>Spots: dashed</div>}
                {mushroom.spots == 4 && <div className='app__name'>Spots: solid</div>}
                {mushroom.spots == 5 && <div className='app__name'>Spots: double</div>}
                {mushroom.spots == 6 && <div className='app__name'>Spots: groove</div>}
                {mushroom.spots == 7 && <div className='app__name'>Spots: ridge</div>}
                {mushroom.spots == 8 && <div className='app__name'>Spots: inset</div>}
                {mushroom.spots == 9 && <div className='app__name'>Spots: outset</div>}
                <div className='app__name'>Latlng:{mushroom.latlng} </div></div>
                </Popup>
              </div>)
              
          })}
        </div>
  )
}

export default Names