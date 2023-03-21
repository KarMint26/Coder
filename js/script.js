const humburger = document.querySelector(".humburger");
const navBar = document.querySelector("nav");
const navList = document.querySelectorAll(".nav-list");

let count = 0;

humburger.addEventListener('click', () => {
    navBar.classList.toggle("active");

    if(count == 0){
        humburger.innerText = "✕";
        count++;
    } else {
        humburger.innerText = "☰";
        count = 0;
    }

    navList.forEach(nl => {
        nl.addEventListener('click', () => {
            navBar.classList.remove("active");
            humburger.innerText = "☰";
            count = 0;
        })
    })
})