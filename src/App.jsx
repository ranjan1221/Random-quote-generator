import React, { useEffect, useState } from "react"
import axios from "axios"
function App(){
const[quote,setquote]=useState(" ");
const [author,setAuthor]=useState("");

// here we are geeting array of objects
useEffect(() => {
  fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) => {
        setquote(quote.content);  
        setAuthor(quote.author);
      }
    )
},[]);

let fetchNewQuote = () => {
  fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) => {
        setquote(quote.content);  
        setAuthor(quote.author);
      }
    )
}

  return(
  <>
 <div className="App">
         <div className="quote">
            <h2>{quote}</h2>
            <small>-{author}-</small>
         </div><br />
         <button className="btn" onClick={fetchNewQuote}>Generate New Quote</button>
    </div>
  
  </>)
}

export default App
