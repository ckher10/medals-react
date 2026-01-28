import { useState } from 'react'
import Country from './Country'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Country/>
    </>
  )
}

export default App
