import React, { Component } from 'react';
class WorkExperience extends Component {
    render() {
        return(
        <div className="work">
            <h4>Work Experience</h4>
            <div className="jobs">
                <p className="job">
                Job Title at Company (August 2022 - December 2023)
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.</p>
                <p class="job">Job Title at Company (August 2020 - December 2021)</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        )
    }
}


export default WorkExperience;