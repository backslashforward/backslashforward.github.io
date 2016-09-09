import React from 'react';
import BEMHelper from 'react-bem-helper';
import getUnit from 'get-unit';
import PyramidElement from './PyramidElement';
import elementResizeDetector from 'element-resize-detector';
import debounce from 'debounce';

export default class Pyramid extends React.Component {

    constructor(props) {
        super(props);

        this.props = props;

        this.erd = elementResizeDetector({strategy: "scroll"});

        this.state = {
            pyramidWidth: null,
            numberOfColumns: 1,
            breakPoints: props.breakPoints ? props.breakPoints : {
                "768px"  : 2,
                "1024px" : 3,
                "1280px" : 4,
                "1440px" : 5 
            },
            gutter: props.gutter ? props.gutter : 20,
            magicValue: props.magicValue ? props.magicValue : 0.2,
            allImageProps: [],
            zoomedIn: false,
            zoomingIn: false,
            zoomingOut: false,
            images: props.images ? props.images : [],
            classes: props.baseClass ? new BEMHelper(props.baseClass) : new BEMHelper("pyramid")
        }
    }

    reRender() {
        this.forceUpdate();
    }

    componentDidMount() {
        this.erd.listenTo(this.refs.pyramid, this.reRender.bind(this));
        this.refs.pyramid.addEventListener('scroll', debounce(this.reRender.bind(this), 10), true);
    }


    componentWillUnmount() {
        this.erd.removeAllListeners(this.refs.pyramid);
        this.refs.pyramid.removeEventListener('scroll', this.reRender, true);
    }

    render() {
        var thisComponent = this;

        if(this.refs.pyramid) {

            this.state.pyramidWidth = this.refs.pyramid.offsetWidth;

            if(this.state.pyramidWidth < 768) {
                this.state.magicValue = 1;
            }
        }

        var pyramidStyle = {
            display: "block",
            position: "relative",
            width: "100%",
            height: "100%",
            clear: "both",
            overflowY: "auto"
        }

        if(this.props.style){
            Object.assign(pyramidStyle. this.props.style);
        }

        if(this.state && !this.state.pyramidWidth) {            
            return (
                <div ref="pyramid" style={pyramidStyle} {...this.state.classes()}></div>
            )
        }

        this.state.numberOfColumns = 1;

        for(key in this.state.breakPoints) {
            var unit = getUnit(key);

            if(unit !== "px") {
                throw new Error("Pyramid does not support " + unit + "yet. You could always help out to implement it and make a pull request ^^ Cheers!");
            }

            if(this.state.pyramidWidth > parseInt(key)) {
                this.state.numberOfColumns = this.state.breakPoints[key];
            }
        }

        var key = -1;

        var imageElements = this.state.images.map( image => {

            key = key + 1;

            var zoomedIn = this.state.allImageProps[key] ? this.state.allImageProps[key].zoomedIn : false;

            var numberOfColumns = zoomedIn ? 1 : this.state.numberOfColumns;

            var imageWidth = (this.state.pyramidWidth - (numberOfColumns + 1) * this.state.gutter ) / numberOfColumns;

            var imageHeight = (imageWidth / image.orgWidth) * image.orgHeight;

            var imageProps = {
                top: this.state.gutter,
                left: this.state.gutter,
                zIndex: 1000,
                width: imageWidth,
                height: imageHeight,
                src: image.src,
                inView: this.state.allImageProps[key] ? this.state.allImageProps[key].inView : false,
                zoomedIn: zoomedIn,
                numberOfColumns: numberOfColumns
            };

            if(imageProps.zoomedIn) {
                // console.log('yo!');
            }            

            if(key => numberOfColumns) {
                var imageAbove = this.state.allImageProps[key - numberOfColumns];

                if(imageAbove) {
                    imageProps.top = imageAbove.top + imageAbove.height + this.state.gutter;
                }
            } 

            if(key % numberOfColumns > 0) {
                var imageToTheLeft = this.state.allImageProps[key - 1];

                if(imageToTheLeft) {
                    imageProps.left = imageToTheLeft.left + imageToTheLeft.width + this.state.gutter;
                }
            }

            if(
                ( imageProps.top + (this.state.magicValue * this.refs.pyramid.offsetHeight) > this.refs.pyramid.scrollTop
                  &&
                  imageProps.top < ( this.refs.pyramid.scrollTop + this.refs.pyramid.offsetHeight) + (this.state.magicValue * this.refs.pyramid.offsetHeight)
                )
                ||
                ( (imageProps.top + imageProps.height) + (this.state.magicValue * this.refs.pyramid.offsetHeight) > this.refs.pyramid.scrollTop
                  &&
                  imageProps.top + imageProps.height < (this.refs.pyramid.scrollTop + this.refs.pyramid.offsetHeight) + (this.state.magicValue * this.refs.pyramid.offsetHeight)
                )
            ) {
                imageProps.inView = true;
                // console.log("inView:" + key);
            }

            this.state.allImageProps[key] = imageProps;

            var baseClass = this.state.classes("element").className;

            return (
                <PyramidElement baseClass={baseClass} key={key} {...imageProps} onClick={this.zoomIn.bind(this, key)}/>
            )
        });

        return (
            <div ref="pyramid" style={pyramidStyle} {...this.state.classes()}>
                {imageElements}
            </div>
        );
    }

    zoomIn(key) {
        console.log("zoom is under construction");
        return;

        this.state.zoomingIn = true;

        this.state.allImageProps[key].zoomedIn = true;
        this.reRender();
    }
}