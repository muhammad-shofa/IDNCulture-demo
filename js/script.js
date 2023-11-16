let nav = document.querySelector("nav");
let containerNav = document.getElementById("container-nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    containerNav.classList.add("sticky");
  } else {
    containerNav.classList.remove("sticky");
  }
});

// change theme
let changeTheme = document.getElementById("change-theme");
let darkIcon = document.getElementById("dark-icon");
let lightIcon = document.getElementById("light-icon");

let body = document.querySelector("body");

changeTheme.addEventListener("click", () => {
  if (darkIcon.classList.contains("dark-icon")) {
    changeTheme.classList.add("black-bg-theme");
    darkIcon.classList.remove("dark-icon");
    darkIcon.classList.add("change-dark-icon");
    lightIcon.classList.remove("light-icon");
    lightIcon.classList.add("change-light-icon");
    body.style.backgroundColor("var(--black-accent)");
    body.style.color("var(--black-accent)");
  } else {
    changeTheme.classList.remove("black-bg-theme");

    darkIcon.classList.remove("change-dark-icon");
    darkIcon.classList.add("dark-icon");
    lightIcon.classList.remove("change-light-icon");
    lightIcon.classList.add("light-icon");
    body.style.backgroundColor("var(--white-accent)");
    body.style.color("var(--white-accent)");
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

// popup explore
function showPopup(popupId) {
  let containerPopup = document.getElementById("container-popup-" + popupId);
  if (containerPopup.style.display == "none") {
    containerPopup.style.display = "block";
  } else {
    containerPopup.style.display = "none";
  }
}

function closePopup(popupId) {
  let containerPopup = document.getElementById("container-popup-" + popupId);
  if (containerPopup.style.display == "block") {
    containerPopup.style.display = "none";
  } else {
    containerPopup.style.display = "block";
  }
}

// fav destination
// 1
let favDestination = document.getElementById("favorite-1");
let emptyHeart = document.getElementById("empty-heart");
let fullHeart = document.getElementById("full-heart");
// 2
let favDestination2 = document.getElementById("favorite-2");
let emptyHeart2 = document.getElementById("empty-heart-2");
let fullHeart2 = document.getElementById("full-heart-2");
// 3
let favDestination3 = document.getElementById("favorite-3");
let emptyHeart3 = document.getElementById("empty-heart-3");
let fullHeart3 = document.getElementById("full-heart-3");
// 4
let favDestination4 = document.getElementById("favorite-4");
let emptyHeart4 = document.getElementById("empty-heart-4");
let fullHeart4 = document.getElementById("full-heart-4");
// 5
let favDestination5 = document.getElementById("favorite-5");
let emptyHeart5 = document.getElementById("empty-heart-5");
let fullHeart5 = document.getElementById("full-heart-5");

favDestination.addEventListener("click", () => {
  if (emptyHeart.style.display == "block") {
    fullHeart.style.display = "block";
    emptyHeart.style.display = "none";
  } else {
    emptyHeart.style.display = "block";
    fullHeart.style.display = "none";
  }
});

favDestination2.addEventListener("click", () => {
  if (emptyHeart2.style.display == "block") {
    fullHeart2.style.display = "block";
    emptyHeart2.style.display = "none";
  } else {
    emptyHeart2.style.display = "block";
    fullHeart2.style.display = "none";
  }
});

favDestination3.addEventListener("click", () => {
  if (emptyHeart3.style.display == "block") {
    fullHeart3.style.display = "block";
    emptyHeart3.style.display = "none";
  } else {
    emptyHeart3.style.display = "block";
    fullHeart3.style.display = "none";
  }
});

favDestination4.addEventListener("click", () => {
  if (emptyHeart4.style.display == "block") {
    fullHeart4.style.display = "block";
    emptyHeart4.style.display = "none";
  } else {
    emptyHeart4.style.display = "block";
    fullHeart4.style.display = "none";
  }
});

favDestination5.addEventListener("click", () => {
  if (emptyHeart5.style.display == "block") {
    fullHeart5.style.display = "block";
    emptyHeart5.style.display = "none";
  } else {
    emptyHeart5.style.display = "block";
    fullHeart5.style.display = "none";
  }
});
