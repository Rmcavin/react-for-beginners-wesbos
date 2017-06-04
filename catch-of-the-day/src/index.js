import React from 'react';
import { render } from 'react-dom';  //we don't need the whole package, only the render method!
import './css/style.css';
import App from './components/App'
import StorePicker from './components/StorePicker'

render(<App/>, document.querySelector('#main'));
