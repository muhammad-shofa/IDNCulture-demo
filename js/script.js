let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// icon navbar
let menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", function () {
  this.classList.toggle("close-icon");
  const navUl = document.getElementById("nav-ul");
  if (navUl.classList.contains("hidden-ul")) {
    navUl.classList.remove("hidden-ul");
    navUl.classList.add("show-ul");
  } else {
    navUl.classList.remove("show-ul");
    navUl.classList.add("hidden-ul");
  }
});

// fav destination
let favDestination = document.getElementById("favorite-1");
let emptyHeart = document.getElementById("empty-heart");
let fullHeart = document.getElementById("full-heart");
favDestination.addEventListener("click", () => {
  if (emptyHeart.style.display == "block") {
    fullHeart.style.display = "block";
    emptyHeart.style.display = "none";
  } else {
    emptyHeart.style.display = "block";
    fullHeart.style.display = "none";
  }
});

let favDestination2 = document.getElementById("favorite-2");
let emptyHeart2 = document.getElementById("empty-heart-2");
let fullHeart2 = document.getElementById("full-heart-2");
favDestination2.addEventListener("click", () => {
  if (emptyHeart2.style.display == "block") {
    fullHeart2.style.display = "block";
    emptyHeart2.style.display = "none";
  } else {
    emptyHeart2.style.display = "block";
    fullHeart2.style.display = "none";
  }
});

let favDestination3 = document.getElementById("favorite-3");
let emptyHeart3 = document.getElementById("empty-heart-3");
let fullHeart3 = document.getElementById("full-heart-3");
favDestination3.addEventListener("click", () => {
  if (emptyHeart3.style.display == "block") {
    fullHeart3.style.display = "block";
    emptyHeart3.style.display = "none";
  } else {
    emptyHeart3.style.display = "block";
    fullHeart3.style.display = "none";
  }
});

let favDestination4 = document.getElementById("favorite-4");
let emptyHeart4 = document.getElementById("empty-heart-4");
let fullHeart4 = document.getElementById("full-heart-4");
favDestination4.addEventListener("click", () => {
  if (emptyHeart4.style.display == "block") {
    fullHeart4.style.display = "block";
    emptyHeart4.style.display = "none";
  } else {
    emptyHeart4.style.display = "block";
    fullHeart4.style.display = "none";
  }
});

let favDestination5 = document.getElementById("favorite-5");
let emptyHeart5 = document.getElementById("empty-heart-5");
let fullHeart5 = document.getElementById("full-heart-5");
favDestination5.addEventListener("click", () => {
  if (emptyHeart5.style.display == "block") {
    fullHeart5.style.display = "block";
    emptyHeart5.style.display = "none";
  } else {
    emptyHeart5.style.display = "block";
    fullHeart5.style.display = "none";
  }
});
