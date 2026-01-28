import { useState } from 'react'
import './Country.css'

function Country() {
  const [name, setName] = useState("United States")
  const [goldMedalCount, setGoldMedalCount] = useState(5)

  return (
    <>
      <h1>{name}</h1>
      <div className='row'>
        <h2>Gold Medals: {goldMedalCount}</h2>
        <button onClick={() =>setGoldMedalCount(goldMedalCount + 1)}>+</button>
      </div>

    </>
  )
}

export default Country
