"use-strict";
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import * as serviceWorker from './serviceWorker';
import Tabs from './Components/Tabs';

const options = [{ value: '1', label: 'Tab One'}, { value: '2', label: 'Tab Two'}, { value: '3', label: 'Tab Three'}];

function View() {
  const [value, setValue] = useState({ value: '1', label: 'Tab One'});

  const handleOnChange = value => {
    setValue(value);
  }
  
  const renderTab = label => {
    return label;
  };

  return (
    <Tabs options={options} value={value} renderTab={renderTab} onChange={handleOnChange}>
    </Tabs>
  )
}

ReactDOM.render(
  <View></View>,
  document.getElementById('container')
);

serviceWorker.unregister();