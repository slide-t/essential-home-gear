document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".dropdown-toggle");
  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      content.classList.toggle("show");
    });
  });
});
