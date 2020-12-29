import React, {useRef} from 'react';

function TabItem(props) {
  return (
    <li className="tabs__item" onClick={ () => props.switchTab(props.options.value) }>
      {props.renderTab(props.options.label)}
    </li>
  )
}

function Tabs(props) {
  const slider = useRef(null);
  const sliderPage = useRef(null);

  function switchTab(num) {
    const pageWidth = sliderPage.current.clientWidth; 
    
    props.onChange(num, pageWidth, slider.current)
  }
  
  return (
    <div className="tabs">
      <ul className="tabs__container">
        {
          props.options.map( item => {
            return (
              <TabItem options={item} switchTab={switchTab} renderTab={props.renderTab} key={item.value}></TabItem>  
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