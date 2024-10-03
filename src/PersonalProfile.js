import React, { Component } from 'react';
class Profile extends Component {
    render() {
        return(
        <div className="profile">
            <h4>{this.props.personalInfo.profile}</h4>
            <div className="me">
                <p>{this.props.personalInfo.about}</p>
            </div>
        </div>
        )
    }
}


export default Profile;