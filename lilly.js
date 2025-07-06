document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.getElementById("enter-btn");
  const landingWrapper = document.getElementById("landing-wrapper");
  const mainWrapper = document.getElementById("main-wrapper");

  enterButton.addEventListener("click", () => {
    // Start fading out the entire landing wrapper
    landingWrapper.classList.add("fade-out");

    setTimeout(() => {
      // After fade out, hide landing wrapper
      landingWrapper.style.display = "none";

      // Show the main wrapper and fade it in
      mainWrapper.style.display = "flex";
      mainWrapper.classList.add("fade-in");
    }, 1000); // Match this to your CSS transition duration (1s here)
  });
});
