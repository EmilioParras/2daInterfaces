function showRegister() {
  document.getElementById("loginForm").style.display = "none"
  document.getElementById("registerForm").style.display = "flex"
}

function showLogin() {
  document.getElementById("loginForm").style.display = "flex"
  document.getElementById("registerForm").style.display = "none"
}

function togglePasswordVisibility(id) {
  const passwordInput = document.getElementById(id);
  const passwordToggle = passwordInput.nextElementSibling; 

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.classList.remove("fa-eye");
    passwordToggle.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    passwordToggle.classList.remove("fa-eye-slash");
    passwordToggle.classList.add("fa-eye");
  }
}
