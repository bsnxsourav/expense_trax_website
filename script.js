// Update year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  window.location.href = `mailto:bsnsourav.business@gmail.com?subject=Contact from ${name}&body=${message}%0D%0AFrom: ${email}`;
});
