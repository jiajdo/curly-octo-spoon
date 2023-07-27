const recipeTitle = document.getElementById("title");
recipeTitle.style.color = "black";

let flag = true;
function changeTitleColor() {
    const exampleStyle = document.getElementById("title").style;
    flag ? exampleStyle.color = "red" : exampleStyle.color = "black";
    flag = !flag;

    //recipeTitle.style.color = "red"
} 