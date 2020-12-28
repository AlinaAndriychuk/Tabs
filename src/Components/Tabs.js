import React from 'react';
import TabItems from './TabItems';

function Tabs(props) {
  return (
    <div className="tabs">
      <TabItems options={props.options} onChange={props.onChange} renderTab={props.renderTab}></TabItems>
      <div className="slider">
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

export default Tabs;