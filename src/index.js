"use-strict";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import * as serviceWorker from './serviceWorker';
import Slider from './Components/Slider';

const options = [{ value: '1', label: 'Tab One'}, { value: '2', label: 'Tab Two'}, { value: '3', label: 'Tab Three'}]

ReactDOM.render(
  <React.Fragment>
    <Slider options={options}></Slider>
  </React.Fragment>,
  document.getElementById('container')
);

serviceWorker.unregister();