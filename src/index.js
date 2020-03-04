import './Main.css'
import React from 'react'
import reactDom from 'react-dom'
import Main from './routes/Main'

reactDom.render(
  React.createElement(Main, null),
  document.querySelector('#app')
)
process.env.NODE_ENV === 'development' && require('./utils/mock.js')
