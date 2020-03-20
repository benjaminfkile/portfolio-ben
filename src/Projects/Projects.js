import React, { Component } from 'react'
import '../Projects/Projects.css'
import ProjectStore from './ProjectStore.js'

class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            store: ProjectStore,
            projectIndex: 0,
            imgIndex: 0,
            icons: [],
            previewTicker: 0,
            showPreview: false,
            width: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.setState({ imgIndex: 0 })
        this.carousel();
        this.togglePreview();
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
        if(this.state.width > 1000){
            this.setState({showPreview: false})
        }
      }

    togglePreview = () => {

        this.setState({ previewTicker: this.state.previewTicker + 1 })
        if (this.state.previewTicker % 2 !== 0) {
            this.setState({ showPreview: true })
        } else {
            this.setState({ showPreview: false })

        }
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
                {!this.state.showPreview && <div className="Left_Projects">
                    <br></br>
                    <div className="showcase">
                        <br></br>
                        <h1>
                            {this.state.store[this.state.projectIndex].name}
                        </h1>
                        <br></br>
                        <p className="description">
                            {this.state.store[this.state.projectIndex].description}
                        </p>
                        <br></br>
                        <p className="tech">{items}</p>
                        {this.state.store[this.state.projectIndex].url && <br></br>}
                        {this.state.store[this.state.projectIndex].url && <a href={this.state.store[this.state.projectIndex].url} target="_blank" rel="noopener noreferrer">Visit</a>}
                        {this.state.store[this.state.projectIndex].url && <br></br>}
                        <br></br>
                        <a href={this.state.store[this.state.projectIndex].repo} target="_blank" rel="noopener noreferrer">Repo</a>
                        <br></br>
                        <div className="Screenshot_Btn">
                            <br></br>
                            <p onClick={this.togglePreview}>Screenshots</p>
                        </div>
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
                </div>}
                {this.state.showPreview && this.state.store[this.state.projectIndex].portrait && <div className="Portrait_Preview">
                    <img src={this.state.store[this.state.projectIndex].images[this.state.imgIndex]} alt={this.state.store[this.state.projectIndex].name} onClick={this.togglePreview}></img>
                    <div className="Close_Portrait">
                        <p onClick={this.togglePreview}>
                            tap the image to back
                        </p>
                    </div>
                </div>}
                {this.state.showPreview && !this.state.store[this.state.projectIndex].portrait && <div className="Landscape_Preview">
                    <img src={this.state.store[this.state.projectIndex].images[this.state.imgIndex]} alt={this.state.store[this.state.projectIndex].name} onClick={this.togglePreview}></img>
                    <div className="Close_Landscape">
                        <p onClick={this.togglePreview}>
                            tap the image to go back
                        </p>
                    </div>
                </div>}
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