let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let date = new Date();
let dayNum = date.getDay();

let day = date.getDate();
let month = months[date.getMonth()];

let active = document.querySelector(".week li:nth-child("+dayNum+")");
active.classList.add('current');

let h1 = document.createElement('h1');
h1.innerHTML = day;
active.appendChild(h1);

let h5 = document.createElement('h5');
h5.innerHTML = month;
active.appendChild(h5);


let body = document.body;

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
    profile.classList.toggle('active');
}

let searchForm = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    profile.classList.remove('active');
}


let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

window.onscroll = () =>{
    profile.classList.remove('active');
    searchForm.classList.remove('active');
}






const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : 
[]

console.log(itemsArray)

document.querySelector("#enter").addEventListener("click", () =>{
    const item = document.querySelector("#item")
    createItem(item)
})

function displayItems(){
    let items = ""
    for (let i = 0; i < itemsArray.length; i++){
        items += `<div class = "item">
                <div class = "input-controller">
                    <textarea disabled>${itemsArray[i]}</textarea>
                    <div class = "edit-controller">
                        <i class = "fa-solid fa-check deletBtn"></i>
                        <i class = "fa-solid fa-pen editBtn"></i>
                    </div>
                </div>
                <div class = "update-controller">
                    <button class = "saveBtn">Save</button>
                    <button class = "cancelBtn">Cancel</button>
                </div>
                </div>`
    }
    document.querySelector(".to-do-list").innerHTML = items;
    activateDeleteListeners()
    activateEditListeners()
    activateSaveListeners()
    activateCancelListeners()
}

function activateDeleteListeners(){
    let deleteBtn = document.querySelectorAll(".deletBtn")
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => { deleteItem(i)})
    })
}

function deleteItem(i){
    itemsArray.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function activateEditListeners(){
    const editBtn = document.querySelectorAll(".editBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eb, i) => {
        eb.addEventListener("click", () =>{
            updateController[i].style.display = "block"
            inputs[i].disabled = false
        })
    })
}

function activateSaveListeners(){
    const saveBtn = document.querySelectorAll(".saveBtn")
    const inputs = document.querySelectorAll(".input-controller textarea")
    saveBtn.forEach((sb, i) => {
        sb.addEventListener("click", () => {
            updateItem(inputs[i].value, i)
        })
    })
}

function updateItem(text, i){
    itemsArray[i] = text
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function activateCancelListeners(){
    const cancelBtn = document.querySelectorAll(".cancelBtn")
    const updateController = document.querySelectorAll (".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    cancelBtn.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            updateController[i].style.display = "none"
            inputs[i].disabled
        })
    })
}

function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

window.onload = function(){
    displayItems()
}

//variable
let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = '00';

//display
document.getElementById('minutes').innerHTML = workTime;
document.getElementById('seconds').innerHTML = seconds;

workTitle.classList.add('active')

//start timer
function start(){
    //change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";


    //change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    //countdown
    let timerFunction = () =>{
        //change display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        //start
        seconds = seconds - 1;

        if(seconds === 0){
            workMinutes = workMinutes - 1;
            if(workMinutes === -1){
                if(breakCount % 2 === 0){
                    //start
                    workMinutes = breakMinutes;
                    breakCount++

                    //change the painel
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                }else{
                    //continue work
                    workMinutes = workTime;
                    breakCount++

                    //change painel
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active')
                }
            }
            seconds = 59;
        }
    }

    //start countdown
    setInterval(timerFunction, 1000); //1000 - 1s

}





