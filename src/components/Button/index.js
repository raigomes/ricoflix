import React from 'react'

import './Button.css'

function Button (props) {
  return (
    <button className='btnMenu'>
      {props.children}
    </button>
  )
}

export default Button
