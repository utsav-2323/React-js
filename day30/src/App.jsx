import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Comp/Login'
import Signup from './Comp/Signup'
import Home from './Comp/Home'

function App() {
  return (
    <>

<BrowserRouter>
<Routes>
  <Route path='/' Component={Login}></Route>
  <Route path='/signup' Component={Signup}></Route>
  <Route path='/home' Component={Home}></Route>
</Routes>
</BrowserRouter>

      
    </>
  )
}

export default App
