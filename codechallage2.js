function showMessage(elemnt, message){
elemnt.textContent = message
}
const myElement = document.getElementById('myElement');
myElement.addEventListener("click", () => {
    showMessage(myElement, "Clicked!");
  });

  myElement.addEventListener("mouseover", () => {
    showMessage(myElement, "Mouse over!");
  });
  