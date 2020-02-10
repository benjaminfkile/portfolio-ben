import React, { Component } from 'react'
import '../Nav/Nav.css'
import Header from './Header'
import Footer from './Footer'


class Nav extends Component {


    homeRoute() {
        console.log('h_r')
        window.location.href = '/';
    }

    aboutRoute() {
        console.log('a_r')
        window.location.href = '/about';
    }

    skillRoute() {
        console.log('s_r')
        window.location.href = '/skills';
    }

    projectsRoute(){
        window.location.href = '/projects'
    }

    contactRoute() {
        console.log('s_r')
        window.location.href = '/contact';
    }

    render() {
        return (

            <div className="Nav">
                <Header />
                <div className="Routes">
                    <div className="Home_Route" onClick={this.homeRoute}>
                        <h4>
                            Home
                        </h4>
                    </div>
                    <div className="About_Route" onClick={this.aboutRoute}>
                        <h4>
                            About
                        </h4>
                    </div>
                    <div className="Skill_Route" onClick={this.skillRoute}>
                        <h4>
                            Skills
                        </h4>
                    </div>
                    <div className="Projects_Route" onClick={this.projectsRoute}>
                        <h4>
                            Projects
                        </h4>
                    </div>
                    <div className="Contact_Route" onClick={this.contactRoute}>
                        <h4>
                            Contact


                    </h4>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default Nav