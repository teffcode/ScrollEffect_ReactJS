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
                <p className="body__title">Breakfast</p>
                <div className={this.props.classBreakfast1}>
                    <img src={bread} className=""/> 
                </div>
                <div className={this.props.classBreakfast2}>
                    <img src={egg} className=""/> 
                </div>
                <div className={this.props.classBreakfast3}>
                    <img src={avocado} className=""/> 
                </div> 
            </div>
        );
    }
};

export default Body;

// <div>
//                     <p className="body__title">Lunch</p>
//                     <div className={this.props.classLunch}>
//                         <div className="body__content">
//                             <img src={potatoes} className=""/>                        
//                         </div>
//                         <div className="body__content">
//                             <img src={salmon} className=""/>
//                         </div>
//                         <div className="body__content">
//                             <img src={asparagus} className=""/>                     
//                         </div> 
//                     </div>   
//                 </div>
//                 <div>
//                     <p className="body__title">Dinner</p>
//                     <div className={this.props.classDinner}>
//                         <div className="body__content">
//                             <img src={carrot} className=""/>                                             
//                         </div>
//                         <div className="body__content">
//                             <img src={salad} className=""/>  
//                         </div>
//                         <div className="body__content">
//                             <img src={meat} className=""/>  
//                         </div> 
//                     </div>                                          
//                 </div>