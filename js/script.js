// Humburger Button Menu

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

// Sticky navbar
const header = document.querySelector("header");

// Sticky Back To Top

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Loader Animation
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".loader-container").style.cssText = `
            z-index: -2;
            opacity: 0;
        `;
        document.querySelector(".custom-loader").style.zIndex = "-1";
    }, 1000);
});