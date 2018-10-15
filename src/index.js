import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom' //BrowserRouter replaces with HashRouter because of git-pages hosting issues
import App from './App'
import './index.css'

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'))
