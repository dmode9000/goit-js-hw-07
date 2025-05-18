const inputField = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");
inputField.addEventListener("input", (event) => {
  const value = inputField.value.trim();
  spanOutput.textContent = value ? value : "Anonymous";
});
