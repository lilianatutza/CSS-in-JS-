function handleClick() {
  let heading = document.querySelector("h1");
  heading.classList.add("hidden");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);


//setAttributes
//element.style.marginRight = "10px"
//element.classList.add("special")
//element.classList.remove("special")
//element.classList.toggle("special")