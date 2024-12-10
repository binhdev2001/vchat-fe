import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AuthForm from "./components/AuthForm";
import './App.css'
//


function App() {
  const name = 'V-chat'
  return (
    <>
      <AuthForm
      name = {name}
      />
    </>
  )
}

export default App
