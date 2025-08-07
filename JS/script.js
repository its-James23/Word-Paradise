const bookResult = document.getElementById("book-container");
function fetchBook() {
  bookResult.innerText = "";
  const searchValue = document.querySelector("#search").value.trim();
  fetch(`https://gutendex.com/books?search=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
        if (data.results.length === 0){
            const p = document.createElement("p")
            p.textContent = `No results found for ${searchValue}`;
            p.className = "text-center text-danger"
            bookResult.appendChild(p)
        }
      data.results.forEach((book) => {
        const imgUrl = `https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`;
        let aDiv = document.createElement("div");
        aDiv.style.margin = '20px'
        let li = book.subjects.map((li) => `<li>${li}</li>`).join("");
        let authors = book.authors.map((li) => li.name).join(";");
        let url =
          book.formats["text/html; charset=utf-8"] ||
          book.formats["application/epub+zip"] ||
          book.formats["text/plain; charset=utf-8"];
        aDiv.setAttribute("class", "row justify-content-center");
        aDiv.innerHTML = `
                    <div class="col-3">
                        <img src="${imgUrl}" class="img-fluid" alt="${book.title}">
                    </div>
                    <div class="col-5">
                        <h2 class="text-secondary fw-medium">${book.title}</h2>
                        <h5 class="text-muted">${authors}</h5>
                        <ul class="list-unstyled">${li}</ul>
                        <a class="btn btn-outline-primary" href="${url}" download>Download</a>
                    </div>
                `;
        bookResult.appendChild(aDiv);
      });
    });
}
