// Preloader
let preloader = document.querySelector(".preloader");

window.addEventListener('load', function() {
    preloader.classList.add('remove');
})


let navbar = document.querySelector(".navbar");
let list = document.querySelector(".list");

navbar.addEventListener("click", function() {
    if(list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
})


// Heart and Share
let hearts = document.querySelectorAll("[data-heart]");
let shares = document.querySelectorAll("[data-share]");

hearts.forEach(ele => {
    ele.addEventListener("click", function() {
        ele.classList.toggle("active");
    });
});

shares.forEach(ele => {
    ele.addEventListener("click", function() {
        ele.classList.toggle("active");
    });
});


// Shoes Boxes
let images = document.querySelectorAll("[data-shoes]");
let imageBox = document.querySelector("[data-imageBox]");

images.forEach(ele => {
    ele.addEventListener("click", () => {
        imageBox.src = "images/" + ele.dataset.shoes;
    })
})


