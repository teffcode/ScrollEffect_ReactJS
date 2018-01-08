import React, { Component } from 'react';

import MainTitle from '../MainTitle';
import Body from '../Body';
import Footer from '../Footer';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      classBreakfast1: 'body__hidden',
      classBreakfast2: 'body__hidden',
      classBreakfast3: 'body__hidden',
      classLunch1: 'body__hidden',
      classLunch2: 'body__hidden',
      classLunch3: 'body__hidden',
      classDinner1: 'body__hidden',
      classDinner2: 'body__hidden',
      classDinner3: 'body__hidden',
      classTitle1: 'body__hidden',
      classTitle2: 'body__hidden',
      classTitle3: 'body__hidden',
      classFooter: 'body__hidden'
    }
  }

  componentDidMount(){
    window.onscroll = () => this.handleScroll();
  }

  handleScroll = () => {
    // Breakfast
    if(document.documentElement.scrollTop > 50){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classTitle1: 'tl__1 body__title',
      })
    }
    if(document.documentElement.scrollTop > 100){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classBreakfast1: 'bf__1 body__breakfast',
      })
    }
    if(document.documentElement.scrollTop > 150){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classBreakfast2: 'bf__2 body__breakfast',
      })
    }
    if(document.documentElement.scrollTop > 200){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classBreakfast3: 'bf__3 body__breakfast',
      })
    }
    // Lunch
    if(document.documentElement.scrollTop > 350){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classTitle2: 'tl__2 body__title',
      })
    }
    if(document.documentElement.scrollTop > 400){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classLunch1: 'ln__1 body__breakfast',
      })
    }
    if(document.documentElement.scrollTop > 450){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classLunch2: 'ln__2 body__breakfast',
      })
    }
    if(document.documentElement.scrollTop > 500){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classLunch3: 'ln__3 body__breakfast',
      })
    }
    // Dinner
    if(document.documentElement.scrollTop > 650){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classTitle3: 'tl__3 body__title',
      })
    }
    if(document.documentElement.scrollTop > 700){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classDinner1: 'dn__1 body__breakfast',
      })
    }
    if(document.documentElement.scrollTop > 750){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classDinner2: 'dn__2 body__breakfast',
      })
    }
    if(document.documentElement.scrollTop > 800){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classDinner3: 'dn__3 body__breakfast',
      })
    }
    // Footer
    if(document.documentElement.scrollTop > 1000){
      console.log(document.documentElement.scrollTop)
      this.setState({
        classFooter: 'footer__text',
      })
    }
  }

  render() {
    return (
      <div className="App">
        <MainTitle/>
        <Body 
          classBreakfast1={this.state.classBreakfast1}
          classBreakfast2={this.state.classBreakfast2}
          classBreakfast3={this.state.classBreakfast3}
          classLunch1={this.state.classLunch1}
          classLunch2={this.state.classLunch2}
          classLunch3={this.state.classLunch3}
          classDinner1={this.state.classDinner1}
          classDinner2={this.state.classDinner2}
          classDinner3={this.state.classDinner3}
          classTitle1={this.state.classTitle1}
          classTitle2={this.state.classTitle2}
          classTitle3={this.state.classTitle3}
        />   
        <Footer classFooter={this.state.classFooter}/>     
      </div>
    );
  }
}

export default App;
