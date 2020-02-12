import React, { Component } from 'react'
import '../Home/Home.css'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Left_Panel">
                    <ul className="tracking-in-contract">
                        <li>
                            Hey,
                        </li>
                        <li>
                            What's Up?,
                        </li>
                        <li>
                            I'm a Web Developer.
                        </li>
                    </ul>
                    <p className="Quick_Intro">
                    Full Stack Developer => (Node, Javascript)&nbsp;&#123;&nbsp;&#125;
                    </p>
                </div>
                <div className="Right_Panel">
                    <ul>
                        <li>
                            &lt;div&gt;
                        </li>
                        <p>
                         Ben Kile   
                        </p>
                        <li>
                            &lt;/div&gt;

                        </li>
                    
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home