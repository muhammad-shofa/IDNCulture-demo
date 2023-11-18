// loading
let loading = document.getElementById("loading");
let allContent = document.getElementById("all-content");

document.addEventListener("DOMContentLoaded", loadingTime);
function loadingTime() {
  allContent.style.display = "none";
  setTimeout(showAllContent, 2500);

  function showAllContent() {
    loading.classList.add("hiddenToTop");
    allContent.style.display = "block";
  }
}

// sticky nav
let nav = document.querySelector("nav");
let containerNav = document.getElementById("container-nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    containerNav.classList.add("sticky");
  } else {
    containerNav.classList.remove("sticky");
  }
});

// icon navbar
let menuIcon = document.getElementById("menu-icon");
// let lineMenuIcon1 = document.getElementById("line-1");
// let lineMenuIcon2 = document.getElementById("line-2");
// let lineMenuIcon3 = document.getElementById("line-3");
menuIcon.addEventListener("click", function () {
  this.classList.toggle("close-icon");
  const navUl = document.getElementById("nav-ul");
  if (navUl.classList.contains("hidden-ul")) {
    navUl.classList.remove("hidden-ul");
    navUl.classList.add("show-ul");
    // lineMenuIcon1.style.backgroundColor = "var(--black-accent)";
    // lineMenuIcon2.style.backgroundColor = "var(--black-accent)";
    // lineMenuIcon3.style.backgroundColor = "var(--black-accent)";
  } else {
    navUl.classList.remove("show-ul");
    navUl.classList.add("hidden-ul");
    // lineMenuIcon1.style.backgroundColor = "var(--white-accent)";
    // lineMenuIcon2.style.backgroundColor = "var(--white-accent)";
    // lineMenuIcon3.style.backgroundColor = "var(--white-accent)";
  }
});

// change theme
// let changeTheme = document.getElementById("change-theme");
// let darkIcon = document.getElementById("dark-icon");
// let lightIcon = document.getElementById("light-icon");

// const body = document.body;

// changeTheme.addEventListener("click", () => {
//   body.classList.toggle("dark-mode");

//   if (darkIcon.classList.contains("dark-icon")) {
//     changeTheme.classList.add("black-bg-theme");
//     darkIcon.classList.remove("dark-icon");
//     darkIcon.classList.add("change-dark-icon");
//     lightIcon.classList.remove("light-icon");
//     lightIcon.classList.add("change-light-icon");
//     // nav.style.backgroundColor = "#000000";
//   } else {
//     changeTheme.classList.remove("black-bg-theme");
//     darkIcon.classList.remove("change-dark-icon");
//     darkIcon.classList.add("dark-icon");
//     lightIcon.classList.remove("change-light-icon");
//     lightIcon.classList.add("light-icon");
//     // nav.style.backgroundColor = "#ffffff";
//   }
// });

// variable popup and fav
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

// function popup explore
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

// function fav destination
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

// gallery animation
let copy1 = document.querySelector(".slide-container-1").cloneNode(true);
document.querySelector(".img-gallery-1").appendChild(copy1);
// gallery animation 2
let copy2 = document.querySelector(".slide-container-2").cloneNode(true);
document.querySelector(".img-gallery-2").appendChild(copy2);
// gallery animation 3
let copy3 = document.querySelector(".slide-container-3").cloneNode(true);
document.querySelector(".img-gallery-3").appendChild(copy3);
