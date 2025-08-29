function openhere() {
  window.open("./sign-up.html", "_self");
}
const inputs = document.querySelectorAll(".sending");
const infoP = document.getElementById("general");
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  inputs.forEach((input) => {
    if (input.checkValidity()) {
      input.value = "";
      infoP.innerText = "Thanks for your Feedback!";
      infoP.className = "text-success";
      setTimeout(() => {
        infoP.innerText = "";
      }, 1000);
    } else {
      infoP.innerText = "Please fill fields correctly";
      infoP.className = "text-danger";
      setTimeout(() => {
        infoP.innerText = "";
      }, 1000);
    }
  });
});
