import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <a href="https://www.linkedin.com/in/benjaminfkile/" target="_blank" rel="noopener noreferrer">
                    <img src="./res/in_dark.png" alt="Linked In" height={32} width={32} /> &nbsp;
                    </a>
                    <br>
                    </br>
                <a href="https://www.facebook.com/benjamin.kile.3/" target="_blank" rel="noopener noreferrer">
                    <img src="./res/facebook_dark.png" alt="Facebook" height={32} width={32} /> &nbsp;
                    </a>
            </div>
        )
    }
}

export default Footer