import React, {useRef} from 'react';
import classNames from 'classnames';

function TabItem(props) {
  const itemClass = classNames({"tabs__item": true, active: props.active});

  return (
    <li className={itemClass} onClick={ () => props.switchTab(props.options) }>
      {props.renderTab(props.options.label)}
    </li>
  )
}

function Tabs(props) {
  const slider = useRef(null);
  const sliderPage = useRef(null);

  function switchTab(value) {
    const pageWidth = sliderPage.current.clientWidth; 
    slider.current.style.right = pageWidth * (value.value - 1) + "px";
  
    props.onChange(value)
  }
  
  return (
    <div className="tabs">
      <ul className="tabs__container">
        {
          props.options.map( item => {
            return (
              <TabItem options={item} switchTab={switchTab} active={props.value.value === item.value} renderTab={props.renderTab} key={item.value}></TabItem>  
            )
          })
        }
      </ul>
      <div className="slider" ref={slider}>
        <div className="slider__page slider__page--green" ref={sliderPage}>
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