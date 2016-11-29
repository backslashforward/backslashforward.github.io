import React from 'react';
import BEMHelper from 'react-bem-helper';
import getUnit from 'get-unit';
import elementResizeDetector from 'element-resize-detector';
import debounce from 'debounce';
import PyramidElement from './PyramidElement';

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
            allElementProps: [],
            elements: props.elements ? props.elements : [],
            classes: props.baseClass ? new BEMHelper(props.baseClass) : new BEMHelper("pyramid")
        }
    }

    reRender() {
        this.forceUpdate();
    }

    componentDidMount() {
        this.erd.listenTo(this.refs.pyramid, this.reRender.bind(this));
        this.refs.pyramid.addEventListener('scroll', debounce(this.reRender.bind(this), 10), false);
    }


    componentWillUnmount() {
        this.erd.removeAllListeners(this.refs.pyramid);
        this.refs.pyramid.removeEventListener('scroll', this.reRender, true);
    }

    render() {
        if(this.refs.pyramid) {
            this.state.pyramidWidth = this.refs.pyramid.clientWidth;
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

        var elements = this.state.elements.map( element => {
            key = key + 1;
            var numberOfColumns = this.state.numberOfColumns;
            var elementWidth = (this.state.pyramidWidth - (numberOfColumns + 1) * this.state.gutter ) / numberOfColumns;
            var elementHeight = (elementWidth / element.orgWidth) * element.orgHeight;
            var elementProps = {
                type: element.type,
                top: this.state.gutter,
                left: this.state.gutter,
                zIndex: 1000,
                width: elementWidth,
                height: elementHeight,
                src: element.src,
                inView: this.state.allElementProps[key] ? this.state.allElementProps[key].inView : false,
                numberOfColumns: numberOfColumns,
                href: element.href
            };   

            if(key => numberOfColumns) {
                var elementAbove = this.state.allElementProps[key - numberOfColumns];

                if(elementAbove) {
                    elementProps.top = elementAbove.top + elementAbove.height + this.state.gutter;
                }
            } 

            if(key % numberOfColumns > 0) {
                var elementToTheLeft = this.state.allElementProps[key - 1];

                if(elementToTheLeft) {
                    elementProps.left = elementToTheLeft.left + elementToTheLeft.width + this.state.gutter;
                }
            }

            if(
                ( elementProps.top + (this.state.magicValue * this.refs.pyramid.offsetHeight) > this.refs.pyramid.scrollTop
                  &&
                  elementProps.top < ( this.refs.pyramid.scrollTop + this.refs.pyramid.offsetHeight) + (this.state.magicValue * this.refs.pyramid.offsetHeight)
                )
                ||
                ( (elementProps.top + elementProps.height) + (this.state.magicValue * this.refs.pyramid.offsetHeight) > this.refs.pyramid.scrollTop
                  &&
                  elementProps.top + elementProps.height < (this.refs.pyramid.scrollTop + this.refs.pyramid.offsetHeight) + (this.state.magicValue * this.refs.pyramid.offsetHeight)
                )
            ) {
                elementProps.inView = true;
            }

            this.state.allElementProps[key] = elementProps;

            var baseClass = this.state.classes("element").className;

            return (
                <PyramidElement baseClass={baseClass} key={key} {...elementProps}/>
            )
        });

        return (
            <div ref="pyramid" style={pyramidStyle} {...this.state.classes()}>
                {elements}
            </div>
        );
    }
}