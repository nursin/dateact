import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Fade } from 'react-animation-components';

class App extends Component {
  render() {    
    return (
      <BrowserRouter>
        <div className="App">
        <Fade in >
          <Main />
        </Fade>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
