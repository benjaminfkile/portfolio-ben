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
                            I'm Ben,
                        </li>
                        <li>
                            Web Developer.
                        </li>
                    </ul>
                    <p className="Quick_Intro">
                    Full Stack: [Node, Javascript]
                    </p>
                </div>
                <div className="Right_Panel">
                    <ul>
                        <p>
                         Ben Kile   
                        </p>                    
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home