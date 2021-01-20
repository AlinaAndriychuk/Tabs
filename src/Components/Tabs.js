import React, {useRef} from 'react';
import classNames from 'classnames';

function TabItem(props) {
  const itemClass = classNames({"tabs__item": true, active: props.active});

  return (
    <li className={itemClass} onClick={ () => props.onChange(props.options) }>
      {props.renderTab(props.options.label)}
    </li>
  )
}

function Tabs(props) {
  return (
    <div className="tabs">
      <ul className="tabs__container">
        {
          props.options.map( item => {
            return (
              <TabItem options={item} onChange={props.onChange} active={props.value.value === item.value} renderTab={props.renderTab} key={item.value}></TabItem>  
            )
          })
        }
      </ul>
    </div>
  )
};

export default Tabs;