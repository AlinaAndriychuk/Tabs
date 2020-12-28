import React from 'react';

function TabItems(props) {
  return (
    <ul className="tabs__container">
      {
        props.options.map( (item) => {
          return (
            <li className="tabs__item" key={item.value} onClick={ () => props.onChange(item.value) }>
              {props.renderTab(item.label)}
            </li>
          )
        })
      }
    </ul>
  )
};

export default TabItems;