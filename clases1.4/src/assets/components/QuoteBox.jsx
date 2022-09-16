import React from 'react'

const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {

console.log(randomColor)

const colorObj = { 
    color: randomColor
}

const backgroundObjet = {
    backgroundColor: randomColor
}
    return (
   <article style={colorObj} className='card'>
    <p className='card__quotes'>{randomQuote.quote}</p>
    <h1 className='card__author'>{randomQuote.author}</h1>
    <button 
    className='card__btn'
    style={backgroundObjet}
    onClick={getRandomAll}
    >&#62;</button>
    </article>
    )
}

export default QuoteBox