// ========== Theme Toggle ========== //
const toggleButton = document.getElementById("themeToggle");
const body = document.body;

// Load theme preference from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}

// Toggle theme
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ========== Project Filtering ========== //
const filterButtons = document.querySelectorAll(".filters button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    // Highlight selected button
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Filter project cards
    projectCards.forEach(card => {
      const matches = category === "all" || card.classList.contains(category);
      card.style.display = matches ? "block" : "none";
    });

    // Optional: scroll to projects section
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });
});
// ========== Smooth Scrolling ========== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
// ========== Form Validation ========== //
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Simple validation
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate form submission
  alert("Form submitted successfully!");
  form.reset();
});
// ========== Scroll to Top Button ========== //
const scrollToTopButton = document.getElementById("scrollToTop");
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Show/hide scroll to top button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});
// ========== Responsive Navigation ========== //
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// Close navigation menu when a link is clicked
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
// ========== Image Lazy Loading ========== //
const lazyImages = document.querySelectorAll("img.lazy");
const lazyLoad = () => {
  lazyImages.forEach(img => {
    if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom > 0) {
      img.src = img.dataset.src;
      img.classList.remove("lazy");
    }
  });
};
window.addEventListener("scroll", lazyLoad);
window.addEventListener("resize", lazyLoad);  