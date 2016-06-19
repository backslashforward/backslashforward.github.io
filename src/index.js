import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var style = {
    display: "block",
    width: "100%",
    height: "100%",
}

ReactDOM.render(<App style={style} />, document.getElementById('root'));
