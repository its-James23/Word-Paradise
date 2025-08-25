const historySection = document.getElementById("history-section");
const favoriteSection = document.getElementById("favorite-section");

let historyItems = JSON.parse(localStorage.getItem("history"));
let favoriteItems = JSON.parse(localStorage.getItem("favorites"));
if (historyItems && historyItems.length > 0) {
  historyItems.forEach((item) => {
    let date = new Date(item.date);
    let parsed = date.toDateString();
    let imgUrl = `https://www.gutenberg.org/cache/epub/${item.id}/pg${item.id}.cover.medium.jpg`;
    let div = document.createElement("div");
    div.className = "history-item col";
    div.innerHTML = `
            <img src="${imgUrl}" onerror="this.onerror=null; this.src='https://picsum.photos/150/200';" alt="${item.title}" />
            <h3 class="text-center my-2">${item.author}</h3>
            <p class="text-center small">${parsed}</p>
        `;
    historySection.appendChild(div);
  });
} else {
  document.getElementById("lua").innerHTML = `
        <h2 class="display-6">Downloads</h2>
        <p class="text-center">No Recent Downloads.</p>
        <span class="d-block text-center hippie">Start Reading now 👀</span>
        `;
}
if (favoriteItems && favoriteItems.length > 0) {
  favoriteItems.forEach((faves) => {
    let anotherDate = new Date(faves.date);
    let merci = anotherDate.toDateString();
    let faveImgUrl = `https://www.gutenberg.org/cache/epub/${faves.id}/pg${faves.id}.cover.medium.jpg`;
    let faveDiv = document.createElement("div");
    faveDiv.className = "hitory-item col";
    faveDiv.innerHTML = `
      <img src="${faveImgUrl} onerror="this.onerror=null; this.src='https://picsum.photos/150/200';" alt="${faves.title}" />
      <h3 class="text-center">${faves.author}</h3>
      <p class="text-center small">${merci}</p>
    `;
    favoriteSection.appendChild(faveDiv);
  });
} else {
  document.getElementById("helios").innerHTML = `
        <h2 class="display-6">Favorites</h2>
        <p class="text-center">No Favorites...yet.</p>
        <span class="d-block text-center hippie">Start Reading now 💖</span>
  `;
}
const flicker = document.getElementById("animation");
flicker.addEventListener("click", () => {
  const streakMessage = document.getElementById("contain-streak");
  streakMessage.classList.toggle("visually-hidden");
});
let streakMessage = document.getElementById("text-streak");
streakMessage.textContent = `You have a reading streak of ${
  historyItems?.length || 0
} books!.`;
let remark = document.getElementById("encourage");
if (!historyItems || historyItems.length === 0) {
  remark.textContent =
    "You can do better than that! Start downloading to get that streak up.";
} else {
  remark.textContent = `Keep up the good work. Aim for ${historyItems.length++} books`;
}
