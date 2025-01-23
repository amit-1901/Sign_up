document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  // Validation
  let isValid = true;

  // Name validation
  const namePattern = /^[a-zA-Z][a-zA-Z\s'-]{2,49}$/;  // Start with a letter, allow letters, spaces, hyphens, or apostrophes, and length between 3-50
  if (!name) {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else if (!namePattern.test(name)) {
    nameError.textContent =
      "Name must start with a letter, be 3-50 characters long, and contain only letters, spaces, hyphens, or apostrophes.";
    isValid = false;
  }

  if (!email) {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else {
    // Standard email regex for validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }
  }
   

  if (!password) {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  if (!confirmPassword) {
    confirmPasswordError.textContent = "Please confirm your password.";
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    alert("Signup successful!");
    console.log({ name, email, password });
  }
});
