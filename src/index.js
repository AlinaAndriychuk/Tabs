"use-strict";
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import * as serviceWorker from './serviceWorker';
import Tabs from './Components/Tabs';

const options = [{ value: '1', label: 'Tab One'}, { value: '2', label: 'Tab Two'}, { value: '3', label: 'Tab Three'}];
const compareLabel = ['Tab One', 'Tab two', 'Tab three'];

function View() {
  const [value, setValue] = useState({ value: '1', label: 'Tab One'});

  const handleOnChange = value => {
    setValue(value);
  }
  
  const renderTab = label => {
    return label;
  };

  return (
    <>
      <Tabs options={options} value={value} renderTab={renderTab} onChange={handleOnChange}>
      </Tabs>
      {
        value.label === 'Tab One' && (
          <div className="page page_green">
              <h1 className="page__title">
                Page 1
              </h1>
          </div>
        )
      }
      {
        value.label === 'Tab Two' && (
          <div className="page page_red">
              <h1 className="page__title">
                Page 3
              </h1>
          </div>
        )
      }
      {
        value.label === 'Tab Three' && (
          <div className="page page_yellow">
              <h1 className="page__title">
                Page 2
              </h1>
          </div>
        )
      }
    </>
  )
}

ReactDOM.render(
  <View></View>,
  document.getElementById('container')
);

serviceWorker.unregister();