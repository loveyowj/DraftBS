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

        if (measurementValue === "sm" && resultValue === "sk"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "sm" && resultValue === "scm"){
            result.value = Number (input.value)*10000;
        }else if(measurementValue === "sm" && resultValue === "smm"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "sm" && resultValue === "smc"){
            result.value = Number (input.value)*1000000000000;
        }else if(measurementValue === "sm" && resultValue === "h"){
            result.value = Number (input.value)*0.0001;
        }else if(measurementValue === "sm" && resultValue === "smi"){
            result.value = Number (input.value)*3.861018768E-7;
        }else if(measurementValue === "sm" && resultValue === "syd"){
            result.value = Number (input.value)*1.1959900463;
        }else if(measurementValue === "sm" && resultValue === "sft"){
            result.value = Number (input.value)*10.763910417;
        }else if(measurementValue === "sm" && resultValue === "sin"){
            result.value = Number (input.value)*1550.0031;
        }else if(measurementValue === "sm" && resultValue === "a"){
            result.value = Number (input.value)*0.0002471054;
        }else if(measurementValue === "sm" && resultValue === "sm"){
            result.value = input.value;
        }
        else if (measurementValue === "sk" && resultValue === "sm"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "sk" && resultValue === "scm"){
            result.value = Number (input.value)*10000000000;
        }else if(measurementValue === "sk" && resultValue === "smm"){
            result.value = Number (input.value)*1000000000000;
        }else if(measurementValue === "sk" && resultValue === "smc"){
            result.value = Number (input.value)*1000000000000000000;
        }else if(measurementValue === "sk" && resultValue === "h"){
            result.value = Number (input.value)*100;
        }else if(measurementValue === "sk" && resultValue === "smi"){
            result.value = Number (input.value)*0.3861018768;
        }else if(measurementValue === "sk" && resultValue === "syd"){
            result.value = Number (input.value)*1195990.0463;
        }else if(measurementValue === "sk" && resultValue === "sft"){
            result.value = Number (input.value)*10763910.417;
        }else if(measurementValue === "sk" && resultValue === "sin"){
            result.value = Number (input.value)*1550003100;
        }else if(measurementValue === "sk" && resultValue === "a"){
            result.value = Number (input.value)*247.10538147;
        }else if(measurementValue === "sk" && resultValue === "sk"){
            result.value = input.value;
        }
        else if (measurementValue === "scm" && resultValue === "sm"){
            result.value = Number (input.value)*0.0001;
        }else if(measurementValue === "scm" && resultValue === "sk"){
            result.value = Number (input.value)*1.E-10;
        }else if(measurementValue === "scm" && resultValue === "smm"){
            result.value = Number (input.value)*100;
        }else if(measurementValue === "scm" && resultValue === "smc"){
            result.value = Number (input.value)*100000000;
        }else if(measurementValue === "scm" && resultValue === "h"){
            result.value = Number (input.value)*1.E-8;
        }else if(measurementValue === "scm" && resultValue === "smi"){
            result.value = Number (input.value)*3.861018768E-11;
        }else if(measurementValue === "scm" && resultValue === "syd"){
            result.value = Number (input.value)*0.000119599;
        }else if(measurementValue === "scm" && resultValue === "sft"){
            result.value = Number (input.value)*0.001076391;
        }else if(measurementValue === "scm" && resultValue === "sin"){
            result.value = Number (input.value)*0.15500031;
        }else if(measurementValue === "scm" && resultValue === "a"){
            result.value = Number (input.value)*2.471053814E-8;
        }else if(measurementValue === "scm" && resultValue === "scm"){
            result.value = input.value;
        }
        else if (measurementValue === "smm" && resultValue === "sm"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "smm" && resultValue === "sk"){
            result.value = Number (input.value)*1.E-12;
        }else if(measurementValue === "smm" && resultValue === "scm"){
            result.value = Number (input.value)*0.01;
        }else if(measurementValue === "smm" && resultValue === "smc"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "smm" && resultValue === "h"){
            result.value = Number (input.value)*9.999999999E-11;
        }else if(measurementValue === "smm" && resultValue === "smi"){
            result.value = Number (input.value)*3.861018768E-13;
        }else if(measurementValue === "smm" && resultValue === "syd"){
            result.value = Number (input.value)*0.000001196;
        }else if(measurementValue === "smm" && resultValue === "sft"){
            result.value = Number (input.value)*0.0000107639;
        }else if(measurementValue === "smm" && resultValue === "sin"){
            result.value = Number (input.value)*0.0015500031;
        }else if(measurementValue === "smm" && resultValue === "a"){
            result.value = Number (input.value)*2.471053814E-10;
        }else if(measurementValue === "smm" && resultValue === "smm"){
            result.value = input.value;
        }
        else if (measurementValue === "smc" && resultValue === "sm"){
            result.value = Number (input.value)*1.E-12;
        }else if(measurementValue === "smc" && resultValue === "sk"){
            result.value = Number (input.value)*1.E-18;
        }else if(measurementValue === "smc" && resultValue === "scm"){
            result.value = Number (input.value)*9.999999999E-9;
        }else if(measurementValue === "smc" && resultValue === "smm"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "smc" && resultValue === "h"){
            result.value = Number (input.value)*1.E-16;
        }else if(measurementValue === "smc" && resultValue === "smi"){
            result.value = Number (input.value)*3.861018768E-19;
        }else if(measurementValue === "smc" && resultValue === "syd"){
            result.value = Number (input.value)*1.195990046E-12;
        }else if(measurementValue === "smc" && resultValue === "sft"){
            result.value = Number (input.value)*1.076391041E-11;
        }else if(measurementValue === "smc" && resultValue === "sin"){
            result.value = Number (input.value)*1.5500031E-9;
        }else if(measurementValue === "smc" && resultValue === "a"){
            result.value = Number (input.value)*2.471053814E-16;
        }else if(measurementValue === "smc" && resultValue === "smc"){
            result.value = input.value;
        }/*hectare*/
        else if (measurementValue === "h" && resultValue === "sm"){
            result.value = Number (input.value)*10000;
        }else if(measurementValue === "h" && resultValue === "sk"){
            result.value = Number (input.value)*0.01;
        }else if(measurementValue === "h" && resultValue === "scm"){
            result.value = Number (input.value)*100000000;
        }else if(measurementValue === "h" && resultValue === "smm"){
            result.value = Number (input.value)*10000000000;
        }else if(measurementValue === "h" && resultValue === "smc"){
            result.value = Number (input.value)*10000000000000000;
        }else if(measurementValue === "h" && resultValue === "smi"){
            result.value = Number (input.value)*0.0038610188;
        }else if(measurementValue === "h" && resultValue === "syd"){
            result.value = Number (input.value)*11959.900463;
        }else if(measurementValue === "h" && resultValue === "sft"){
            result.value = Number (input.value)*107639.10417;
        }else if(measurementValue === "h" && resultValue === "sin"){
            result.value = Number (input.value)*15500031;
        }else if(measurementValue === "h" && resultValue === "a"){
            result.value = Number (input.value)*2.4710538147;
        }else if(measurementValue === "h" && resultValue === "h"){
            result.value = input.value;
        }/*square mile*/
        else if (measurementValue === "smi" && resultValue === "sm"){
            result.value = Number (input.value)*2589990;
        }else if(measurementValue === "smi" && resultValue === "sk"){
            result.value = Number (input.value)*2.58999;
        }else if(measurementValue === "smi" && resultValue === "scm"){
            result.value = Number (input.value)*25899900000;
        }else if(measurementValue === "smi" && resultValue === "smm"){
            result.value = Number (input.value)*2589990000000;
        }else if(measurementValue === "smi" && resultValue === "smc"){
            result.value = Number (input.value)*2589990000000000000;
        }else if(measurementValue === "smi" && resultValue === "h"){
            result.value = Number (input.value)*258.999;
        }else if(measurementValue === "smi" && resultValue === "syd"){
            result.value = Number (input.value)*3097602.26;
        }else if(measurementValue === "smi" && resultValue === "sft"){
            result.value = Number (input.value)*27878420.34;
        }else if(measurementValue === "smi" && resultValue === "sin"){
            result.value = Number (input.value)*4014492529;
        }else if(measurementValue === "smi" && resultValue === "a"){
            result.value = Number (input.value)*640.00046695;
        }else if(measurementValue === "smi" && resultValue === "smi"){
            result.value = input.value;
        }
        else if (measurementValue === "syd" && resultValue === "sm"){
            result.value = Number (input.value)*0.83612736;
        }else if(measurementValue === "syd" && resultValue === "sk"){
            result.value = Number (input.value)*8.3612736E-7;
        }else if(measurementValue === "syd" && resultValue === "scm"){
            result.value = Number (input.value)*8361.2736;
        }else if(measurementValue === "syd" && resultValue === "smm"){
            result.value = Number (input.value)*836127.36;
        }else if(measurementValue === "syd" && resultValue === "smc"){
            result.value = Number (input.value)*836127360000;
        }else if(measurementValue === "syd" && resultValue === "h"){
            result.value = Number (input.value)*0.0000836127;
        }else if(measurementValue === "syd" && resultValue === "smi"){
            result.value = Number (input.value)*3.228303429E-7;
        }else if(measurementValue === "syd" && resultValue === "sft"){
            result.value = Number (input.value)*9;
        }else if(measurementValue === "syd" && resultValue === "sin"){
            result.value = Number (input.value)*1296;
        }else if(measurementValue === "syd" && resultValue === "a"){
            result.value = Number (input.value)*0.0002066116;
        }else if(measurementValue === "syd" && resultValue === "syd"){
            result.value = input.value;
        }
        else if (measurementValue === "sft" && resultValue === "sm"){
            result.value = Number (input.value)*0.09290304;
        }else if(measurementValue === "sft" && resultValue === "sk"){
            result.value = Number (input.value)*9.290304E-8;
        }else if(measurementValue === "sft" && resultValue === "scm"){
            result.value = Number (input.value)*929.0304;
        }else if(measurementValue === "sft" && resultValue === "smm"){
            result.value = Number (input.value)*92903.04;
        }else if(measurementValue === "sft" && resultValue === "smc"){
            result.value = Number (input.value)*92903040000;
        }else if(measurementValue === "sft" && resultValue === "h"){
            result.value = Number (input.value)*0.0000092903;
        }else if(measurementValue === "sft" && resultValue === "smi"){
            result.value = Number (input.value)*3.58700381E-8;
        }else if(measurementValue === "sft" && resultValue === "syd"){
            result.value = Number (input.value)*0.1111111111;
        }else if(measurementValue === "sft" && resultValue === "sin"){
            result.value = Number (input.value)*144;
        }else if(measurementValue === "sft" && resultValue === "a"){
            result.value = Number (input.value)*0.0000229568;
        }else if(measurementValue === "sft" && resultValue === "sft"){
            result.value = input.value;
        }
        else if (measurementValue === "sin" && resultValue === "sm"){
            result.value = Number (input.value)*0.00064516;
        }else if(measurementValue === "sin" && resultValue === "sk"){
            result.value = Number (input.value)*6.4516E-10;
        }else if(measurementValue === "sin" && resultValue === "scm"){
            result.value = Number (input.value)*6.4516;
        }else if(measurementValue === "sin" && resultValue === "smm"){
            result.value = Number (input.value)*645.16;
        }else if(measurementValue === "sin" && resultValue === "smc"){
            result.value = Number (input.value)*645160000;
        }else if(measurementValue === "sin" && resultValue === "h"){
            result.value = Number (input.value)*6.4516E-8;
        }else if(measurementValue === "sin" && resultValue === "smi"){
            result.value = Number (input.value)*2.490974868E-10;
        }else if(measurementValue === "sin" && resultValue === "syd"){
            result.value = Number (input.value)*0.0007716049;
        }else if(measurementValue === "sin" && resultValue === "sft"){
            result.value = Number (input.value)*0.0069444444;
        }else if(measurementValue === "sin" && resultValue === "a"){
            result.value = Number (input.value)*1.594225079E-7;
        }else if(measurementValue === "sin" && resultValue === "sin"){
            result.value = input.value;
        }
        else if (measurementValue === "a" && resultValue === "sm"){
            result.value = Number (input.value)*4046.8564224;
        }else if(measurementValue === "a" && resultValue === "sk"){
            result.value = Number (input.value)*0.0040468564;
        }else if(measurementValue === "a" && resultValue === "scm"){
            result.value = Number (input.value)*40468564.224;
        }else if(measurementValue === "a" && resultValue === "smm"){
            result.value = Number (input.value)*4046856422.4;
        }else if(measurementValue === "a" && resultValue === "smc"){
            result.value = Number (input.value)*4046856422400000;
        }else if(measurementValue === "a" && resultValue === "h"){
            result.value = Number (input.value)*0.4046856422;
        }else if(measurementValue === "a" && resultValue === "smi"){
            result.value = Number (input.value)*0.0015624989;
        }else if(measurementValue === "a" && resultValue === "syd"){
            result.value = Number (input.value)*4840;
        }else if(measurementValue === "a" && resultValue === "sft"){
            result.value = Number (input.value)*43560;
        }else if(measurementValue === "a" && resultValue === "sin"){
            result.value = Number (input.value)*6272640;
        }else if(measurementValue === "a" && resultValue === "a"){
            result.value = input.value;
        }
        finalResult = result.value;
    }