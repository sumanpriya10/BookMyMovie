import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './Controller';

ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();


//ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));
