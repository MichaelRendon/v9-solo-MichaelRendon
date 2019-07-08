import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import Bio from './Components/Bio/Bio.js';
import Skills from './Components/Skills/Skills.js';
import Education from './Components/Education/Education.js';
import Projects from './Components/Projects/Projects.js';
import Experience from './Components/Experience/Experience.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div ClassName='App'>
        <Navigation className='nav-links' />
        <Bio  />
        <Skills className='skills'/>
        <Education />
        <Projects />
        <Experience />
      </div>
    );
  }
}


export default App;
