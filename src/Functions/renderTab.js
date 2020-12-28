import React from 'react';
import onChange from './onChange';

function renderTab(options) {
  return (
    <li className="slider__tab" key={options.value} onClick={() => onChange(options.value)}>
      {options.label}
    </li>
  )
};

export default renderTab;