document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.querySelector('[data-js-role="enter"]');
  const landing = document.querySelector(".b-2-landing-main");
  const mainPage = document.querySelector(".section-3-main");

  enterButton.addEventListener("click", () => {
    // Fade out landing
    landing.classList.add("fade-out");

    // Fade in main after delay
    setTimeout(() => {
      mainPage.classList.add("fade-in");
    }, 800);
  });
});
