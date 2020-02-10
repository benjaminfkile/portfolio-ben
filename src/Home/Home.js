import React, { Component } from 'react'
import '../Home/Home.css'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Left_Panel">
                    <ul className="tracking-in-contract">
                        <li>
                            Hi,
                        </li>
                        <li>
                            Im Ben,
                        </li>
                        <li>
                            Web Developer.
                        </li>
                    </ul>
                    <p className="Quick_Intro">
                        Full Stack Developer | Node | Javascript
                    </p>
                </div>
                <div className="Right_Panel">
                    <ul className="text-pop-up-right">
                        <li>
                            &lt;h1&gt;
                        </li>
                        <p>
                         Ben Kile   
                        </p>
                        <li>
                            &lt;/h1&gt;

                        </li>
                    
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home