// creating 4 boxes that are buttons 

function createNode(buttonColor) {
    const node = document.createElement("button");
    node.className = "button";
    node.innerText = buttonColor;
    node.style.background = buttonColor;

    // Adding event listner 
    node.addEventListener("click", () => {
        console.log(`${buttonColor} button cliked`);
        document.querySelector(".bg").style.background = buttonColor;
       return; 
    });
    document.body.appendChild(node);
    console.log(`creating button ${buttonColor}`); 
}

createNode("red"); 
createNode("skyblue");
createNode("violet");
createNode("green");


