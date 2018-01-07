import React from 'react';

import './MainTitle.css';

import food1 from "../images/food1.png";
import food2 from "../images/food2.png";

// TODO: Animation.. 

const MainTitle = () => (
    <div className="main__container">
        <p className="main__title">Healthy Food</p>
        <img src={food1} className="main__image"/> 
    </div> 
);

export default MainTitle;