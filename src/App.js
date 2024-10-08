import React, {Component} from 'react';
import Header from './Header';
import Profile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personInfo: {
        name: "Zh Rimel",
        occupation: "Data Scientist"
      },
      contactInfo: {
        email: "Email: abc@gmail.com",
        web: "Web: abc.github.io/abc",
        mobile: "Mobile: 01234567890"
      },
      personalInfo: {
        profile: "Personal Profile",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      workExp: {
        work: "Work Experience",
        job1: "Job Title at Company (August 2022 - December 2023)",
        job1_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        job2: "Job Title at Company (August 2020 - December 2021)",
        job2_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      skills: {
        skill0: "Key Skills",
        skill1: "A Key skill",
        skill2: "A Key skill",
        skill3: "A Key skill",
        skill4: "A Key skill",
        skill5: "A Key skill",
        skill6: "A Key skill",
        skill7: "A Key skill",
        skill8: "A Key skill",
        skill9: "A Key skill",
      },
      schoolInfo: {
        education: "Education",
        school: "New Jersey Institute of Technology",
        degree: "BS in Computer Science",
        years: "2018-2022",
        gpa: "GPA: 3.9",
        gradSchool: "New Jersey Institute of Technology",
        gradDegree: "MS in Computer Science",
        gradYears: "2022-2023",
        gradGpa: "GPA: 4.0"
      },
    }
  }
  render() {
    return (
      <div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}>
        </Header>
        <Profile personalInfo={this.state.personalInfo}> 
        </Profile>
        <WorkExperience workExp={this.state.workExp}></WorkExperience>
        <Skills skills={this.state.skills}></Skills>
        <Education schoolInfo={this.state.schoolInfo}>
        </Education>
      </div>
    );
  }
}

export default App;
