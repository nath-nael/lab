function validates() {
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const packageRadio = document.getElementsByName("package");
  resetErrors();

  let isValid = true;

  if (firstName === "") {
    showError("error-first-name");
    isValid = false;
    return false;
  }
  if (lastName === "") {
    showError("error-last-name");
    isValid = false;
    return false;
  }
  if (email === "") {
    showError("error-email");
    isValid = false;
    return false;
  } else if (!isValidEmail(email)) {
    showError("error-email", "Invalid email format");
    isValid = false;
    return false;
  }
  if (phone === "") {
    showError("error-phone");
    isValid = false;
    return false;
  } else if (!isValidPhone(phone)) {
    showError(
      "error-phone",
      "Invalid phone number format, min. length 10 digits"
    );
    isValid = false;
    return false;
  }
  if (password === "") {
    showError("error-password");
    isValid = false;
    return false;
  }
  if (confirmPassword === "") {
    showError("error-confirm-password");
    isValid = false;
    return false;
  }
  if (password !== confirmPassword) {
    showError(
      "error-confirm-password",
      "Password and Confirm Password do not match"
    );
    isValid = false;
    return false;
  }
  let packageSelected = false;
  for (let i = 0; i < packageRadio.length; i++) {
    if (packageRadio[i].checked) {
      packageSelected = true;
      break;
    }
  }
  if (!packageSelected) {
    showError("error-package");
    isValid = false;
    return false;
  }
  if (isValid) {
    alert("Welcome to Jenius Academy!");
    window.location.href = "/home.html";
  }
  function resetErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (element) {
      element.style.display = "none";
    });
  }

  function showError(elementId, message = "") {
    const errorElement = document.getElementById(elementId);
    errorElement.style.display = "block";
    if (message) {
      errorElement.textContent = message;
    }
  }

  function isValidEmail(email) {
    var parts = email.split("@");

    if (parts.length !== 2) {
      return false;
    }

    if (parts[0] === "" || parts[1] === "") {
      return false;
    }

    if (parts[0].indexOf("@") !== -1 || parts[1].indexOf("@") !== -1) {
      return false;
    }

    if (parts[1].indexOf(".") === -1) {
      return false;
    }

    return true;
  }

  function isValidPhone(phone) {
    let counter = 0;
    for (let i = 0; i < phone.length; i++) {
      counter++;
    }
    if (counter < 10) {
      return false;
    }
    return true;
  }
}
