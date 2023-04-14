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

        if(measurementValue === "s" && resultValue === "ms"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "s" && resultValue === "mcs"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "s" && resultValue === "nns"){
            result.value = Number (input.value)*1000000000;
        }else if(measurementValue === "s" && resultValue === "ps"){
            result.value = Number (input.value)*1000000000000;
        }else if(measurementValue === "s" && resultValue === "mn"){
            result.value = Number (input.value)*0.0166666667;
        }else if(measurementValue === "s" && resultValue === "hr"){
            result.value = Number (input.value)*0.0002777778;
        }else if(measurementValue === "s" && resultValue === "d"){
            result.value = Number (input.value)*0.0000115741;
        }else if(measurementValue === "s" && resultValue === "w"){
            result.value = Number (input.value)*0.0000016534;
        }else if(measurementValue === "s" && resultValue === "mo"){
            result.value = Number (input.value)*3.802570537E-7;
        }else if(measurementValue === "s" && resultValue === "yr"){
            result.value = Number (input.value)*3.168808781E-8;
        }else if(measurementValue === "s" && resultValue === "s"){
            result.value = input.value;
        }
        else if(measurementValue === "ms" && resultValue === "s"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "ms" && resultValue === "mcs"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "ms" && resultValue === "nns"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "ms" && resultValue === "ps"){
            result.value = Number (input.value)*1000000000;
        }else if(measurementValue === "ms" && resultValue === "mn"){
            result.value = Number (input.value)*0.0000166667;
        }else if(measurementValue === "ms" && resultValue === "hr"){
            result.value = Number (input.value)*2.777777777E-7;
        }else if(measurementValue === "ms" && resultValue === "d"){
            result.value = Number (input.value)*1.157407407E-8;
        }else if(measurementValue === "ms" && resultValue === "w"){
            result.value = Number (input.value)*1.653439153E-9;
        }else if(measurementValue === "ms" && resultValue === "mo"){
            result.value = Number (input.value)*3.802570537E-10;
        }else if(measurementValue === "ms" && resultValue === "yr"){
            result.value = Number (input.value)*3.168808781E-11;
        }else if(measurementValue === "ms" && resultValue === "ms"){
            result.value = input.value;
        }
        else if(measurementValue === "mcs" && resultValue === "s"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "mcs" && resultValue === "ms"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "mcs" && resultValue === "nns"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "mcs" && resultValue === "ps"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "mcs" && resultValue === "mn"){
            result.value = Number (input.value)*1.666666666E-8;
        }else if(measurementValue === "mcs" && resultValue === "hr"){
            result.value = Number (input.value)*2.777777777E-10;
        }else if(measurementValue === "mcs" && resultValue === "d"){
            result.value = Number (input.value)*1.157407407E-11;
        }else if(measurementValue === "mcs" && resultValue === "w"){
            result.value = Number (input.value)*1.653439153E-12;
        }else if(measurementValue === "mcs" && resultValue === "mo"){
            result.value = Number (input.value)*3.802570537E-13;
        }else if(measurementValue === "mcs" && resultValue === "yr"){
            result.value = Number (input.value)*3.168808781E-14;
        }else if(measurementValue === "mcs" && resultValue === "mcs"){
            result.value = input.value;
        }
        else if(measurementValue === "nns" && resultValue === "s"){
            result.value = Number (input.value)*1.E-9;
        }else if(measurementValue === "nns" && resultValue === "ms"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "nns" && resultValue === "mcs"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "nns" && resultValue === "ps"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "nns" && resultValue === "mn"){
            result.value = Number (input.value)*1.666666666E-11;
        }else if(measurementValue === "nns" && resultValue === "hr"){
            result.value = Number (input.value)*2.777777777E-13;
        }else if(measurementValue === "nns" && resultValue === "d"){
            result.value = Number (input.value)*1.157407407E-14;
        }else if(measurementValue === "nns" && resultValue === "w"){
            result.value = Number (input.value)*1.653439153E-15;
        }else if(measurementValue === "nns" && resultValue === "mo"){
            result.value = Number (input.value)*3.802570537E-16;
        }else if(measurementValue === "nns" && resultValue === "yr"){
            result.value = Number (input.value)*3.168808781E-17;
        }else if(measurementValue === "nns" && resultValue === "nns"){
            result.value = input.value;
        }
        else if(measurementValue === "ps" && resultValue === "s"){
            result.value = Number (input.value)*1.E-12;
        }else if(measurementValue === "ps" && resultValue === "ms"){
            result.value = Number (input.value)*1.E-9;
        }else if(measurementValue === "ps" && resultValue === "mcs"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "ps" && resultValue === "nns"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "ps" && resultValue === "mn"){
            result.value = Number (input.value)*1.666666666E-14;
        }else if(measurementValue === "ps" && resultValue === "hr"){
            result.value = Number (input.value)*2.777777777E-16;
        }else if(measurementValue === "ps" && resultValue === "d"){
            result.value = Number (input.value)*1.157407407E-17;
        }else if(measurementValue === "ps" && resultValue === "w"){
            result.value = Number (input.value)*1.653439153E-18;
        }else if(measurementValue === "ps" && resultValue === "mo"){
            result.value = Number (input.value)*3.802570537E-19;
        }else if(measurementValue === "ps" && resultValue === "yr"){
            result.value = Number (input.value)*3.168808781E-20;
        }else if(measurementValue === "ps" && resultValue === "ps"){
            result.value = input.value;
        }
        else if(measurementValue === "mn" && resultValue === "s"){
            result.value = Number (input.value)*60;
        }else if(measurementValue === "mn" && resultValue === "ms"){
            result.value = Number (input.value)*60000;
        }else if(measurementValue === "mn" && resultValue === "mcs"){
            result.value = Number (input.value)*60000000;
        }else if(measurementValue === "mn" && resultValue === "nns"){
            result.value = Number (input.value)*60000000000;
        }else if(measurementValue === "mn" && resultValue === "ps"){
            result.value = Number (input.value)*60000000000000;
        }else if(measurementValue === "mn" && resultValue === "hr"){
            result.value = Number (input.value)*0.0166666667;
        }else if(measurementValue === "mn" && resultValue === "d"){
            result.value = Number (input.value)*0.0006944444;
        }else if(measurementValue === "mn" && resultValue === "w"){
            result.value = Number (input.value)*0.0000992063;
        }else if(measurementValue === "mn" && resultValue === "mo"){
            result.value = Number (input.value)*0.0000228154;
        }else if(measurementValue === "mn" && resultValue === "yr"){
            result.value = Number (input.value)*0.0000019013;
        }else if(measurementValue === "mn" && resultValue === "mn"){
            result.value = input.value;
        }
        else if(measurementValue === "hr" && resultValue === "s"){
            result.value = Number (input.value)*3600;
        }else if(measurementValue === "hr" && resultValue === "ms"){
            result.value = Number (input.value)*3600000;
        }else if(measurementValue === "hr" && resultValue === "mcs"){
            result.value = Number (input.value)*3600000000;
        }else if(measurementValue === "hr" && resultValue === "nns"){
            result.value = Number (input.value)*3600000000;
        }else if(measurementValue === "hr" && resultValue === "ps"){
            result.value = Number (input.value)*3600000000000000;
        }else if(measurementValue === "hr" && resultValue === "mn"){
            result.value = Number (input.value)*60;
        }else if(measurementValue === "hr" && resultValue === "d"){
            result.value = Number (input.value)*0.0416666667;
        }else if(measurementValue === "hr" && resultValue === "w"){
            result.value = Number (input.value)*0.005952381;
        }else if(measurementValue === "hr" && resultValue === "mo"){
            result.value = Number (input.value)*0.0013689254;
        }else if(measurementValue === "hr" && resultValue === "yr"){
            result.value = Number (input.value)*0.0001140771;
        }else if(measurementValue === "hr" && resultValue === "hr"){
            result.value = input.value;
        }
        else if(measurementValue === "d" && resultValue === "s"){
            result.value = Number (input.value)*86400;
        }else if(measurementValue === "d" && resultValue === "ms"){
            result.value = Number (input.value)*86400000;
        }else if(measurementValue === "d" && resultValue === "mcs"){
            result.value = Number (input.value)*86400000000;
        }else if(measurementValue === "d" && resultValue === "nns"){
            result.value = Number (input.value)*86400000000000;
        }else if(measurementValue === "d" && resultValue === "ps"){
            result.value = Number (input.value)*86400000000000000;
        }else if(measurementValue === "d" && resultValue === "mn"){
            result.value = Number (input.value)*1440;
        }else if(measurementValue === "d" && resultValue === "hr"){
            result.value = Number (input.value)*24;
        }else if(measurementValue === "d" && resultValue === "w"){
            result.value = Number (input.value)*0.1428571429;
        }else if(measurementValue === "d" && resultValue === "mo"){
            result.value = Number (input.value)*0.0328542094;
        }else if(measurementValue === "d" && resultValue === "yr"){
            result.value = Number (input.value)*0.0027378508;
        }else if(measurementValue === "d" && resultValue === "d"){
            result.value = input.value;
        }
        else if(measurementValue === "w" && resultValue === "s"){
            result.value = Number (input.value)*604800;
        }else if(measurementValue === "w" && resultValue === "ms"){
            result.value = Number (input.value)*604800000;
        }else if(measurementValue === "w" && resultValue === "mcs"){
            result.value = Number (input.value)*604800000000;
        }else if(measurementValue === "w" && resultValue === "nns"){
            result.value = Number (input.value)*604800000000000;
        }else if(measurementValue === "w" && resultValue === "ps"){
            result.value = Number (input.value)*604800000000000000;
        }else if(measurementValue === "w" && resultValue === "mn"){
            result.value = Number (input.value)*10080;
        }else if(measurementValue === "w" && resultValue === "hr"){
            result.value = Number (input.value)*168;
        }else if(measurementValue === "w" && resultValue === "d"){
            result.value = Number (input.value)*7;
        }else if(measurementValue === "w" && resultValue === "mo"){
            result.value = Number (input.value)*0.2299794661;
        }else if(measurementValue === "w" && resultValue === "yr"){
            result.value = Number (input.value)*0.0191649555;
        }else if(measurementValue === "w" && resultValue === "w"){
            result.value = input.value;
        }
        else if(measurementValue === "mo" && resultValue === "s"){
            result.value = Number (input.value)*2629800;
        }else if(measurementValue === "mo" && resultValue === "ms"){
            result.value = Number (input.value)*2629800000;
        }else if(measurementValue === "mo" && resultValue === "mcs"){
            result.value = Number (input.value)*2629800000000;
        }else if(measurementValue === "mo" && resultValue === "nns"){
            result.value = Number (input.value)*2629800000000000;
        }else if(measurementValue === "mo" && resultValue === "ps"){
            result.value = Number (input.value)*2629800000000000000;
        }else if(measurementValue === "mo" && resultValue === "mn"){
            result.value = Number (input.value)*43830;
        }else if(measurementValue === "mo" && resultValue === "hr"){
            result.value = Number (input.value)*730.5;
        }else if(measurementValue === "mo" && resultValue === "d"){
            result.value = Number (input.value)*30.4375;
        }else if(measurementValue === "mo" && resultValue === "w"){
            result.value = Number (input.value)*4.3482142857;
        }else if(measurementValue === "mo" && resultValue === "yr"){
            result.value = Number (input.value)*0.0833333333;
        }else if(measurementValue === "mo" && resultValue === "mo"){
            result.value = input.value;
        }
        else if(measurementValue === "yr" && resultValue === "s"){
            result.value = Number (input.value)*31557600;
        }else if(measurementValue === "yr" && resultValue === "ms"){
            result.value = Number (input.value)*31557600000;
        }else if(measurementValue === "yr" && resultValue === "mcs"){
            result.value = Number (input.value)*31557600000000;
        }else if(measurementValue === "yr" && resultValue === "nns"){
            result.value = Number (input.value)*31557600000000000;
        }else if(measurementValue === "yr" && resultValue === "ps"){
            result.value = Number (input.value)*31557600000000000000;
        }else if(measurementValue === "yr" && resultValue === "mn"){
            result.value = Number (input.value)*525960;
        }else if(measurementValue === "yr" && resultValue === "hr"){
            result.value = Number (input.value)*8766;
        }else if(measurementValue === "yr" && resultValue === "d"){
            result.value = Number (input.value)*365.25;
        }else if(measurementValue === "yr" && resultValue === "w"){
            result.value = Number (input.value)*52.178571429;
        }else if(measurementValue === "yr" && resultValue === "mo"){
            result.value = Number (input.value)*12;
        }else if(measurementValue === "yr" && resultValue === "yr"){
            result.value = input.value;
        }
        finalResult = result.value;
    }