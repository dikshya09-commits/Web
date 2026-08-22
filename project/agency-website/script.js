// ==========================================
// MOBILE NAVBAR
// ==========================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}

// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formMessage.innerText = "Please fill all fields.";

      formMessage.style.color = "red";

      return;
    }

    formMessage.innerText = "Message sent successfully!";

    formMessage.style.color = "green";

    contactForm.reset();
  });
}
