function handleClick() {
  alert("hi");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);

console.log(buttonElement.setAttribute("class","warning"));