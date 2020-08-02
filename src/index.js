import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Home from './pages/Home'
import CadastroVideo from './pages/CadastroVideo'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
