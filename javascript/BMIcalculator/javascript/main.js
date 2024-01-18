document.addEventListener("submit", (event)=>{
    console.log("submited");
    event.preventDefault();
    const age = document.getElementById("age").value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const result = weight/(height*height);
    window.location.href = `../result.html?sum=${result}`;
    console.log();
});
//console.log(age.value); 

