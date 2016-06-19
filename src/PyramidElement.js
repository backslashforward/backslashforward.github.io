import React from 'react';
import BEMHelper from 'react-bem-helper';
// import BEMHelper from 'react-bem-helper';

// var classes = new BEMHelper("pyramid__image");

class PyramidImage extends React.Component {
    static propTypes = { 
        src: React.PropTypes.string.isRequired,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
        top: React.PropTypes.number,
        left: React.PropTypes.number
    };

    static defaultProps = { 
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        top: 0,
        left: 0
    };

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            classes: this.props.baseClass ? new BEMHelper(this.props.baseClass) : new BEMHelper("element")
        };
    }

    render() {
        var imageStyle = {
            display: "block",
            width: this.props.width + "px",
            height: this.props.height + "px",
            position: "absolute",
            top: this.props.top,
            left: this.props.left,
            // cursor: "pointer",
            opacity: this.props.inView && this.state.loaded ? 1 : 0,
            transition: "all 300ms linear",
        }

        return(
            <div style={imageStyle} onClick={this.props.onClick} {...this.state.classes()}>
                {this.props.inView ? <img src={this.props.src} {...this.state.classes("image")} style={{width: "100%", height: "100%"}} onLoad={this.handleImageLoaded.bind(this)} /> : ""}
            </div>
        );
    }

    handleImageLoaded() {
        // console.log("image loaded");
        
        this.setState(
            { loaded : true }
        )
    }
}

export default PyramidImage;