const newButton = document.querySelector(".new-button");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const btnOpen = document.querySelector(".new-button");
const btnClose = document.getElementById("closeModal");
const modal = document.getElementById('myModal');

btnOpen.addEventListener("click" , () => {
    modal.className = "Modal is-visuallyHidden";
    setTimeout(function() {
      container.className = "MainContainer is-blurred";
      modal.className = "Modal";
    }, 100);
    container.parentElement.className = "ModalOpen";
})

btnClose.addEventListener("click" , () => {
    modal.className = "Modal is-hidden is-visuallyHidden";
    body.className = "";
    container.className = "MainContainer";
    container.parentElement.className = "";
})

window.addEventListener("click" , (event) => {
    if (event.target == modal) {
        modal.className = "Modal is-hidden";
        body.className = "";
        container.className = "MainContainer";
        container.parentElement.className = "";
    }
})

//Below is sample js for card Modal
//This will just trigger the test waala card aka the first card
//customize this

const testCard = document.querySelector(".test");
const btnClo = document.getElementById("closeMod");
const mod = document.getElementById('cardModal');
const title = document.querySelector("#cardModal .card-Modal-content .title");
const message = document.querySelector("#cardModal .card-Modal-content .message");

testCard.onclick = function() {
    mod.className = "Modal is-visuallyHidden";
    setTimeout(function() {
      container.className = "MainContainer is-blurred";
      mod.className = "Modal";
    }, 100);
    container.parentElement.className = "ModalOpen";
    title.innerHTML = document.querySelector(".test .title").innerText;
    message.innerHTML = document.querySelector(".test .message").innerText;
}

btnClo.onclick = function() {
    mod.className = "Modal is-hidden is-visuallyHidden";
    body.className = "";
    container.className = "MainContainer";
    container.parentElement.className = "";
}

window.addEventListener("click" , (event) => {
    if (event.target == mod) {
        mod.className = "Modal is-hidden";
        body.className = "";
        container.className = "MainContainer";
        container.parentElement.className = "";
    }
})