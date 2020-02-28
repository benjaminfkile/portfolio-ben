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
        this.setState({ imgIndex: 0 })
        this.carousel();
    }

    panLeft = () => {
        this.setState({ imgIndex: 0 })
        if (this.state.projectIndex > 0) {
            this.setState({ projectIndex: this.state.projectIndex - 1 })
        }
        else {
            this.setState({ projectIndex: this.state.store.length - 1 })
        }
    }

    panRight = () => {
        this.setState({ imgIndex: 0 })
        if (this.state.projectIndex < this.state.store.length - 1) {
            this.setState({ projectIndex: this.state.projectIndex + 1 })

        }
        else {
            this.setState({ projectIndex: 0 })
        }
    }

    carousel = () => {
        if (this.state.imgIndex >= this.state.store[this.state.projectIndex].images.length - 1) {
            this.setState({ imgIndex: 0 })
        }
        else {
            this.setState({ imgIndex: this.state.imgIndex + 1 })
        }
        setTimeout(this.carousel, 2500)
    }

    render() {
        let items = this.state.store[this.state.projectIndex].icons.map((item, key) =>
            <i className={item} key={Math.random() + Math.random()}></i>

        );

        return (
            <div className="Projects">
                <div className="Left_Projects">
                    {/* <h1>
                        Projects
                    </h1> */}
                    <br></br>
                    <div className="showcase">
                        <br></br>
                        {/* <h2>
                            {this.state.store[this.state.projectIndex].name}
                        </h2> */}
                        <h1>
                            {this.state.store[this.state.projectIndex].name}
                        </h1>
                        <br></br>
                        <p className="description">
                            {this.state.store[this.state.projectIndex].description}
                        </p>
                        {/* <br></br> */}
                        <br></br>
                        <p className="tech">{items}</p>
                        <br></br>
                        {/* <br></br> */}
                        <a href={this.state.store[this.state.projectIndex].url} target="_blank">{this.state.store[this.state.projectIndex].url}</a>
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
                    <br></br>
                    {/* <div className="Buttons">
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
                    </div> */}
                </div>
                {this.state.store[this.state.projectIndex].portrait &&
                    <div className="Right_Projects_Portrait" key={Math.random() + Math.random()}>
                        <img src={this.state.store[this.state.projectIndex].images[this.state.imgIndex]} alt={this.state.store[this.state.projectIndex].name}></img>
                    </div>}
                {!this.state.store[this.state.projectIndex].portrait &&
                    <div className="Right_Projects_Landscape" key={Math.random() + Math.random()}>
                        <img src={this.state.store[this.state.projectIndex].images[this.state.imgIndex]} alt={this.state.store[this.state.projectIndex].name}></img>
                    </div>}

            </div>
        )
    }
}

export default Projects