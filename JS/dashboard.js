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
      .slice(0, 6);
    const dramaBook = data.results
      .filter((book) =>
        book.subjects.some((one) => {
          const breake = one.toLowerCase();
          return breake.includes("drama") || breake.includes("women");
        })
      )
      .slice(0, 6);
    const fantasyBook = data.results
      .filter((book) =>
        book.subjects.some((one) => {
          const mores = one.toLowerCase();
          return mores.includes("fantasy") || mores.includes("adventure");
        })
      )
      .slice(0, 6);

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
let sendTo = localStorage.getItem("mail") || "name@example.com";
const h2 = document.querySelector(".greet");
const profileName = document.getElementById("profile");
const teller = document.getElementById("details1");
h2.innerText = `Welcome ${identifier}`;
profileName.innerText = `${identifier}`;
teller.innerText = `${sendTo}`;

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
function replaceData() {
  localStorage.removeItem("username");
  localStorage.removeItem("mail");
  localStorage.removeItem("genres");
}
const i = document.getElementById("onoff");
i.addEventListener("click", function () {
  i.classList.toggle("bi-bell-fill");
  i.classList.toggle("bi-bell-slash-fill");
});
const quotes = [
  "Not all those who wonder are lost",
  "Dreams are the whispers of your soul",
  "Courage is not the absence of fear, but the triumph over it",
  "Magic happens when you believe",
  "Dreams are doors; courage is the key",
  "Even shadows are born from light",
  "The ocean sings to those who listen",
  "The wind carries messages only the heart understands",
  "In the quiet, magic hums softly",
  "Time is a river; we are but travellers on its currents",
  "Magic is not in the wand, but in the one who wields it",
  "Every ending hides the seed of a beginning",
];
const generateQuotes = Math.floor(Math.random() * quotes.length);
const newQuotes = quotes[generateQuotes];
const phrases = document.querySelector("#quotes");
phrases.textContent = newQuotes;

fetch("https://gutendex.com/books?sort=download_count")
  .then((response) => response.json())
  .then((data) => {
    const filtered = data.results.filter(
      (popular) => popular.download_count > 40000
    );
    filtered.forEach((filtrate, index) => {
      let url =
        filtrate.formats["text/html; charset=utf-8"] ||
        filtrate.formats["application/epub+zip"] ||
        filtrate.formats["text/plain; charset=utf-8"];
      let li = filtrate.subjects.map((li) => `<li>${li}</li>`).slice(0,5).join("");
      let absorb = document.createElement("div");
      let rer = filtrate.title;
      if(filtrate.title.split(" ").length > 28 ){
        rer = filtrate.title.split(" ").slice(0, 3).join(" ")
      }
      let hula;
      if (index === 0) {
        hula = "active";
      } else {
        hula = "";
      }
      absorb.className = `carousel-item ${hula}`;
      absorb.innerHTML = `
        <div class="row justify-content-around align-items-center">
          <div class="col-5">
          <img src="https://www.gutenberg.org/cache/epub/${filtrate.id}/pg${filtrate.id}.cover.medium.jpg" class="img-fluid dagger" alt="${filtrate.title}" />
        </div>
        <div class="col-7">
          <h3 class="display-6 heroine">${rer}</h3>
          <ul>${li}</ul>
          <a class="btn btn-outline-info" href="${url}" download> Download</a>
        </div>
        </div>
      `;
      document.getElementById("lots").appendChild(absorb);
    });
  });
  const categoryNames = [
    "romance",
    "fantasy",
    "action",
    "drama"
  ]
  const randomCategory = categoryNames[Math.floor(Math.random() * categoryNames.length)]
  const aLink = document.getElementById("buster")
  aLink.href = `../category.html?name=${randomCategory}`