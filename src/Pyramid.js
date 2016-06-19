import React from 'react';
import BEMHelper from 'react-bem-helper';
import getUnit from 'get-unit';
import PyramidElement from './PyramidElement';

export default class Pyramid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pyramidWidth: null,
            numberOfColumns: 1,
            breakPoints: props.breakPoints ? props.breakPoints : {
                "768px"  : 2,
                "1024px" : 3,
                "1280px" : 4,
                "1440px" : 5 
            },
            gutter: props.magicValue ? props.magicValue : 20,
            magicValue: props.magicValue ? props.magicValue : 1.5,
            allImageProps: [],
            zoomedIn: false,
            zoomingIn: false,
            zoomingOut: false,
            images: props.images ? props.images : [],
            classes: props.baseClass ? new BEMHelper(props.baseClass) : new BEMHelper("pyramid")
        }
    }

    reRender() {
        // console.log('RERENDER!!');
        this.forceUpdate();
    }

    componentDidMount() {
        if(this.state && !this.state.pyramidWidth) {
            this.setState({
                pyramidWidth: this.refs.pyramid.offsetWidth
            })
        }

        window.addEventListener('resize', this.reRender.bind(this), true);
        this.refs.pyramid.addEventListener('scroll', this.reRender.bind(this), true);
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.reRender, true);
        this.refs.pyramid.removeEventListener('scroll', this.reRender, true);
    }

    render() {
        // console.log('RENDER!');
        var thisComponent = this;

        if(this.refs.pyramid) {

            this.state.pyramidWidth = this.refs.pyramid.offsetWidth;

            // console.log(this.refs.pyramid.offsetWidth);
            // console.log(this.refs.pyramid.offsetHeight);
            // console.log(this.refs.pyramid.scrollTop);
        }

        var pyramidStyle = {
            display: "block",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "auto",
            clear: "both",
            overflowY: "auto"
        }

        if(this.state && !this.state.pyramidWidth) {            
            return (
                <div ref="pyramid" style={pyramidStyle}></div>
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
                console.log('yo!');
            }            

            // console.log(this.refs.pyramid.offsetHeight);
            // console.log(this.refs.pyramid.scrollTop);
            // console.log(this.refs.pyramid)

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
                ( imageProps.top * this.state.magicValue > this.refs.pyramid.scrollTop
                  &&
                  imageProps.top < ( this.refs.pyramid.scrollTop + this.refs.pyramid.offsetHeight) * this.state.magicValue
                )
                ||
                ( (imageProps.top + imageProps.height) * this.state.magicValue > this.refs.pyramid.scrollTop
                  &&
                  imageProps.top + imageProps.height < (this.refs.pyramid.scrollTop + this.refs.pyramid.offsetHeight) * this.state.magicValue
                )
            ) {
                imageProps.inView = true;
            }

            // console.log(key);
            // console.log("inView: " + imageProps.inView);
            // console.log(imageProps);
            // console.log(this.state.allImageProps[key]);

            this.state.allImageProps[key] = imageProps;

            

            return (
                <PyramidElement {...this.state.classes("element")} key={key} {...imageProps} onClick={this.zoomIn.bind(this, key)}/>
            )
        });

        // console.log(this.state);
        // console.log('pyramidWidth: ' + this.state.pyramidWidth);
        // console.log('number of cols: ' + this.state.numberOfColumns);

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