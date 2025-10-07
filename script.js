function showRegister() {
  resetForms(); // limpia los campos
  document.getElementById("loginForm").style.display = "none"
  document.getElementById("registerForm").style.display = "flex"
}

function showLogin() {
  resetForms(); // limpia los campos
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
function validateForm() {
  const inputs = document.querySelectorAll('#registerForm input');
  const button = document.getElementById("registerBtn");
  
  let allFilled = true;

  inputs.forEach(input => {
    const placeholder = input.getAttribute('placeholder')?.toLowerCase();

    // Si no es el campo opcional y está vacío → no está completo
    if (placeholder !== 'nickname (optional)' && input.value.trim() === '') {
      allFilled = false;
    }
  });

  if (allFilled) {
    button.classList.add('golden');
    resetForms(); // limpia después de registrarse
    setTimeout(() => button.classList.remove('golden'), 1500);
  } else {
    alert("Por favor, completá todos los campos (menos el nickname si no querés!!)");
  }
}
function resetForms() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => input.value = '');
}

function handleLogin() {
  resetForms(); // limpia los campos del login
}


