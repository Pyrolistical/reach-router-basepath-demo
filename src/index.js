import React from 'react'
import {render} from 'react-dom'
import Logo from './Logo'
import {Router, Link} from '@reach/router'

const App = ({children}) => (
  <div>
    <Logo />
    <nav>
      <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
    </nav>
    {children}
  </div>
)

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
)

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
)

render(
  <Router basepath="/reach-router-basepath-demo">
    <App path="/">
      <Home path="/" />
      <Dashboard path="dashboard" />
    </App>
  </Router>,
  document.getElementById('root')
)
