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
                    Well-organized person, problem solver, great attention to detail, and an independent employee.  
                    </p>
                    <br></br>
                    <p>
                    Interested in the full spectrum of web development and working on ambitious projects with positive people.  I enjoy working on the server-side more than on the front-end but I am well versed in both.  Whether or not I am working on a project alone or with a team, it is essential to me that I can take pride in the finished project.
                    </p>
                    <br></br>
                    <p>
                    Fan of Science Fiction and the outdoors.
                    </p>
                </div>
            </div>
        )
    }
}

export default About