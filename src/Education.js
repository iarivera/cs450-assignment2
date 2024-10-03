import React, { Component } from 'react';
class Education extends Component {
    render() {
        return(
            <div class="education">
            <h4>{this.props.schoolInfo.education}</h4>
            <div class="degree">
              <p class="school">{this.props.schoolInfo.school}</p>
              <p>{this.props.schoolInfo.degree}</p>
              <p>{this.props.schoolInfo.years}</p>
              <p>GPA: {this.props.schoolInfo.gpa}</p>
              <p class="school">{this.props.schoolInfo.gradSchool}</p>
              <p>{this.props.schoolInfo.gradDegree}</p>
              <p>{this.props.schoolInfo.gradYears}</p>
              <p>GPA: {this.props.schoolInfo.gradGpa}</p>
          </div>
          </div>
        )
    }
}


export default Education;