console.log("connected");

const body = document.getElementById("container_task");
const containerInput = document.getElementById("container_input");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    if (input.value === '') {
        alert("Please enter task");
    }
    else{
        let list = document.createElement("li");
        let span = document.createElement("span");

        list.textContent = input.value;
        body.appendChild(list);
    
        span.innerHTML = "\u00d7";
        list.appendChild(span);

        input.value = '';

        saveData();
    };
});

body.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('active');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", body.innerHTML);
}
function loadData() {
    body.innerHTML = localStorage.getItem("data");
}
loadData();