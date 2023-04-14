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

        if (measurementValue === "kg" && resultValue === "g"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "kg" && resultValue === "mg"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "kg" && resultValue === "mt"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "kg" && resultValue === "lt"){
            result.value = Number (input.value)*0.0009842073;
        }else if(measurementValue === "kg" && resultValue === "st"){
            result.value = Number (input.value)*0.0011023122;
        }else if(measurementValue === "kg" && resultValue === "lbs"){
            result.value = Number (input.value)*2.2046244202;
        }else if(measurementValue === "kg" && resultValue === "oz"){
            result.value = Number (input.value)*35.273990723;
        }else if(measurementValue === "kg" && resultValue === "c"){
            result.value = Number (input.value)*5000;
        }else if(measurementValue === "kg" && resultValue === "amu"){
            result.value = Number (input.value)*6.022136652E+26;
        }else if(measurementValue === "kg" && resultValue === "kg"){
            result.value = input.value;
        }
        else if (measurementValue === "g" && resultValue === "kg"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "g" && resultValue === "mg"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "g" && resultValue === "mt"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "g" && resultValue === "lt"){
            result.value = Number (input.value)*9.842073304E-7;
        }else if(measurementValue === "g" && resultValue === "st"){
            result.value = Number (input.value)*0.0000011023;
        }else if(measurementValue === "g" && resultValue === "lbs"){
            result.value = Number (input.value)*0.0022046244;
        }else if(measurementValue === "g" && resultValue === "oz"){
            result.value = Number (input.value)*0.0352739907;
        }else if(measurementValue === "g" && resultValue === "c"){
            result.value = Number (input.value)*5;
        }else if(measurementValue === "g" && resultValue === "amu"){
            result.value = Number (input.value)*6.022136652E+23;
        }else if(measurementValue === "g" && resultValue === "g"){
            result.value = input.value;
        }
        else if (measurementValue === "mg" && resultValue === "kg"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "mg" && resultValue === "g"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "mg" && resultValue === "mt"){
            result.value = Number (input.value)*9.999999999E-10;
        }else if(measurementValue === "mg" && resultValue === "lt"){
            result.value = Number (input.value)*9.842073304E-10;
        }else if(measurementValue === "mg" && resultValue === "st"){
            result.value = Number (input.value)*1.10231221E-9;
        }else if(measurementValue === "mg" && resultValue === "lbs"){
            result.value = Number (input.value)*0.0000022046;
        }else if(measurementValue === "mg" && resultValue === "oz"){
            result.value = Number (input.value)*0.000035274;
        }else if(measurementValue === "mg" && resultValue === "c"){
            result.value = Number (input.value)*0.005;
        }else if(measurementValue === "mg" && resultValue === "amu"){
            result.value = Number (input.value)*602213665200000000000;
        }else if(measurementValue === "mg" && resultValue === "mg"){
            result.value = input.value;
        }
        else if (measurementValue === "mt" && resultValue === "kg"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "mt" && resultValue === "g"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "mt" && resultValue === "mg"){
            result.value = Number (input.value)*1000000000;
        }else if(measurementValue === "mt" && resultValue === "lt"){
            result.value = Number (input.value)*0.9842073304;
        }else if(measurementValue === "mt" && resultValue === "st"){
            result.value = Number (input.value)*1.1023122101;
        }else if(measurementValue === "mt" && resultValue === "lbs"){
            result.value = Number (input.value)*2204.6244202;
        }else if(measurementValue === "mt" && resultValue === "oz"){
            result.value = Number (input.value)*35273.990723;
        }else if(measurementValue === "mt" && resultValue === "c"){
            result.value = Number (input.value)*5000000;
        }else if(measurementValue === "mt" && resultValue === "amu"){
            result.value = Number (input.value)*6.022136652E+29;
        }else if(measurementValue === "mt" && resultValue === "mt"){
            result.value = input.value;
        }
        else if (measurementValue === "lt" && resultValue === "kg"){
            result.value = Number (input.value)*1016.04608;
        }else if(measurementValue === "lt" && resultValue === "g"){
            result.value = Number (input.value)*1016046.08;
        }else if(measurementValue === "lt" && resultValue === "mg"){
            result.value = Number (input.value)*1016046080;
        }else if(measurementValue === "lt" && resultValue === "mt"){
            result.value = Number (input.value)*1.01604608;
        }else if(measurementValue === "lt" && resultValue === "st"){
            result.value = Number (input.value)*1.12;
        }else if(measurementValue === "lt" && resultValue === "lbs"){
            result.value = Number (input.value)*2240;
        }else if(measurementValue === "lt" && resultValue === "oz"){
            result.value = Number (input.value)*35840;
        }else if(measurementValue === "lt" && resultValue === "c"){
            result.value = Number (input.value)*5080230.4;
        }else if(measurementValue === "lt" && resultValue === "amu"){
            result.value = Number (input.value)*6.118768338E+29;
        }else if(measurementValue === "lt" && resultValue === "lt"){
            result.value = input.value;
        }
        else if (measurementValue === "st" && resultValue === "kg"){
            result.value = Number (input.value)*907.184;
        }else if(measurementValue === "st" && resultValue === "g"){
            result.value = Number (input.value)*907184;
        }else if(measurementValue === "st" && resultValue === "mg"){
            result.value = Number (input.value)*907184000;
        }else if(measurementValue === "st" && resultValue === "mt"){
            result.value = Number (input.value)*0.907184;
        }else if(measurementValue === "st" && resultValue === "lt"){
            result.value = Number (input.value)*0.8928571429;
        }else if(measurementValue === "st" && resultValue === "lbs"){
            result.value = Number (input.value)*2000;
        }else if(measurementValue === "st" && resultValue === "oz"){
            result.value = Number (input.value)*32000;
        }else if(measurementValue === "st" && resultValue === "c"){
            result.value = Number (input.value)*4535920;
        }else if(measurementValue === "st" && resultValue === "amu"){
            result.value = Number (input.value)*5.463186016E+29;
        }else if(measurementValue === "st" && resultValue === "st"){
            result.value = input.value;
        }
        else if (measurementValue === "lbs" && resultValue === "kg"){
            result.value = Number (input.value)*0.453592;
        }else if(measurementValue === "lbs" && resultValue === "g"){
            result.value = Number (input.value)*453.592;
        }else if(measurementValue === "lbs" && resultValue === "mg"){
            result.value = Number (input.value)*453592;
        }else if(measurementValue === "lbs" && resultValue === "mt"){
            result.value = Number (input.value)*0.000453592;
        }else if(measurementValue === "lbs" && resultValue === "lt"){
            result.value = Number (input.value)*0.0004464286;
        }else if(measurementValue === "lbs" && resultValue === "st"){
            result.value = Number (input.value)*0.0005;
        }else if(measurementValue === "lbs" && resultValue === "oz"){
            result.value = Number (input.value)*16;
        }else if(measurementValue === "lbs" && resultValue === "c"){
            result.value = Number (input.value)*2267.96;
        }else if(measurementValue === "lbs" && resultValue === "amu"){
            result.value = Number (input.value)*2.731593008E+26;
        }else if(measurementValue === "lbs" && resultValue === "lbs"){
            result.value = input.value;
        }
        else if (measurementValue === "oz" && resultValue === "kg"){
            result.value = Number (input.value)*0.0283495;
        }else if(measurementValue === "oz" && resultValue === "g"){
            result.value = Number (input.value)*28.3495;
        }else if(measurementValue === "oz" && resultValue === "mg"){
            result.value = Number (input.value)*28349.5;
        }else if(measurementValue === "oz" && resultValue === "mt"){
            result.value = Number (input.value)*0.0000283495;
        }else if(measurementValue === "oz" && resultValue === "lt"){
            result.value = Number (input.value)*0.0000279018;
        }else if(measurementValue === "oz" && resultValue === "st"){
            result.value = Number (input.value)*0.00003125;
        }else if(measurementValue === "oz" && resultValue === "lbs"){
            result.value = Number (input.value)*0.0625;
        }else if(measurementValue === "oz" && resultValue === "c"){
            result.value = Number (input.value)*141.7475;
        }else if(measurementValue === "oz" && resultValue === "amu"){
            result.value = Number (input.value)*1.70724563E+25;
        }else if(measurementValue === "oz" && resultValue === "oz"){
            result.value = input.value;
        }
        else if (measurementValue === "c" && resultValue === "kg"){
            result.value = Number (input.value)*0.0002;
        }else if(measurementValue === "c" && resultValue === "g"){
            result.value = Number (input.value)*0.2;
        }else if(measurementValue === "c" && resultValue === "mg"){
            result.value = Number (input.value)*200;
        }else if(measurementValue === "c" && resultValue === "mt"){
            result.value = Number (input.value)*2.E-7;
        }else if(measurementValue === "c" && resultValue === "lt"){
            result.value = Number (input.value)*1.96841466E-7;
        }else if(measurementValue === "c" && resultValue === "st"){
            result.value = Number (input.value)*2.20462442E-7;
        }else if(measurementValue === "c" && resultValue === "lbs"){
            result.value = Number (input.value)*0.0004409249;
        }else if(measurementValue === "c" && resultValue === "oz"){
            result.value = Number (input.value)*0.0070547981;
        }else if(measurementValue === "c" && resultValue === "amu"){
            result.value = Number (input.value)*1.20442733E+23;
        }else if(measurementValue === "c" && resultValue === "c"){
            result.value = input.value;
        }
        else if (measurementValue === "amu" && resultValue === "kg"){
            result.value = Number (input.value)*1.660540199E-27;
        }else if(measurementValue === "amu" && resultValue === "g"){
            result.value = Number (input.value)*1.660540199E-24;
        }else if(measurementValue === "amu" && resultValue === "mg"){
            result.value = Number (input.value)*1.660540199E-21;
        }else if(measurementValue === "amu" && resultValue === "mt"){
            result.value = Number (input.value)*1.660540199E-30;
        }else if(measurementValue === "amu" && resultValue === "lt"){
            result.value = Number (input.value)*1.634315837E-30;
        }else if(measurementValue === "amu" && resultValue === "st"){
            result.value = Number (input.value)*1.830433737E-30;
        }else if(measurementValue === "amu" && resultValue === "lbs"){
            result.value = Number (input.value)*3.660867475E-27;
        }else if(measurementValue === "amu" && resultValue === "oz"){
            result.value = Number (input.value)*5.85738796E-26;
        }else if(measurementValue === "amu" && resultValue === "c"){
            result.value = Number (input.value)*8.302700999E-24;
        }else if(measurementValue === "amu" && resultValue === "amu"){
            result.value = input.value;
        }
        finalResult = result.value;
    }