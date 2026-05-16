// Init EmailJS
(function () {
  emailjs.init("dU905yz7w9DWkyEmF");
})();

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".section,.project-card,.skill-card").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Contact Form
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    name: form.querySelector('input[type="text"]').value,
    email: form.querySelector('input[type="email"]').value,
    message: form.querySelector("textarea").value,
    title: "Portfolio Contact"
  };

  emailjs.send(
    "service_aaehy6b",
    "template_3smhcjh",
    params
  )
  .then(() => {
    alert("Message sent successfully 🚀");
    form.reset();
  })
  .catch((error) => {
    alert("Failed to send message");
    console.log(error);
  });
});

// Navbar shadow
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";
  } else {
    header.style.boxShadow = "none";
  }
});