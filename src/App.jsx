import { useState } from 'react'
import Country from './Country'
import './App.css'

function App() {
  const [countries, setCountries] = useState([
  { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
  { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
  { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
]);

const totalMedals = countries.reduce((acc, country) =>
  acc + country.gold + country.silver + country.bronze, 0)

function removeCountry(id) {
  setCountries(countries.filter(c => c.id !== id))
}

function increaseMedal(countryId, medalCategory) {
  const newCountries = [...countries]
  const selectedCountry = newCountries.find(country => country.id === countryId)
  selectedCountry[medalCategory]++
  setCountries(newCountries)
}

function decreaseMedal(countryId, medalCategory) {
  const newCountries = [...countries]
  const selectedCountry = newCountries.find(country => country.id === countryId)
  selectedCountry[medalCategory]--
  setCountries(newCountries)
}

  return (
    <>
    <h1>Olympic Medals: {totalMedals}</h1>
      <div className='row'>
        {countries.map(country =>
        <Country
        key={country.id}
        country={country}
        removeCountry={removeCountry}
        increaseMedal={increaseMedal}
        decreaseMedal={decreaseMedal}
        />)}
      </div>

    </>
  )
}

export default App
