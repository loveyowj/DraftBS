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

        if (measurementValue === "km" && resultValue === "m"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "km" && resultValue === "cm"){
            result.value = Number (input.value)*100000;
        }else if(measurementValue === "km" && resultValue === "mm"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "km" && resultValue === "mc"){
            result.value = Number (input.value)*1000000000;
        }else if(measurementValue === "km" && resultValue === "nn"){
            result.value = Number (input.value)*1000000000000;
        }else if(measurementValue === "km" && resultValue === "mi"){
            result.value = Number (input.value)*0.6213688756;
        }else if(measurementValue === "km" && resultValue === "yd"){
            result.value = Number (input.value)*1093.6132983;
        }else if(measurementValue === "km" && resultValue === "ft"){
            result.value = Number (input.value)*3280.839895;
        }else if(measurementValue === "km" && resultValue === "in"){
            result.value = Number (input.value)*39370.07874;
        }else if(measurementValue === "km" && resultValue === "km"){
            result.value = input.value;
        }
        else if (measurementValue === "m" && resultValue === "km"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "m" && resultValue === "cm"){
            result.value = Number (input.value)*100;
        }else if(measurementValue === "m" && resultValue === "mm"){
            result.value = Number (input.value)*1000
        }else if(measurementValue === "m" && resultValue === "mc"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "m" && resultValue === "nn"){
            result.value = Number (input.value)*1000000000;
        }else if(measurementValue === "m" && resultValue === "mi"){
            result.value = Number (input.value)*0.0006213689;
        }else if(measurementValue === "m" && resultValue === "yd"){
            result.value = Number (input.value)*1.0936132983;
        }else if(measurementValue === "m" && resultValue === "ft"){
            result.value = Number (input.value)*3.280839895;
        }else if(measurementValue === "m" && resultValue === "in"){
            result.value = Number (input.value)*39.37007874;
        }else if(measurementValue === "m" && resultValue === "m"){
            result.value = input.value;
        }
        else if (measurementValue === "cm" && resultValue === "km"){
            result.value = Number (input.value)*0.00001;
        }else if(measurementValue === "cm" && resultValue === "m"){
            result.value = Number (input.value)*0.01;
        }else if(measurementValue === "cm" && resultValue === "mm"){
            result.value = Number (input.value)*10;
        }else if(measurementValue === "cm" && resultValue === "mc"){
            result.value = Number (input.value)*10000;
        }else if(measurementValue === "cm" && resultValue === "nn"){
            result.value = Number (input.value)*10000000;
        }else if(measurementValue === "cm" && resultValue === "mi"){
            result.value = Number (input.value)*0.0000062137;
        }else if(measurementValue === "cm" && resultValue === "yd"){
            result.value = Number (input.value)*0.010936133;
        }else if(measurementValue === "cm" && resultValue === "ft"){
            result.value = Number (input.value)*0.032808399;
        }else if(measurementValue === "cm" && resultValue === "in"){
            result.value = Number (input.value)*0.3937007874;
        }else if(measurementValue === "cm" && resultValue === "cm"){
            result.value = input.value;
        }
        else if (measurementValue === "mm" && resultValue === "km"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "mm" && resultValue === "m"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "mm" && resultValue === "cm"){
            result.value = Number (input.value)*0.1;
        }else if(measurementValue === "mm" && resultValue === "mc"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "mm" && resultValue === "nn"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "mm" && resultValue === "mi"){
            result.value = Number (input.value)*6.213688756E-7;
        }else if(measurementValue === "mm" && resultValue === "yd"){
            result.value = Number (input.value)*0.0010936133;
        }else if(measurementValue === "mm" && resultValue === "ft"){
            result.value = Number (input.value)*0.0032808399;
        }else if(measurementValue === "mm" && resultValue === "in"){
            result.value = Number (input.value)*0.0393700787;
        }else if(measurementValue === "mm" && resultValue === "mm"){
            result.value = input.value;
        }
        else if (measurementValue === "mc" && resultValue === "km"){
            result.value = Number (input.value)*9.999999999E-10;
        }else if(measurementValue === "mc" && resultValue === "m"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "mc" && resultValue === "cm"){
            result.value = Number (input.value)*0.0001;
        }else if(measurementValue === "mc" && resultValue === "mm"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "mc" && resultValue === "nn"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "mc" && resultValue === "mi"){
            result.value = Number (input.value)*6.213688756E-10;
        }else if(measurementValue === "mc" && resultValue === "yd"){
            result.value = Number (input.value)*0.0000010936;
        }else if(measurementValue === "mc" && resultValue === "ft"){
            result.value = Number (input.value)*0.0000032808;
        }else if(measurementValue === "mc" && resultValue === "in"){
            result.value = Number (input.value)*0.0000393701;
        }else if(measurementValue === "mc" && resultValue === "mc"){
            result.value = input.value;
        }
        else if (measurementValue === "nn" && resultValue === "km"){
            result.value = Number (input.value)*1.E-12;
        }else if(measurementValue === "nn" && resultValue === "m"){
            result.value = Number (input.value)*1.E-9;
        }else if(measurementValue === "nn" && resultValue === "cm"){
            result.value = Number (input.value)*1.E-7;
        }else if(measurementValue === "nn" && resultValue === "mm"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "nn" && resultValue === "mc"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "nn" && resultValue === "mi"){
            result.value = Number (input.value)*6.213688756E-13;
        }else if(measurementValue === "nn" && resultValue === "yd"){
            result.value = Number (input.value)*1.093613298E-9;
        }else if(measurementValue === "nn" && resultValue === "ft"){
            result.value = Number (input.value)*3.280839895E-9;
        }else if(measurementValue === "nn" && resultValue === "in"){
            result.value = Number (input.value)*3.937007874E-8;
        }else if(measurementValue === "nn" && resultValue === "nn"){
            result.value = input.value;
        }
        else if (measurementValue === "mi" && resultValue === "km"){
            result.value = Number (input.value)*1.60935;
        }else if(measurementValue === "mi" && resultValue === "m"){
            result.value = Number (input.value)*1609.35;
        }else if(measurementValue === "mi" && resultValue === "cm"){
            result.value = Number (input.value)*160935;
        }else if(measurementValue === "mi" && resultValue === "mm"){
            result.value = Number (input.value)*1609350;
        }else if(measurementValue === "mi" && resultValue === "mc"){
            result.value = Number (input.value)*1609350000;
        }else if(measurementValue === "mi" && resultValue === "nn"){
            result.value = Number (input.value)*1609350000000;
        }else if(measurementValue === "mi" && resultValue === "yd"){
            result.value = Number (input.value)*1760.0065617;
        }else if(measurementValue === "mi" && resultValue === "ft"){
            result.value = Number (input.value)*5280.019685;
        }else if(measurementValue === "mi" && resultValue === "in"){
            result.value = Number (input.value)*63360.23622;
        }else if(measurementValue === "mi" && resultValue === "mi"){
            result.value = input.value;
        }
        else if (measurementValue === "yd" && resultValue === "km"){
            result.value = Number (input.value)*0.0009144;
        }else if(measurementValue === "yd" && resultValue === "m"){
            result.value = Number (input.value)*0.9144;
        }else if(measurementValue === "yd" && resultValue === "cm"){
            result.value = Number (input.value)*91.44;
        }else if(measurementValue === "yd" && resultValue === "mm"){
            result.value = Number (input.value)*914.4;
        }else if(measurementValue === "yd" && resultValue === "mc"){
            result.value = Number (input.value)*914400;
        }else if(measurementValue === "yd" && resultValue === "nn"){
            result.value = Number (input.value)*914400000;
        }else if(measurementValue === "yd" && resultValue === "mi"){
            result.value = Number (input.value)*0.0005681797;
        }else if(measurementValue === "yd" && resultValue === "ft"){
            result.value = Number (input.value)*3;
        }else if(measurementValue === "yd" && resultValue === "in"){
            result.value = Number (input.value)*36;
        }else if(measurementValue === "yd" && resultValue === "yd"){
            result.value = input.value;
        }
        else if (measurementValue === "ft" && resultValue === "km"){
            result.value = Number (input.value)*0.0003048;
        }else if(measurementValue === "ft" && resultValue === "m"){
            result.value = Number (input.value)*0.3048;
        }else if(measurementValue === "ft" && resultValue === "cm"){
            result.value = Number (input.value)*30.48;
        }else if(measurementValue === "ft" && resultValue === "mm"){
            result.value = Number (input.value)*304.8;
        }else if(measurementValue === "ft" && resultValue === "mc"){
            result.value = Number (input.value)*304800;
        }else if(measurementValue === "ft" && resultValue === "nn"){
            result.value = Number (input.value)*304800000;
        }else if(measurementValue === "ft" && resultValue === "mi"){
            result.value = Number (input.value)*0.0001893932;
        }else if(measurementValue === "ft" && resultValue === "yd"){
            result.value = Number (input.value)*0.3333333333;
        }else if(measurementValue === "ft" && resultValue === "in"){
            result.value = Number (input.value)*12;
        }else if(measurementValue === "ft" && resultValue === "ft"){
            result.value = input.value;
        }
        else if (measurementValue === "in" && resultValue === "km"){
            result.value = Number (input.value)*0.0000254;
        }else if(measurementValue === "in" && resultValue === "m"){
            result.value = Number (input.value)*0.0254;
        }else if(measurementValue === "in" && resultValue === "cm"){
            result.value = Number (input.value)*2.54;
        }else if(measurementValue === "in" && resultValue === "mm"){
            result.value = Number (input.value)*25.4;
        }else if(measurementValue === "in" && resultValue === "mc"){
            result.value = Number (input.value)*25400;
        }else if(measurementValue === "in" && resultValue === "nn"){
            result.value = Number (input.value)*25400000;
        }else if(measurementValue === "in" && resultValue === "mi"){
            result.value = Number (input.value)*0.0000157828;
        }else if(measurementValue === "in" && resultValue === "yd"){
            result.value = Number (input.value)*0.0277777778;
        }else if(measurementValue === "in" && resultValue === "ft"){
            result.value = Number (input.value)*0.0833333333;
        }else if(measurementValue === "in" && resultValue === "in"){
            result.value = input.value;
        }
        finalResult = result.value;
    }