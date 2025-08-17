import {setInHistory} from './utility.js'
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
        page.formats["application/epub+zip"] ||
        page.formats["text/plain; charset=utf-8"];
      let bookDiv = document.createElement("div");
      let url = `https://www.gutenberg.org/cache/epub/${page.id}/pg${page.id}.cover.medium.jpg`;
      bookDiv.className = "p-3 book";
      bookDiv.innerHTML = `
        <img src="${url}" onerror="this.onerror=null; this.src='https://picsum.photos/150/200';"  alt="${rest}"/>
        <p class="small text-center">${rest}</p>
        <a href="${downloadUrl}" class="btn btn-primary germinate" download>Download</a>
    `;
      let btn = bookDiv.querySelector(".germinate");
      btn.addEventListener("click", () => setInHistory(page))
      container.appendChild(bookDiv);
    });
  } catch (err) {
    console.log(err);
    container.innerHTML =
      '<p class="text-danger lead text-center"> Category not found</p>';
  }
}