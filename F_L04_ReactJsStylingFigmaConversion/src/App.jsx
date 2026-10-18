import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'

function App() {
  const [isLogin, setIsLogin] = useState(true)

  return isLogin ? (
    <Login onToggle={() => setIsLogin(false)} />
  ) : (
    <Signup onToggle={() => setIsLogin(true)} />
  )
}

export default App