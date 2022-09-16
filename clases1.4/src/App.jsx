import './App.css'
import QuoteBox from './assets/components/QuoteBox'
import quote from "./json/quote.json"
import color from "./assets/utils/color"
import { useState } from 'react'


function App() {
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
  
  const firstElement = quote [getIndexRandom(quote)]
  const firstColor = color[getIndexRandom(color)]

  const [randomQuote, setRandomQuote] = useState(firstElement)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObjet = {
    backgroundObjet: color
  }

  const getRandomAll = () => {
    setRandomQuote(quote[getIndexRandom(quote)])
    setRandomColor(color[getIndexRandom(color)])
  }

  return  (
    <div style={{backgroundColor: randomColor}} className="App">
    <QuoteBox 
    randomQuote={randomQuote} 
    randomColor={randomColor}
    getRandomAll={getRandomAll}
    />
    </div>
    )

  }

export default App
