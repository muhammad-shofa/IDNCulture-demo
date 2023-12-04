// loading
const loading = document.getElementById("loading");
const allContent = document.getElementById("all-content");
// sticky nav
let nav = document.querySelector("nav");
let containerNav = document.getElementById("container-nav");
let containerNavCulture = document.getElementById("container-nav-cultures");
// back to top
let backToTop = document.getElementById("back-to-top");
// icon navbar
let menuIcon = document.getElementById("menu-icon");
let menuIconCultures = document.getElementById("menu-icon-cultures");
// dropdown
let triggerDropdown = document.getElementById("dropdown-explore");
let textCulture = document.getElementById("text-culture");
let containerDropdown = document.getElementById("container-dropdown");
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
  setTimeout(showAllContent, 2500); // 2500

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
  } else {
    popupGallery.style.display = "none";
  }
}
