export function setInHistory(bookData){
    let history = JSON.parse(localStorage.getItem()) || []
    let dataStore = {
        title: bookData.title,
        author: bookData.author,
        date: new Date.toISOString()
    }
    console.log('it worked')
    history.unshift(dataStore)
    localStorage.setItem("history", history)
}