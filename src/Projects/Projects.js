import React, { Component } from 'react'
import './ProjectStore.js'
import '../Projects/Projects.css'
import ProjectStore from './ProjectStore.js'

class Projects extends Component {

    state = {
        store: ProjectStore,
        index: 0
    }

    panLeft = () => {
        if (this.state.index > 0) {
            this.setState({ index: this.state.index - 1 })
        }
        else {
            this.setState({ index: this.state.store.length - 1 })
        }
        console.log(this.state.index)
    }

    panRight = () => {
        if (this.state.index < this.state.store.length - 1) {
            this.setState({ index: this.state.index + 1 })

        }
        else {
            this.setState({ index: 0 })
        }
        console.log(this.state.index)
    }


    render() {
        // const projects = this.state.store.map((item, key) =>
        //     <li key={key}>{item.name}</li>
        // );
        return (
            <div className="Projects">
                <div className="Left_Projects">
                    <h1>
                        Projects
                    </h1>
                </div>
                <div className="Right_Projects">
                    <div className="showcase">
                        <h2>
                            {this.state.store[this.state.index].name}
                        </h2>
                        <p>
                            {this.state.store[this.state.index].description}
                        </p>
                        <img src="./res/screenshots/benFM.png" alt={this.state.store[this.state.index].name}>

                        </img>
                        <div className="Buttons">
                            <div className="Left_Btn" onClick={this.panLeft}>
                                <p>
                                    &lt;
                                </p>
                            </div>
                            <div className="Right_Btn" onClick={this.panRight}>
                                <p>
                                    &gt;
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Projects