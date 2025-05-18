const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formFields = getNamedFormFields(loginForm.elements);

  if (areAllFieldsFilled(formFields)) {
    console.log(formFields);
    loginForm.reset();
  } else {
    alert("All form fields must be filled in");
  }
});

function getNamedFormFields(elements) {
  const namedFieldsArr = Object.entries(elements)
    .filter(([key, element]) => isNaN(Number(key)))
    .map(([key, input]) => [key, input.value.trim()]);
  return Object.fromEntries(namedFieldsArr);
}

function areAllFieldsFilled(obj) {
  return Object.values(obj).every((e) => e);
}
