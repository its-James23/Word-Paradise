const historySection = document.getElementById("history-section");
const favoriteSection = document.getElementById("favorite-section");

let historyItems = JSON.parse(localStorage.getItem("history"));
if (historyItems && historyItems.length > 0) {
  historyItems.forEach((item) => {
    let date = new Date(item.date);
    let parsed = date.toDateString();
    let li =
      item.authors.map((author) => author.name).join(", ") ||
      "Unknown Author";
    let imgUrl = `https://www.gutenberg.org/cache/epub/${item.id}/pg${item.id}.cover.medium.jpg`;
    let div = document.createElement("div");
    div.className = "history-item col";
    div.innerHTML = `
            <img src="${imgUrl}" onerror="this.onerror=null; this.src='https://picsum.photos/150/200';" alt="${item.title}" />
            <h3 class="text-center my-2">${li}</h3>
            <p class="text-center small">${parsed}</p>
        `;
    historySection.appendChild(div);
  });
} else {
  document.getElementById("lua").innerHTML = `
        <h2 class="display-6">Downloads</h2>
        <p class="text-center">No Recent Downloads</p>
        `;
}
