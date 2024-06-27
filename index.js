function handleClick() {
  alert("hi");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
buttonElement.style.padding = "100px";
