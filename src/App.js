import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import Bio from './Components/Bio/Bio.js';
import Skills from './Components/Skills/Skills.js';
import Education from './Components/Education/Education.js';
import Project from './Components/Projects/Project.js';
import Experience from './Components/Experience/Experience.js';
import Image from './Components/Image/Image.js';
import './App.css';



class App extends Component {
  render() {
    return (
      <div ClassName='App'>
        <Navigation className='nav-links' />
        <Bio  />
        <Image className='' />
        <Skills className='skills'/>
        <Education />
        <Project />
        <Project />
        <Project />
        <Experience />
      </div>
    );
  }
}


export default App;
