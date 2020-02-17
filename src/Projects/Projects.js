import React, { Component } from 'react'
import '../Projects/Projects.css'
import ProjectStore from './ProjectStore.js'

class Projects extends Component {

    state = {
        store: ProjectStore,
        projectIndex: 0,
        imgIndex: 0,
        icons: []
    }

    componentDidMount() {
        this.carousel();
    }

    panLeft = () => {
        if (this.state.projectIndex > 0) {
            this.setState({ projectIndex: this.state.projectIndex - 1 })
        }
        else {
            this.setState({ projectIndex: this.state.store.length - 1 })
        }
        // console.log(this.state.projectIndex)
    }

    panRight = () => {
        if (this.state.projectIndex < this.state.store.length - 1) {
            this.setState({ projectIndex: this.state.projectIndex + 1 })

        }
        else {
            this.setState({ projectIndex: 0 })
        }
        // console.log(this.state.projectIndex)
    }
    carousel = () => {
        if (this.state.imgIndex >= this.state.store[this.state.projectIndex].images.length - 1) {
            this.setState({ imgIndex: 0 })
        }
        else {
            this.setState({ imgIndex: this.state.imgIndex + 1 })
        }
        setTimeout(this.carousel, 1500);
    }

    render() {
        let items = this.state.store[this.state.projectIndex].icons.map((item, key) =>
                <i className={item} key={Math.random() + Math.random()}></i>

        );

        return (
            <div className="Projects">
                <div className="Left_Projects">
                    <h1>
                        Projects
                    </h1>
                    <br></br>
                    <div className="showcase">
                        <br></br>
                        <h2>
                            {this.state.store[this.state.projectIndex].name}
                        </h2>
                        <br></br>
                        <p>
                            {this.state.store[this.state.projectIndex].description}
                        </p>
                        <br></br>
                        <br></br>
                        <p>{items}</p>
                        <br></br>
                        <br></br>
                        <a href={this.state.store[this.state.projectIndex].url}>{this.state.store[this.state.projectIndex].url}</a>
                    </div>
                    <br></br>
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
                <div className="Right_Projects">
                    <div className="Screenshots">
                        <img src={this.state.store[this.state.projectIndex].images[this.state.imgIndex]} alt={this.state.store[this.state.projectIndex].name}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects