import axios from "axios"
import { useState } from "react";
function App() {
  const [quote,setQuote] = useState(null);
  const [author,setAuthor] = useState(null);


  async function requestQuotes(num){
    try {
      const response = await axios.get("http://localhost:3000/");
      const data = response.data;
      const quote = data[num]
      setAuthor(quote.author)
      setQuote(quote.quote)
    } catch (error) {
      console.error(error)
    }
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const randomQuote = () => {
    const randomNum = getRandomInt(0,9);
    requestQuotes(randomNum);
  }
  

  return (
    <>
      <h1>Welcome to the Random Quote Generator</h1>
      <h1>quote: {quote}</h1>
      <h1>author: {author}</h1>
      <button onClick={() => randomQuote()}>get quote</button>
    </>
  )
}

export default App
