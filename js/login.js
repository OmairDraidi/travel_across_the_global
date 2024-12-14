const loginForm = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (email === storedEmail && password === storedPassword) {
    successMessage.textContent = "Login successful! Redirecting...";
    successMessage.classList.remove("hidden");
    successMessage.classList.add("visible");

    errorMessage.classList.remove("visible");
    errorMessage.classList.add("hidden");

    setTimeout(function () {
      window.location.href = "index.html";
    }, 1000);
  } else {
    errorMessage.textContent = "Invalid email or password. Please try again.";
    errorMessage.classList.remove("hidden");
    errorMessage.classList.add("visible");

    successMessage.classList.remove("visible");
    successMessage.classList.add("hidden");
  }
});
