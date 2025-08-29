import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
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

const historyArray = JSON.parse(localStorage.getItem("history"));
const favoritesArray = JSON.parse(localStorage.getItem("favorites"));
const username = localStorage.getItem("username") || "User";
const mail = localStorage.getItem("mail") || "name@example.com";
let userIdentifier = document.getElementById("username");
let emailIdentifier = document.getElementById("email");
let creationDate = document.getElementById("creation-date");

userIdentifier.innerText = `Name: ${username}`;
emailIdentifier.innerText = `Email: ${mail}`;
onAuthStateChanged(auth, user =>{
    if(user){
        const dateCreate = user.metadata.creationTime;
        const aDate = new Date(dateCreate).toDateString()
        creationDate.innerText = `Created on: ${aDate}`
    } else{
        creationDate.innerText = "Created on: Unknown"
    }
})
const downloadLength = document.getElementById("numero1")
downloadLength.innerText = `${historyArray?.length || 0}`
const favoritLength = document.getElementById("numero2");
favoritLength.innerText = `${favoritesArray?.length ||0}`
const streakS = document.getElementById("numero3");
streakS.innerText = downloadLength.innerText
document.getElementById("back-button").addEventListener("click", () =>{
    window.open("./dashboard.html", "_self")
})