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

// popup explore
document.addEventListener("DOMContentLoaded", () => {
  let triggerPopup = document.getElementById("trigger-popup");
  let popup = document.getElementById("container-popup");
  let closePopupIcon = document.getElementById("close-popup-icon");

  triggerPopup.addEventListener("click", showPopup);
  closePopupIcon.addEventListener("click", closePopup);

  function showPopup() {
    if (popup.style.display == "none") {
      popup.style.display = "block";
    } else {
      popup.style.display = "none";
    }
  }

  function closePopup() {
    if (popup.style.display == "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
  }

  window.onclick = function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };
});

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
