// Simple script for input focus animation and basic alert for login/signup

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("main input");

  // Add subtle pulse animation on focus
  searchInput.addEventListener("focus", () => {
    searchInput.style.animation = "pulse 1s infinite";
  });

  searchInput.addEventListener("blur", () => {
    searchInput.style.animation = "none";
  });

  // Add click handlers for header links
  const links = document.querySelectorAll("header ul li a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`This feature (${link.textContent}) is coming soon!`);
    });
  });
});

/* Add pulse keyframes via JS */
const style = document.createElement("style");
style.textContent = `
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }
  70% {
    box-shadow: 0 0 10px 10px rgba(255, 82, 82, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
  }
}
`;
document.head.appendChild(style);
