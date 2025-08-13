window.addEventListener("load", function () {
  setTimeout(() => {
    let h4 = document.querySelector(".book-container h4");
    let loader = document.querySelector(".book-container");
    loader.style.opacity = "0";
    if (h4) h4.style.opacity = "0";
    setTimeout(() => {
      document.querySelector(".book-container").style.display = "none";
    }, 1000);
  }, 6900);
});
const category1 = document.querySelectorAll(".rom");
const category2 = document.querySelectorAll(".dram");
const category3 = document.querySelectorAll(".fan");
fetch("https://gutendex.com/books?page_size=76487")
  .then((response) => response.json())
  .then((data) => {
    const romanceBook = data.results
      .filter((book) =>
        book.subjects.some((one) => {
          const lower = one.toLowerCase();
          return lower.includes("romance") || lower.includes("love");
        })
      )
      .slice(0, 5);
    const dramaBook = data.results
      .filter((book) =>
        book.subjects.some((one) => {
          const breake = one.toLowerCase();
          return breake.includes("drama") || breake.includes("women");
        })
      )
      .slice(0, 5);
    const fantasyBook = data.results
      .filter((book) =>
        book.subjects.some((one) => {
          const mores = one.toLowerCase();
          return mores.includes("fantasy") || mores.includes("adventure");
        })
      )
      .slice(0, 5);

    function loadBook(selectedGenre, container) {
      selectedGenre.forEach((aBook) => {
        let imgUrl = `https://www.gutenberg.org/cache/epub/${aBook.id}/pg${aBook.id}.cover.medium.jpg`;
        let aDiv = document.createElement("div");
        aDiv.innerHTML = `
                    <img src="${imgUrl}" class="corn" />
                    <h5 class="text-muted mt-2">${aBook.title}</h5>
                    <h6 class="text-muted mt-1">${aBook.authors
                      .map((a) => a.name)
                      .join(",")}</h6>
                `;
        container.appendChild(aDiv);
      });
    }
    category1.forEach((c) => loadBook(romanceBook, c));
    category2.forEach((c) => loadBook(dramaBook, c));
    category3.forEach((c) => loadBook(fantasyBook, c));
  });
let identifier = localStorage.getItem("username") || "User";
const h2 = document.querySelector(".greet");
h2.textContent = `Welcome ${identifier}`;
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
