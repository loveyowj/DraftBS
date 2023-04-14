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
    
    
    var input = document.getElementById("mfrom");
    var result = document.getElementById("mto");
    var measurement1 = document.getElementById ("select_from");
    var measurement2 = document.getElementById ("select_to");
    var measurementValue,resultValue;
    var finalResult = document.getElementById('mto');

    input.addEventListener("keyup",getOption);
    measurement1.addEventListener("change",getOption);
    measurement2.addEventListener("change",getOption);
    finalResult.addEventListener("change",getOption);

    function getOption(){
        measurementValue = measurement1.value;
        resultValue = measurement2.value;

        if (measurementValue === "C" && resultValue === "K"){
            result.value = Number (input.value)*274.25;
        }else if(measurementValue === "C" && resultValue === "F"){
            result.value = Number (input.value)*33.8;
        }else if(measurementValue === "C" && resultValue === "C"){
            result.value = input.value;
        }
        else if(measurementValue === "K" && resultValue === "C"){
            result.value = Number (input.value)*-272.15;
        }else if(measurementValue === "K" && resultValue === "F"){
            result.value = Number (input.value)*-457.87;
        }else if(measurementValue === "K" && resultValue === "K"){
            result.value = input.value;
        }
        else if(measurementValue === "F" && resultValue === "C"){
            result.value = Number (input.value)*-17.222222222;
        }else if(measurementValue === "F" && resultValue === "K"){
            result.value = Number (input.value)*255.92777778;
        }else if(measurementValue === "F" && resultValue === "F"){
            result.value = input.value;
        }
        finalResult = result.value;
    }