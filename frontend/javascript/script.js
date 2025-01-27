// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Typed.js
  var typed = new Typed(".texts", {
    strings: ["Front-End Developer", "Full-Stack Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});
// script for typed function ends

//
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  // Close the navbar after clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        // Use Bootstrap's collapse method to hide the navbar
        const collapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: true,
        });
      }
    });
  });
});
//

// script for contact typed starts
const options = {
  strings: ["Gmail", "WhatsApp", "Instagram", "Telegram", "Linkedin", "GitHub"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
};

const typed = new Typed("#typical-output", options);
// script for contact typed ends

// contact form js code starts
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const formData = new FormData(this);

    // Convert FormData to a regular object for sending as JSON
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Directly set the API URL for your backend
    const apiUrl = "https://portfolio-website-icmf.onrender.com"; // Replace with your Render backend URL

    // Send data to Node.js server
    fetch(`${apiUrl}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((response) => {
        alert("Form submitted successfully");
        console.log(response);

        // Reset the form fields after successful submission
        document.getElementById("contactForm").reset(); // This resets the form fields to empty

        // Show the success message
        document.getElementById("successMessage").style.display = "block";

        // Optionally, hide the success message after a few seconds
        setTimeout(() => {
          document.getElementById("successMessage").style.display = "none";
        }, 8000); // Hide after 8 seconds
      })
      .catch((error) => {
        alert("Error submitting the form");
        console.error(error);
      });
  });
// contact form js code ends

// top button js code
// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Function to scroll the page to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// top button js code ends
