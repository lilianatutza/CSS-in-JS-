function handleClick() {
  alert("hi");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);

buttonElement.style.background = "red"

let heading = document.querySelector("h1");
heading.style.color = "green"