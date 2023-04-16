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
        header.style.cssText = `
            color: #fff;
            background-color: #00c0ce;
        `;
        navList.forEach(nl => {
            nl.style.cssText = `
                color: #fff;
            `;
        });
    } else {
        mybutton.style.display = "none";
        header.style.cssText = `
            color: black;
            background-color: transparent;
        `;
        navList.forEach(nl => {
            nl.style.cssText = `
                color: black;
            `;
        });
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
                opacity: 0;
                z-index: -2;
            `;
        document.querySelector(".custom-loader").style.zIndex = "-1";
    }, 1000);
});