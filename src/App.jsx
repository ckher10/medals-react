import { useState } from 'react'
import Country from './Country'
import './App.css'

function App() {
  const [countries, setCountries] = useState([
  { id: 1, name: 'United States', gold: 2 },
  { id: 2, name: 'China', gold: 3 },
  { id: 3, name: 'France', gold: 0 },
])

function removeCountry(id) {
  setCountries(countries.filter(c => c.id !== id))
}

  return (
    <>
      <div className='row'>
        {countries.map(country => <Country key={country.id} country={country} removeCountry={removeCountry}/>)}
      </div>

    </>
  )
}

export default App
