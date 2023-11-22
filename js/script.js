// loading
const loading = document.getElementById("loading");
const allContent = document.getElementById("all-content");
// sticky nav
let nav = document.querySelector("nav");
let containerNav = document.getElementById("container-nav");
// back to top
let backToTop = document.getElementById("back-to-top");
// icon navbar
let menuIcon = document.getElementById("menu-icon");
// dropdown
let triggerDropdown = document.getElementById("dropdown-explore");
let textCulture = document.getElementById("text-culture");
let containerDropdown = document.getElementById("container-dropdown");
// variable fav
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
// gallery animation
let copy1 = document.querySelector(".slide-container-1").cloneNode(true);
let copy2 = document.querySelector(".slide-container-2").cloneNode(true);
let copy3 = document.querySelector(".slide-container-3").cloneNode(true);
// popup gallery
let imgPopupGallery = document.getElementById("img-popup-gallery");
// update
let update = document.getElementById("update");
let closeUpdate = document.getElementById("close-update");

closeUpdate.addEventListener("click", () => {
  update.style.display = "none";
});

document.addEventListener("DOMContentLoaded", loadingTime);
function loadingTime() {
  allContent.style.display = "none";
  setTimeout(showAllContent, 2500);

  function showAllContent() {
    loading.classList.add("hiddenToTop");
    allContent.style.display = "block";
  }
}

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    containerNav.classList.add("sticky");
    containerDropdown.style.backgroundColor = "var(--white-accent)";
  } else {
    containerNav.classList.remove("sticky");
    containerDropdown.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  }
});

triggerDropdown.addEventListener("mouseover", showDropdown);
containerDropdown.addEventListener("mouseover", showDropdown);
triggerDropdown.addEventListener("mouseout", hiddenDropdown);
containerDropdown.addEventListener("mouseout", hiddenDropdown);
function showDropdown() {
  containerDropdown.style.marginTop = "0px";
  textCulture.style.color = "var(--secondary)";
}

function hiddenDropdown() {
  containerDropdown.style.marginTop = "-1000px";
  textCulture.style.color = "";
}

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 700) {
    backToTop.style.opacity = 0.8;
  } else {
    backToTop.style.opacity = 0;
  }
});

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

// function popup explore
function showPopup(popupId) {
  let containerPopup = document.getElementById("container-popup-" + popupId);
  if (containerPopup.style.display == "none") {
    containerPopup.style.display = "block";
    containerPopup.addEventListener("click", (event) => {
      if (event.target == containerPopup) {
        containerPopup.style.display = "none";
      }
    });
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
document.querySelector(".img-gallery-1").appendChild(copy1);
document.querySelector(".img-gallery-2").appendChild(copy2);
document.querySelector(".img-gallery-3").appendChild(copy3);

// popop gallery

function showPopupGallery(idPopupGalleryName) {
  let popupGallery = document.getElementById(
    "popup-gallery-" + idPopupGalleryName
  );
  if (popupGallery.style.display == "none") {
    popupGallery.style.display = "block";
    popupGallery.addEventListener("click", closePopupGallery);
    function closePopupGallery(event) {
      if (event.target == popupGallery) {
        popupGallery.style.display = "none";
      }
    }
    // document.addEventListener("click", closePopup);
  } else {
    popupGallery.style.display = "none";
  }
}

// popup gallery
// popupGallery.addEventListener("click", closePopupGallery);
