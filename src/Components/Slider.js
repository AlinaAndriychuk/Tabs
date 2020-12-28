import React from 'react';
import renderTab from '../Functions/renderTab';

function Slider(props) {
  return (
    <div className="slider">
      <ul className="slider__tabs-container">
        {
          props.options.map( (item) => {
            return renderTab(item)
          })
        }
      </ul>
      <div className="slider__pages-container">
        <div className="slider__page slider__page--green">
          <h1 className="slider__title">
            Page 1
          </h1>
        </div>
        <div className="slider__page slider__page--red">
          <h1 className="slider__title">
            Page 2
          </h1>
        </div>
        <div className="slider__page slider__page--yellow">
          <h1 className="slider__title">
            Page 3
          </h1>
        </div>
      </div>
    </div>
  )
};

export default Slider;