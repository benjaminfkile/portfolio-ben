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
                        I am mostly interested in the backend but as long as I am learning and growing as a developer I will be happy with whatever I am doing.
                    </p>
                    <br></br>
                    <p className="quick-intro">
                        I play very well with Node and React.
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
                                {/* <i className="devicon-javascript-plain colored"></i> */}
                                <i class="devicon-javascript-plain"></i>
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
                            <li>
                                GitHub
                                <i className="devicon-github-plain"></i>
                            </li>
                            <li>
                                VisualStudio
                                <i className="devicon-visualstudio-plain colored"></i>
                            </li>
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