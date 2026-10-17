const form = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || phone === "" || message === "") {
    feedback.textContent = "Please fill in every field.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    return;
  }

  const digitsOnly = /^[0-9]+$/;
  if (!digitsOnly.test(phone)) {
    feedback.textContent = "Phone number must contain digits only.";
    return;
  }

  feedback.textContent = "Thank you, " + name + "! Your message was sent.";
  form.reset();
});