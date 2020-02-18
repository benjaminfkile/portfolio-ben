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
                        Studied at University of Montana
                    <br></br>
                        <br></br>
                        Studied at Thinkful
                    </p>
                </div>
                <div className="About_Right">
                    <p>
                    My passion for coding began about 10 years ago,  the fulfillment I get from solving complex problems keeps me interested and very busy.  I have worked on dozens of my own hobby projects and homework projects in many different languages.  The bottom line is when I am behind my computer putting a project together I’m not working, I’m having fun.  I have gone from creating janky and static applications to developing Full-Stack web apps and my curiosity just keeps growing.
                    </p>
                </div>
            </div>
        )
    }
}

export default About