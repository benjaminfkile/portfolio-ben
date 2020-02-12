import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Nav/Nav.css'
import Header from './Header'
import Footer from './Footer'


class Nav extends Component {

    // state = {

    //     wheelDex: 0
    // }

    // componentDidMount(){
    //     window.addEventListener("wheel", event => {
    //         const delta = Math.sign(event.deltaY);
    //         this.mouseScroll(delta)
    //     });
    // }

    // mouseScroll = (args) => {
    //     if(args === 1 && this.state.wheelDex < 4){
    //         this.setState({wheelDex: this.state.wheelDex + 1})
    //     }
    //     if(args === -1 && this.state.wheelDex > 0){
    //         this.setState({wheelDex: this.state.wheelDex - 1})
    //     }
    //     console.log(this.state.wheelDex)
    //     if(this.state.wheelDex === 4){
    //         window.location.href = '/'
    //     }
    //     if(this.state.wheelDex === 3){
    //         window.location.href = '/about'
    //     }
    //     if(this.state.wheelDex === 2){
    //         window.location.href = '/skills'
    //     }
    //     if(this.state.wheelDex === 1){
    //         window.location.href = 'projects'
    //     }
    //     if(this.state.wheelDex === 0){
    //         window.location.href = '/contact'
    //     }
    // }

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