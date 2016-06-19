import React from 'react';
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
            opacity: 0,
            transition: "all 300ms linear"
        }

        if(this.props.inView) {
            imageStyle.backgroundImage = "url('" + this.props.src + "')";
            imageStyle.backgroundSize = "contain";
            imageStyle.opacity = 1;
        }

        return(
            <div style={imageStyle} onClick={this.props.onClick} className={this.props.className} />
        );
    }
}

export default PyramidImage;