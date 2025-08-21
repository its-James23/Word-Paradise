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
export function setInFavorites(bookInfo, button1) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  let faveStore = {
    id: bookInfo.id,
    title: bookInfo.title,
    author: bookInfo.authors?.[0]?.name || "Unknown Author",
  };
  let span = button1.parentElement.querySelector(".love");
  let index = favorites.findIndex((best) => best.id === bookInfo.id);
  if (index === -1) {
    console.log("saved to favorites");
    favorites.unshift(faveStore);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    span.classList.remove("visually-hidden");
    button1.querySelector("i").className = "bi bi-heart-fill";
    replayAnimation(span, "pop")
  } else {
    console.log("removed from favorites");
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    span.classList.add("visually-hidden");
    button1.querySelector("i").className = "bi bi-heart";
  }
}
function replayAnimation(element, animation){
  element.classList.remove(animation)
  void element.offsetWidth
  element.classList.add(animation)
}
