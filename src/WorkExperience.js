import React, { Component } from 'react';
class WorkExperience extends Component {
    render() {
        return(
        <div className="work">
            <h4>{this.props.workExp.work}</h4>
            <div className="jobs">
                <p className="job">
                {this.props.workExp.job1}
                </p>
                <p>
                {this.props.workExp.job1_description}
                </p>
                <p class="job">
                {this.props.workExp.job2}
                </p>
                <p>
                {this.props.workExp.job2_description}
                </p>
            </div>
        </div>
        )
    }
}


export default WorkExperience;