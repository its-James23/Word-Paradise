export function setInHistory(bookData) {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  let dataStore = {
    title: bookData.title,
    author: bookData.authors?.[0]?.name || "Unknown Author",
    date: new Date().toISOString(),
  };
  console.log("it worked");
  history.unshift(dataStore);
  localStorage.setItem("history", JSON.stringify(history));
}
export function setInFavorites(bookInfo, button1){
    let favorites = JSON.parse(localStorage.getItem("favorites")) || []
    let faveStore = {
        id: bookInfo.id,
        title: bookInfo.title,
        author: bookInfo.authors?.[0]?.name ||"Unknown Author"
    }
    if(!favorites.some(best => best.id === bookInfo.id)){
            console.log("saved to favorites");
            favorites.unshift(faveStore);
            localStorage.setItem("favorites", JSON.stringify(favorites)); 
            let span = button1.parentElement.querySelector(".love");
            span.classList.remove("visually-hidden")
    } else{
        alert("Already in favorites");
        console.log("Its already there, ya big lug! 😁")
    }
}