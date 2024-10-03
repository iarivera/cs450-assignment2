import React, { Component } from 'react';
class Skills extends Component {
    render() {
        return(
            <div class="skills">
            <h4>{this.props.skills.skill0}</h4>
            <div class="skill">
                <p>{this.props.skills.skill1}</p>
                <p>{this.props.skills.skill2}</p>
                <p>{this.props.skills.skill3}</p>
                <p>{this.props.skills.skill4}</p>
                <p>{this.props.skills.skill5}</p>
                <p>{this.props.skills.skill6}</p>
                <p>{this.props.skills.skill7}</p>
                <p>{this.props.skills.skill8}</p>
                <p>{this.props.skills.skill9}</p>
            </div>
          </div>
        )
    }
}


export default Skills;