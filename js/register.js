// Select form and inputs
const registerForm = document.querySelector("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

// Add event listener for form submission
registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validation flag
  let isValid = true;

  // Validate inputs
  if (username === "" || email === "" || password === "") {
    successMessage.textContent = "All fields are required.";
    successMessage.style.color = "red";
    isValid = false;
  }

  // If inputs are valid
  if (isValid) {
    // Store user data in LocalStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Show success message
    successMessage.textContent =
      "Registration successful! Redirecting to login...";
    successMessage.style.color = "green";

    // Redirect to login page after 2 seconds
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  }
});
