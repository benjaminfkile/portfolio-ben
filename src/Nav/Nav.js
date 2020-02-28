import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Nav/Nav.css'
import Header from './Header'
import Footer from './Footer'


class Nav extends Component {



    render() {
        return (

            <div className="Nav">
                <Header />
                <div className="Routes">
                    <div className="Home_Route" tabIndex="1">
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>

                    </div>
                    <div className="About_Route" tabIndex="2">
                        <li>
                            <Link to='/about'>
                                About
                            </Link>
                        </li>
                    </div>
                    <div className="Skill_Route" tabIndex="3">
                        <li>
                            <Link to='/skills'>
                                Skills
                            </Link>
                        </li>
                    </div>
                    <div className="Projects_Route" tabIndex="4">
                        <li>

                            <Link to='/projects'>
                                Projects
                            </Link>
                        </li>
                    </div>
                    <div className="Contact_Route" tabIndex="5">
                        <li>
                            <Link to='/contact'>
                                Contact
                            </Link>
                        </li>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default Nav