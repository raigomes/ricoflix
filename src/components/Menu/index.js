import React from 'react'

import Logo from '../../assets/img/logo.png'

import './Menu.css'

function Menu () {
  return (
    <nav className='menu'>
      <a href='/'>
        <img className='logo' src={Logo} alt='Logo do Ricoflix' />
      </a>
      <button className='btnMenu'>
        Novo vídeo
      </button>
    </nav>
  )
}

export default Menu
