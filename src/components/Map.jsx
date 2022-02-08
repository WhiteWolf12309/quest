
import React from 'react';

import exitImg from '../img/exit.svg'

import map1 from '../img/map1.png'
import map2 from '../img/map2.png'
import map3 from '../img/map3.png'
import map4 from '../img/map4.png'
import map5 from '../img/map5.png'

const Map = ({ gameLevel, setShowMap }) => {

    let currentImg

    if (gameLevel <= 5) {
        currentImg = map1
    } else if (gameLevel >= 6 && gameLevel <= 10) {
        currentImg = map2
    } else if (gameLevel >= 11 && gameLevel <= 15) {
        currentImg = map3
    } else if (gameLevel >= 16 && gameLevel <= 20) {
        currentImg = map4
    } else if (gameLevel >= 21 && gameLevel <= 25) {
        currentImg = map5
    }
 


    return (
        <div className='map-popup'>
            <div className="map-popup__inner">
                <div className="map-popup__inner__body">
                    <div className="header">
                        <div className="header__title">Карта</div>
                        <img onClick={() => setShowMap(false)} className='header__exit' src={exitImg} alt="" />
                    </div>
                    <div className="body__img">
                        <img className='img' src={currentImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;
