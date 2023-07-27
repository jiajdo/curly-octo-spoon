const recipeTitle = document.getElementById("title");
recipeTitle.style.color = "black";

let flag = true;
function changeTitleColor() {
    const exampleStyle = document.getElementById("title").style;
    flag ? exampleStyle.color = "red" : exampleStyle.color = "black";
    flag = !flag;
} 

//Goodbye popup at the end of the page
function popupFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
