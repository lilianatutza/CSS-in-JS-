function handleClick() {
  alert("hi");

  let heading = document.querySelector("h1");
  heading.style.color = "green";
  heading.style.background = "yellow";
  heading.style.borderRadius = "50px";
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);
