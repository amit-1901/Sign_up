document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // M-1 Without Regexp
  // const passwordInput = document.getElementById("password").value;
  // const confirmPasswordInput = document.getElementById("confirmPassword").value;
  // const password = passwordInput.trim();
  // const confirmPassword =confirmPasswordInput.trim();

  // M-2 With RegExp
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

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
  const namePattern = /^[a-zA-Z][a-zA-Z\s'-]{2,49}$/; // Start with a letter, allow letters, spaces, hyphens, or apostrophes, and length between 3-50
  if (!name) {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else if (!namePattern.test(name)) {
    nameError.textContent =
      "Name must start with a letter, be 3-50 characters long, and contain only letters, spaces, hyphens, or apostrophes.";
    isValid = false;
  }

  // Email validation
  // email = email.toLowerCase(); // chane it into lowercase
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

  // Password Validation
  // if (!password) {
  //   passwordError.textContent = "Password is required.";
  //   isValid = false;
  // } else if (passwordInput !== password) { // Check for leading/trailing spaces
  //   passwordError.textContent = "Password should not have spaces at the beginning or end.";
  //   isValid = false;
  // } else if (password.length < 8) {
  //   passwordError.textContent = "Password must be at least 8 characters.";
  //   isValid = false;
  // }  else if (!/[a-z]/.test(password)) {
  //   passwordError.textContent = "Password must contain at least one lowercase letter.";
  //   isValid = false;
  // } else if (!/[A-Z]/.test(password)) {
  //   passwordError.textContent = "Password must contain at least one uppercase letter.";
  //   isValid = false;
  // } else if (!/[0-9]/.test(password)) {
  //   passwordError.textContent = "Password must contain at least one number.";
  //   isValid = false;
  // } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
  //   passwordError.textContent = "Password must contain at least one special character.";
  //   isValid = false;
  // } else if (/\s/.test(password)) {
  //   passwordError.textContent = "Password should not contain spaces.";
  //   isValid = false;
  // }

  // if (!confirmPassword) {
  //   confirmPasswordError.textContent = "Please confirm your password.";
  //   isValid = false;
  // } else if (confirmPasswordInput !== confirmPassword) { // Check for leading/trailing spaces
  //   confirmPasswordError.textContent = "Confirm Password should not have spaces at the beginning or end.";
  //   isValid = false;
  // } else if (password !== confirmPassword) {
  //   confirmPasswordError.textContent = "Passwords do not match.";
  //   isValid = false;
  // }

  // Password validation with a single RegExp
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[^\s]{8,}$/;

  if (!password.trim()) {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (!passwordPattern.test(password)) {
    passwordError.textContent =
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, one special character, and have no spaces.";
    isValid = false;
  } else {
    passwordError.textContent = ""; // Clear error if valid
  }

  if (!confirmPassword.trim()) {
    confirmPasswordError.textContent = "Please confirm your password.";
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    confirmPasswordError.textContent = ""; // Clear error if valid
  }

  // If valid, show success message
  if (isValid) {
    alert("Signup successful!");
    console.log({ name, email, password });
  } else {
    alert("Please Try Again");
  }
});
