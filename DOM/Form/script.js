// JavaScript code for handling form submission and popup display

const form = document.getElementById("survey-form");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");
popup.style.display = "none";

const maleCheckbox = document.getElementById('male');
const femaleCheckbox = document.getElementById('female');

  maleCheckbox.addEventListener('click', function () {
    if (maleCheckbox.checked) {
      femaleCheckbox.checked = false;
    }
  });

  femaleCheckbox.addEventListener('click', function () {
    if (femaleCheckbox.checked) {
      maleCheckbox.checked = false;
    }
  });


submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const dateOfBirth = document.getElementById("date-of-birth").value;
  const country = document.getElementById("country").value;
  const genderElements = document.querySelectorAll('input[name="gender"]:checked');
  const gender = Array.from(genderElements).map(input => input.value).join(", ");
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  if (
    firstName !== "" &&
    lastName !== "" &&
    dateOfBirth !== "" &&
    country !== "" &&
    genderElements.length > 0 &&
    profession !== "" &&
    email !== "" &&
    mobile !== ""
  ) {
    // All fields are completed, so display the popup

    // Get the form values (similar to the previous code)

    // Display values in the popup (similar to the previous code)

    // Show the popup
    popup.style.display = "block";
  } else {
    // Display an error message or alert
    alert("Please complete all fields before submitting.");
  }

  // Display values in the popup
  document.getElementById("popup-first-name").textContent = firstName;
  document.getElementById("popup-last-name").textContent = lastName;
  document.getElementById("popup-date-of-birth").textContent = dateOfBirth;
  document.getElementById("popup-country").textContent = country;
  document.getElementById("popup-gender").textContent = gender;
  document.getElementById("popup-profession").textContent = profession;
  document.getElementById("popup-email").textContent = email;
  document.getElementById("popup-mobile").textContent = mobile;

  
});

closePopupButton.addEventListener("click", () => {
  // Close the popup
  popup.style.display = "none";
});

resetButton.addEventListener("click", () => {
  // Reset the form
  form.reset();
});

