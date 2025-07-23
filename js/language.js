document.getElementById("en").addEventListener("click", () => switchLang("en"));
document.getElementById("es").addEventListener("click", () => switchLang("es"));

function switchLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
document.getElementById("en").addEventListener("click", function () {
  const bio = document.getElementById("steps-text");
  bio.innerHTML = bio.getAttribute("data-en");
});

document.getElementById("es").addEventListener("click", function () {
  const bio = document.getElementById("steps-text");
  bio.innerHTML = bio.getAttribute("data-es");
});
document.getElementById("en").addEventListener("click", function () {
  const bio = document.getElementById("experience");
  bio.innerHTML = bio.getAttribute("data-en");
});

document.getElementById("es").addEventListener("click", function () {
  const bio = document.getElementById("experience");
  bio.innerHTML = bio.getAttribute("data-es");
});
document.getElementById("en").addEventListener("click", function () {
  const bio = document.getElementById("work");
  bio.innerHTML = bio.getAttribute("data-en");
});

document.getElementById("es").addEventListener("click", function () {
  const bio = document.getElementById("work");
  bio.innerHTML = bio.getAttribute("data-es");
});
