import React, { Component } from 'react'
import '../Skills/Skills.css'

class Skills extends Component {
    render() {
        return (
            <div className="Skills">
                <div className="Left_Skills">
                    <ul className="tracking-in-contract">
                        <li>
                            Skills
                    </li>
                    </ul>
                    <p>
                        I can build full-stack web apps and host them. The stack I use is the PERN stack, (PostgreSQL, Express.js, React.js, Node.js).  I'm pretty good at Java as well.
                    </p>
                    <br></br>
                    <p className="Skills_Footer">
                        I host my API's on Heroku and my UI's on Vercel 
                    </p>

                </div>
                <div className="Right_Skills">
                    <div className="Front_Skills">
                        <h2>
                            Frontend
                        </h2>
                        <ul>
                            <li>
                                HTML
                                <i className="devicon-html5-plain-wordmark colored"></i>
                            </li>
                            <li>
                                CSS
                                <i className="devicon-css3-plain-wordmark colored"></i>
                            </li>
                            <li>
                                Javascript
                                <i className="devicon-javascript-plain"></i>
                            </li>
                            <li>
                                jQuery
                                <i className="devicon-jquery-plain-wordmark colored"></i>
                            </li>
                            <li>
                                React.js
                                 <i className="devicon-react-original-wordmark colored"></i>
                            </li>
                            <li>
                                Mocha
                                <i className="devicon-mocha-plain colored"></i>
                            </li>
                            {/* <li>
                                GitHub
                                <i className="devicon-github-plain"></i>
                            </li>
                            <li>
                                Visual Stbentube
                                <i className="devicon-visualstbentube-plain colored"></i>
                            </li> */}
                        </ul>
                    </div>
                    <div className="Back_Skills">
                        <h2>
                            Backend
                        </h2>
                        <li>
                            Java
                            <i className="devicon-java-plain-wordmark colored"></i>
                        </li>
                        <li>
                            Node.js
                            <i className="devicon-nodejs-plain colored"></i>
                        </li>
                        <li>
                            Express
                            <i className="devicon-express-original"></i>
                        </li>
                        <li>
                            PostgreSQL
                            <i className="devicon-postgresql-plain-wordmark colored"></i>
                        </li>
                        <li>
                            Heroku
                            <i className="devicon-heroku-original-wordmark colored"></i>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills