const nameDisplay = document.getElementById("nameDisplay");
const addBtn = document.getElementById("addBtn");
const submitBtn = document.getElementById("submitBtn");
const popUp = document.getElementById("popupBox");
// const taskTitle = document.getElementById("taskTitle");
// const taskDis = document.getElementById("taskDis");
const getTitle = document.getElementById("getTitle");
const getDis = document.getElementById("getDis");
const taskList = document.getElementById("tasksList");
const comTask = document.getElementById("comTask");
const comToggle = document.getElementById("comToggle");
const rejTask = document.getElementById("rejTask");
const rejToggle = document.getElementById("rejToggle");
const allToggle = document.getElementById("allToggle");
const logoutToggle = document.getElementById("logoutToggle");
const allCount = document.getElementById("allCount");
const comCount = document.getElementById("comCount");
const rejCount = document.getElementById("rejCount");

// function loadUI(){
//     if(localStorage.getItem("allTask")){
//         taskList.innerHTML = localStorage.getItem("allTask");
//         comTask.innerHTML = localStorage.getItem("comTask");
//         rejTask.innerHTML = localStorage.getItem("rejTask");
//     }
// }

// loadUI();

function hide(){
    comTask.style.display = "none";
    rejTask.style.display = "none";
    return
}

hide();

function display(){
    const displayName = localStorage.getItem("username");

    if(displayName){
        nameDisplay.textContent = `Hi, ${displayName}`;
    }else{
        nameDisplay.textContent = `Hi, Guest`;
    }
}

display();

addBtn.addEventListener("click", () => {    
    popUp.style.display = "flex";
});

popUp.addEventListener("click", (e) => {    
    if(e.target === popUp){
        popUp.style.display = "none";
    }
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
   
    if(getTitle.value === "" || getDis.value === ""){
        alert("Please Enter Details");
        return
    }
    
    const taskContent = document.createElement("div");
    taskContent.classList.add("task")

    const taskDiv = document.createElement("div");

    const taskTitle = document.createElement("h3");
    taskTitle.textContent = getTitle.value;

    const taskDis = document.createElement("p");
    taskDis.textContent = getDis.value;

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDis);

    const taskIcon = document.createElement("div");

    const tickIcon = document.createElement("i");
    tickIcon.className = "fa-solid fa-square-check";
    tickIcon.classList.add("tick");

    const wrongIcon = document.createElement("i");
    wrongIcon.className = "fa-solid fa-square-xmark";
    wrongIcon.classList.add("reject");

    taskIcon.appendChild(tickIcon);
    taskIcon.appendChild(wrongIcon);

    taskContent.appendChild(taskDiv);
    taskContent.appendChild(taskIcon);

    taskList.appendChild(taskContent);
    // saveUI();
    updateCount();

    popUp.style.display = "none";
    getTitle.value = "";
    getDis.value = "";

    // console.log(taskContent);

    taskList.addEventListener("click", (e) => {
        const taskItem = e.target.closest(".task");
        if(!taskItem) return;

        if(e.target.classList.contains("tick")){
            comTask.appendChild(taskItem);
            // saveUI();
            updateCount();

            // console.log(taskItem);
            return;
        }

        if(e.target.classList.contains("reject")){
            rejTask.appendChild(taskItem);
            // saveUI();
            updateCount();

            // console.log(taskItem);
            return;
        }
    })
});

function showOnly(activeDiv){
    taskList.style.display = "none";
    comTask.style.display = "none";
    rejTask.style.display = "none";

    activeDiv.style.display = "block";
}

comToggle.addEventListener("click", () => {
    showOnly(comTask);
})

rejToggle.addEventListener("click", () => {
    showOnly(rejTask);
})

allToggle.addEventListener("click", () => {
    showOnly(taskList);
})

logoutToggle.addEventListener("click", () => {
    window.open("../index.html", "_self");
})

// function saveUI(){
//     localStorage.setItem("allTask", taskList.innerHTML);
//     localStorage.setItem("comTask", comTask.innerHTML);
//     localStorage.setItem("rejTask", rejTask.innerHTML);
// }

function updateCount(){
    allCount.textContent = taskList.querySelectorAll(".task").length;
    comCount.textContent = comTask.querySelectorAll(".task").length;
    rejCount.textContent = rejTask.querySelectorAll(".task").length;
}