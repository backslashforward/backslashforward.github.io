import React from "react";
import BEMHelper from "react-bem-helper";

class PyramidImage extends React.Component {
    static propTypes = { 
        src: React.PropTypes.string.isRequired,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
        top: React.PropTypes.number,
        left: React.PropTypes.number,
        type: React.PropTypes.string
    };

    static defaultProps = { 
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        top: 0,
        left: 0,
        type: "img" //todo: no default, and make required
    };

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            classes: this.props.baseClass ? new BEMHelper(this.props.baseClass) : new BEMHelper("element")
        };

        this.styleNormalizer = {
            margin: 0,
            padding: 0,
            border: 0,
        };
    }

    render() {
        var normalizerCopy = Object.assign({}, this.styleNormalizer);
        var containerStyle = Object.assign(normalizerCopy, {
            backgroundColor: "rgba(0,0,0,0.1)",
            display: "block",
            width: this.props.width + "px",
            height: this.props.height + "px",
            position: "absolute",
            top: this.props.top,
            left: this.props.left,
            transition: "all 300ms linear",
        });

        var normalizerCopy = Object.assign({}, this.styleNormalizer);
        var style = Object.assign(normalizerCopy, {
            width: "100%",
            height: "100%",
            opacity: this.props.inView && this.state.loaded ? 1 : 0,
            transition: "opacity 300ms linear",
        });

        var elementProps = {
            src: this.props.src,
            className: this.state.classes(this.props.type),
            style: style,
            onLoad: this.handleImageLoaded.bind(this)
        }

        var element = React.createElement(this.props.type, elementProps);

        return(
            <div style={containerStyle} onClick={this.props.onClick} {...this.state.classes()}>
                {this.props.inView ? element : ""}
            </div>
        );
    }

    handleImageLoaded() {
        this.setState(
            { loaded : true }
        )
    }
}

export default PyramidImage;