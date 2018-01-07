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
    }
  }

  componentDidMount(){
    window.onscroll = () => this.handleScroll();
  }

  handleScroll = () => {
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
    // if(document.documentElement.scrollTop > 700){
    //   console.log(document.documentElement.scrollTop)
    //   this.setState({
    //     classLunch: 'body__food',
    //   })
    // }
    // if(document.documentElement.scrollTop > 1000){
    //   console.log(document.documentElement.scrollTop)
    //   this.setState({
    //     classDinner: 'body__food',
    //   })
    // }
  }

  render() {
    return (
      <div className="App">
        <MainTitle/>
        <Body 
          classBreakfast1={this.state.classBreakfast1}
          classBreakfast2={this.state.classBreakfast2}
          classBreakfast3={this.state.classBreakfast3}
          // classLunch={this.state.classLunch}
          // classDinner={this.state.classDinner}
        />   
        <Footer/>     
      </div>
    );
  }
}

export default App;
