document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  // Simulate a backend call
  const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user", password: "user123", role: "user" },
  ];

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    alert(`Welcome, ${user.role}!`);
    // Redirect user based on their role
    if (user.role === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "user.html";
    }
  } else {
    errorMsg.style.display = "block";
    errorMsg.textContent = "Invalid username or password.";
  }
});
