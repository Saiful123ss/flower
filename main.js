// Remove 'not-loaded' class when page loads to trigger animations
window.addEventListener("load", () => {
  document.body.classList.remove("not-loaded");
});
