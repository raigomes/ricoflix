import React from 'react'

import Logo from '../../assets/img/logo.png'

import './Rodape.css'

function Rodape () {
  return (
    <footer className='rodape'>
      <div className='rodape--container'>
        <a href='/'>
          <img className='rodape--logo' src={Logo} alt='Logo do Ricoflix' />
        </a>
        <p className='rodape--descricao'>
          Site feito na <strong>#ImersãoReact</strong> da <span>Alura</span>
        </p>
      </div>
    </footer>
  )
}

export default Rodape
