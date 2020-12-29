"use-strict";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import * as serviceWorker from './serviceWorker';
import Tabs from './Components/Tabs';

const options = [{ value: '1', label: 'Tab One'}, { value: '2', label: 'Tab Two'}, { value: '3', label: 'Tab Three'}];
const value = { value: '1', label: 'Tab One'};

function renderTab(label) {
  return label
};

function onChange(num, width, slider) {
  slider.style.right = width * (num - 1) + "px";
};

ReactDOM.render(
  <Tabs options={options} value={value} renderTab={renderTab} onChange={onChange}>
  </Tabs>,
  document.getElementById('container')
);

serviceWorker.unregister();