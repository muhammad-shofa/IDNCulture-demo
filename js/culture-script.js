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
// let menuIconCultures = document.getElementById("menu-icon-cultures");

// update
// let update = document.getElementById("update");
// let closeUpdate = document.getElementById("close-update");

// closeUpdate.addEventListener("click", () => {
//   update.style.display = "none";
// });

document.addEventListener("DOMContentLoaded", loadingTime);
function loadingTime() {
  allContent.style.display = "none";
  setTimeout(showAllContent, 200); // 2500

  function showAllContent() {
    loading.classList.add("hiddenToTop");
    allContent.style.display = "block";
  }
}

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 10) {
    containerNav.classList.add("sticky");
  } else {
    containerNav.classList.remove("sticky");
  }
});

// sidebar
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
