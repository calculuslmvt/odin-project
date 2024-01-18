
const urlParams = new URLSearchParams(window.location.search);

const resultNode = document.createElement("div");
resultNode.innerText = urlParams.get("sum");
document.body.appendChild(resultNode);
console.log("result"); 
