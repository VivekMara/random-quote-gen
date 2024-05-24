async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random")
        const data = await response.json()
        const author = data.author
        const content = data.content
        const author_data = document.getElementById("author")
        const author_content = document.getElementById("content")
        author_data.textContent = author
        author_content.textContent = content
    } 
    catch (error) {
        console.log(error)
    }
}



