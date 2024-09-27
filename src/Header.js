import React, { Component } from 'react';
class Header extends Component {
    render() {
        return(
        <div className="container">
            <div className="name">
                <p>Zh Rimel</p>
                <p>Data Scientist</p>
            </div>
            <div className="info">
                <p>Email: <a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
                <p>Web: abc.github.io/abc</p>
                <p>Mobile:01234567890</p>
            </div>
        </div>
        )
    }
}


export default Header;