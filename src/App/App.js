import React, { Component } from 'react';

import MainTitle from '../MainTitle';
import Body from '../Body';
import Footer from '../Footer';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      classBreakfast: '',
      classLunch: '',
      classDinner: ''
    }
  }

  render() {
    return (
      <div className="App">
        <MainTitle/>
        <Body 
          // classBreakfast={this.state.classBreakfast}
          // classLunch={this.state.classLunch}
          // classDinner={this.state.classDinner}
        />   
        <Footer/>     
      </div>
    );
  }
}

export default App;
