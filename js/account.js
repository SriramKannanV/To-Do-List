const backBtn = document.getElementById("accountIcon");
const inputText = document.getElementById("accountBox");
const submitBtn = document.getElementById("submitBtn");
const checkBtn = document.getElementById("checkBtn");
// const dummy = document.getElementById("accountMainP");
const span = document.querySelector("span");

backBtn.addEventListener("click", () =>{
    window.alert("You Pressed Back!")
});

span.addEventListener("click", () => {
    alert("You Pressed Signin");
});

submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    if(inputText.value.trim() === "" || !checkBtn.checked){
        alert("Please Enter Your Name and Click Agree");
        return;
    }

    localStorage.setItem("username", inputText.value.trim());

    // dummy.textContent = inputText.value;

    window.open("html/lists.html", "_self")
    // console.log(inputText.value);
});