// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyA-M34pq8rztRf_s5M9TnVo9bRsLn3vVgo",
  authDomain: "paradiso-57343.firebaseapp.com",
  projectId: "paradiso-57343",
  storageBucket: "paradiso-57343.appspot.com",
  messagingSenderId: "335140844141",
  appId: "1:335140844141:web:a2a35e9732604665a18564",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const input = document.querySelector("form");

// const submit = document.getElementById("sub");
input.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!input.checkValidity()) {
    return;
  }
  const email = document.getElementById("mail").value;
  const password = document.getElementById("code").value;
  const username = document.getElementById("name").value;
  const genres = [];
  const checkedBox = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  checkedBox.forEach((checkboxes) => {
    genres.push(checkboxes.value);
  });
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    console.log("Created user");
    // ...
    localStorage.setItem("genres", JSON.stringify(genres));
    localStorage.setItem("username", username);
    localStorage.setItem("mail", email);
    window.open("dashboard.html", "_self")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    // ..
  });
});

