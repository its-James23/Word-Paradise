function openhere(){
    window.open("./sign-up.html", "_self")
}
const inputs = document.querySelectorAll(".sending");
const infoP = document.getElementById("general");
const submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", (event) =>{
    event.preventDefault()
    inputs.forEach(input =>{
        if(input.checkValidity()){
            setTimeout(() => {
                input.textContent = "";
                infoP.className = "text-success"
                infoP.textContent = "Thanks for your Feedback!"
            }, 800)
        } else{
            setTimeout(() => {
                infoP.className = "text-danger"
                infoP.textContent = "Please fill out all fields correctly"
            })
        }
    })
})