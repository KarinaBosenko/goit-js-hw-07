const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleNameInput);

function handleNameInput(event) {
  let name = event.target.value.trim();
  if (name === "") {
    spanEl.innerHTML = "Anonymous";
  } else {
    spanEl.innerHTML = name;
  }
}
