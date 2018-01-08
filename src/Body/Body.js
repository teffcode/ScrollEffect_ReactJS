import React, { Component } from 'react';

import './Body.css';

import bread from "../images/bread.png";
import egg from "../images/egg.png";
import avocado from "../images/avocado.png";
import potatoes from "../images/potatoes.png";
import salmon from "../images/salmon.png";
import asparagus from "../images/asparagus.png";
import carrot from "../images/carrot.png";
import salad from "../images/salad.png";
import meat from "../images/meat.png";

class Body extends Component {
    render(){
        return(
            <div className="body__container">
                <p className={this.props.classTitle1}>• Breakfast •</p>
                <div className={this.props.classBreakfast1}>
                    <img src={bread}/> 
                </div>
                <div className={this.props.classBreakfast2}>
                    <img src={egg}/> 
                </div>
                <div className={this.props.classBreakfast3}>
                    <img src={avocado}/> 
                </div> 
                <p className={this.props.classTitle2}>• Lunch •</p>
                <div className={this.props.classLunch1}>
                    <img src={potatoes}/> 
                </div>
                <div className={this.props.classLunch2}>
                    <img src={salmon}/> 
                </div>
                <div className={this.props.classLunch3}>
                    <img src={asparagus}/> 
                </div> 
                <p className={this.props.classTitle3}>• Dinner •</p>
                <div className={this.props.classDinner1}>
                    <img src={carrot}/> 
                </div>
                <div className={this.props.classDinner2}>
                    <img src={salad}/> 
                </div>
                <div className={this.props.classDinner3}>
                    <img src={meat}/> 
                </div> 
            </div>
        );
    }
};

export default Body;
