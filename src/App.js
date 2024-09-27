import React, {Component} from 'react';
import Header from './Header';
import Profile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Profile></Profile>
      <WorkExperience></WorkExperience>
      <Skills></Skills>
      <Education></Education>
    </div>
  );
}

export default App;
