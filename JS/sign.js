const span = document.getElementById("change")
const input = document.getElementById("code")
const icon = document.getElementById("icon")
span.addEventListener("click", function(){
    if (input.type === "text"){
        input.type = "password"
        icon.className = "bi bi-eye"
    } else{
        input.type = "text"
        icon.className = "bi bi-eye-slash"
    }
})