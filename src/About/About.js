import React, { Component } from 'react'
import '../About/About.css'

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="About_Left">
                    <h1>
                        About Me
                    </h1>
                    <br></br>
                    <ul>
                        <li>
                            From Columbia Falls Montana
                        </li>
                    </ul>
                    <p className="About_Left_Footer">
                    <br></br>
                        Studied at Thinkful
                    </p>
                </div>
                <div className="About_Right">
                    <p id="About_Intro">
                        My passion for coding began about 10 years ago.
                        The fulfillment I get from solving complex problems is what drives me to learn more.
                        I have worked on many different projects in multiple languages.
                        When I am behind my computer putting a project together I’m not working,
                        I’m having fun.  I have gone from creating janky and static applications to developing
                        Full-Stack web apps and my curiosity continues to grow.
                    </p>
                    <br></br>
                    <p>
                    Fan of Science Fiction and the outdoors.
                    </p>
                    <br></br>
                    <p>
                    Interested in the whole Full Stack spectrum and working with positive people.
                    </p>
                </div>
            </div>
        )
    }
}

export default About