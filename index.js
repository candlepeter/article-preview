
const social = document.getElementById("social");
const shareBtn = document.getElementById("share-btn");

function displaySocial() {
  social.classList.toggle("d-none");
}

shareBtn.addEventListener("click", displaySocial)
