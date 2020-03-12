import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

let sample = ['one', 'two', 'three'];

ReactDOM.render(<App array={sample} />, document.getElementById('root'));