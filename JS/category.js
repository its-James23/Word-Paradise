import { setInHistory, setInFavorites } from "./utility.js";
const parameter = new URLSearchParams(window.location.search);
const categoryName = parameter.get("name") || "fiction";

if (categoryName) {
  fetch(`https://gutendex.com/books?topic=${categoryName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("You so smart!");
      data.results.forEach((b) => console.log(b.title));
      loadBooks(data.results);
    });
}
function loadBooks(book) {
  const container = document.getElementById("commendations");
  container.innerHTML = "";
  const capitalized =
    categoryName.slice(0, 1).toUpperCase() + categoryName.slice(1);
  document.getElementById("category-heading").innerText = capitalized;
  try {
    book.forEach((page) => {
      let rest = page.title;
      if (rest.split(" ").length > 10) {
        rest = rest.split(" ").slice(0, 3).join(" ") + "...";
      }
      let downloadUrl =
        page.formats["text/html; charset=utf-8"] ||
        page.formats["text/plain; charset=utf-8"] ||
        page.formats["application/epub+zip"];
      let bookDiv = document.createElement("div");
      let url = `https://www.gutenberg.org/cache/epub/${page.id}/pg${page.id}.cover.medium.jpg`;
      bookDiv.className = "p-3 book position-relative";
      bookDiv.innerHTML = `
        <img src="${url}" onerror="this.onerror=null; this.src='https://picsum.photos/150/200';"  alt="${rest}"/>
        <p class="small text-center">${rest}</p>
        <div class="d-inline-flex justify-content-between align-items-center w-100 bottom-0">
          <a href="${downloadUrl}" class="btn btn-primary germinate" download>Download</a>
          <button class="btn btn-outline-danger d-flex align-items-center gap-1 faves" data-id="${page.id}"> <i class="bi bi-heart"></i><span>Favorite</span></button>
            <span class="position-absolute visually-hidden top-0 start-100 translate-middle love badge rounded-pill bg-danger">
                <i class="bi bi-heart-fill"></i>
                <span class="visually-hidden">Faves</span>
            </span>
        </div>
    `;
      let btn = bookDiv.querySelector(".germinate");
      btn.addEventListener("click", () => setInHistory(page));

      let favebtn = bookDiv.querySelector(".faves")
      favebtn.addEventListener("click", () => setInFavorites(page, favebtn));
      container.appendChild(bookDiv);
    });
  } catch (err) {
    console.log(err);
    container.innerHTML =
      '<p class="text-danger lead text-center"> Category not found</p>';
  }
}
