import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import Bio from './Components/Bio/Bio.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div ClassName='App'>
        <Navigation />
        <Bio />
        {/*
        <Skills />
        <Projects />
        <Experience />
        <Education />
      */}
      </div>
    );
  }
}


export default App;
