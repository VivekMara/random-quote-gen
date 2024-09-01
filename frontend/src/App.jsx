import axios from "axios"
import { useState } from "react";
function App() {
  const [quote,setQuote] = useState(null);
  const [author,setAuthor] = useState(null);
  const [loader, setLoader] = useState(false)

  async function requestQuotes(num){
    try {
      const response = await axios.get("https://quotegendarthman.azurewebsites.net/quote");
      const data = response.data;
      const quote = data[num]
      setAuthor(quote.author)
      setQuote(quote.quote)
    } catch (error) {
      console.error(error)
    } finally{
      setLoader(false)
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
      <button onClick={() => randomQuote() && setLoader(!loader)}>{loader ? "Getting quotes..." : "Get quotes"}</button>
    </>
  )
}

export default App
