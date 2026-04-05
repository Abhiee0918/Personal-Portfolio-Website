// SUCCESS MESSAGE
function showSuccess() {
  let box = document.getElementById("successBox");

  box.classList.add("show");

  setTimeout(() => {
    box.classList.remove("show");
  }, 3000);
}

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    let top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

