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

        if (measurementValue === "cm" && resultValue === "ck"){
            result.value = Number (input.value)*1.E-9;
        }else if(measurementValue === "cm" && resultValue === "ccm"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "cm" && resultValue === "cmm"){
            result.value = Number (input.value)*1000000000;
        }else if(measurementValue === "cm" && resultValue === "l"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "cm" && resultValue === "ml"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "cm" && resultValue === "ug"){
            result.value = Number (input.value)*264.17217686;
        }else if(measurementValue === "cm" && resultValue === "uq"){
            result.value = Number (input.value)*1056.6887074;
        }else if(measurementValue === "cm" && resultValue === "up"){
            result.value = Number (input.value)*2113.3774149;
        }else if(measurementValue === "cm" && resultValue === "uc"){
            result.value = Number (input.value)*4226.7548297;
        }else if(measurementValue === "cm" && resultValue === "ufo"){
            result.value = Number (input.value)*33814.038638;
        }else if(measurementValue === "cm" && resultValue === "utbs"){
            result.value = Number (input.value)*67628.077276;
        }else if(measurementValue === "cm" && resultValue === "utsp"){
            result.value = Number (input.value)*202884.23183;
        }else if(measurementValue === "cm" && resultValue === "ig"){
            result.value = Number (input.value)*219.9692483;
        }else if(measurementValue === "cm" && resultValue === "iq"){
            result.value = Number (input.value)*879.8769932;
        }else if(measurementValue === "cm" && resultValue === "ip"){
            result.value = Number (input.value)*1759.7539864;
        }else if(measurementValue === "cm" && resultValue === "ifo"){
            result.value = Number (input.value)*35195.079728;
        }else if(measurementValue === "cm" && resultValue === "itbs"){
            result.value = Number (input.value)*56312.127565;
        }else if(measurementValue === "cm" && resultValue === "itsp"){
            result.value = Number (input.value)*168936.38269;
        }else if(measurementValue === "cm" && resultValue === "cmi"){
            result.value = Number (input.value)*2.399128636E-10;
        }else if(measurementValue === "cm" && resultValue === "cyd"){
            result.value = Number (input.value)*1.3079506193;
        }else if(measurementValue === "cm" && resultValue === "cft"){
            result.value = Number (input.value)*35.314666721;
        }else if(measurementValue === "cm" && resultValue === "cin"){
            result.value = Number (input.value)*61023.744095;
        }else if(measurementValue === "cm" && resultValue === "cm"){
            result.value = input.value;
        }
        else if (measurementValue === "ck" && resultValue === "cm"){
            result.value = Number (input.value)*1000000000;
        }else if(measurementValue === "ck" && resultValue === "ccm"){
            result.value = Number (input.value)*1000000000000000;
        }else if(measurementValue === "ck" && resultValue === "cmm"){
            result.value = Number (input.value)*1000000000000000000;
        }else if(measurementValue === "ck" && resultValue === "l"){
            result.value = Number (input.value)*1000000000000;
        }else if(measurementValue === "ck" && resultValue === "ml"){
            result.value = Number (input.value)*1000000000000000;
        }else if(measurementValue === "ck" && resultValue === "ug"){
            result.value = Number (input.value)*264172176858;
        }else if(measurementValue === "ck" && resultValue === "uq"){
            result.value = Number (input.value)*1056688707432;
        }else if(measurementValue === "ck" && resultValue === "up"){
            result.value = Number (input.value)*2113377414864;
        }else if(measurementValue === "ck" && resultValue === "uc"){
            result.value = Number (input.value)*4226754829728;
        }else if(measurementValue === "ck" && resultValue === "ufo"){
            result.value = Number (input.value)*33814038637823;
        }else if(measurementValue === "ck" && resultValue === "utbs"){
            result.value = Number (input.value)*67628077275645;
        }else if(measurementValue === "ck" && resultValue === "utsp"){
            result.value = Number (input.value)*202884231826936;
        }else if(measurementValue === "ck" && resultValue === "ig"){
            result.value = Number (input.value)*219969248299;
        }else if(measurementValue === "ck" && resultValue === "iq"){
            result.value = Number (input.value)*879876993196;
        }else if(measurementValue === "ck" && resultValue === "ip"){
            result.value = Number (input.value)*1759753986393;
        }else if(measurementValue === "ck" && resultValue === "ifo"){
            result.value = Number (input.value)*35195079727854;
        }else if(measurementValue === "ck" && resultValue === "itbs"){
            result.value = Number (inputvalue)*56312127564566;
        }else if(measurementValue === "ck" && resultValue === "itsp"){
            result.value = Number (input.value)*168936382693699;
        }else if(measurementValue === "ck" && resultValue === "cmi"){
            result.value = Number (input.value)*0.2399128636;
        }else if(measurementValue === "ck" && resultValue === "cyd"){
            result.value = Number (input.value)*1307950619.3;
        }else if(measurementValue === "ck" && resultValue === "cft"){
            result.value = Number (input.value)*35314666721;
        }else if(measurementValue === "ck" && resultValue === "cin"){
            result.value = Number (input.value)*61023744094732;
        }else if(measurementValue === "ck" && resultValue === "ck"){
            result.value = input.value;
        }
        else if (measurementValue === "ccm" && resultValue === "cm"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "ccm" && resultValue === "ck"){
            result.value = Number (input.value)*9.999999999E-16;
        }else if(measurementValue === "ccm" && resultValue === "cmm"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "ccm" && resultValue === "l"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "ccm" && resultValue === "ml"){
            result.value = Number (input.value)*1;
        }else if(measurementValue === "ccm" && resultValue === "ug"){
            result.value = Number (input.value)*0.0002641722;
        }else if(measurementValue === "ccm" && resultValue === "uq"){
            result.value = Number (input.value)*0.0010566887;
        }else if(measurementValue === "ccm" && resultValue === "up"){
            result.value = Number (input.value)*0.0021133774;
        }else if(measurementValue === "ccm" && resultValue === "uc"){
            result.value = Number (input.value)*0.0042267548;
        }else if(measurementValue === "ccm" && resultValue === "ufo"){
            result.value = Number (input.value)*0.0338140386;
        }else if(measurementValue === "ccm" && resultValue === "utbs"){
            result.value = Number (input.value)*0.0676280773;
        }else if(measurementValue === "ccm" && resultValue === "utsp"){
            result.value = Number (input.value)*0.2028842318;
        }else if(measurementValue === "ccm" && resultValue === "ig"){
            result.value = Number (input.value)*0.0002199692;
        }else if(measurementValue === "ccm" && resultValue === "iq"){
            result.value = Number (input.value)*0.000879877;
        }else if(measurementValue === "ccm" && resultValue === "ip"){
            result.value = Number (input.value)*0.001759754;
        }else if(measurementValue === "ccm" && resultValue === "ifo"){
            result.value = Number (input.value)*0.0351950797;
        }else if(measurementValue === "ccm" && resultValue === "itbs"){
            result.value = Number (inputvalue)*0.0563121276;
        }else if(measurementValue === "ccm" && resultValue === "itsp"){
            result.value = Number (input.value)*0.1689363827;
        }else if(measurementValue === "ccm" && resultValue === "cmi"){
            result.value = Number (input.value)*2.399128636E-16;
        }else if(measurementValue === "ccm" && resultValue === "cyd"){
            result.value = Number (input.value)*0.000001308;
        }else if(measurementValue === "ccm" && resultValue === "cft"){
            result.value = Number (input.value)*0.0000353147;
        }else if(measurementValue === "ccm" && resultValue === "cin"){
            result.value = Number (input.value)*0.0610237441;
        }else if(measurementValue === "ccm" && resultValue === "ccm"){
            result.value = input.value;
        }
        else if (measurementValue === "cmm" && resultValue === "cm"){
            result.value = Number (input.value)*1.E-9;
        }else if(measurementValue === "cmm" && resultValue === "ck"){
            result.value = Number (input.value)*1.E-18;
        }else if(measurementValue === "cmm" && resultValue === "ccm"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "cmm" && resultValue === "l"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "cmm" && resultValue === "ml"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "cmm" && resultValue === "ug"){
            result.value = Number (input.value)*2.641721768E-7;
        }else if(measurementValue === "cmm" && resultValue === "uq"){
            result.value = Number (input.value)*0.0000010567;
        }else if(measurementValue === "cmm" && resultValue === "up"){
            result.value = Number (input.value)*0.0000021134;
        }else if(measurementValue === "cmm" && resultValue === "uc"){
            result.value = Number (input.value)*0.0000042268;
        }else if(measurementValue === "cmm" && resultValue === "ufo"){
            result.value = Number (input.value)*0.000033814;
        }else if(measurementValue === "cmm" && resultValue === "utbs"){
            result.value = Number (input.value)*0.0000676281;
        }else if(measurementValue === "cmm" && resultValue === "utsp"){
            result.value = Number (input.value)*0.0002028842;
        }else if(measurementValue === "cmm" && resultValue === "ig"){
            result.value = Number (input.value)*2.199692482E-7;
        }else if(measurementValue === "cmm" && resultValue === "iq"){
            result.value = Number (input.value)*8.798769931E-7;
        }else if(measurementValue === "cmm" && resultValue === "ip"){
            result.value = Number (input.value)*0.0000017598;
        }else if(measurementValue === "cmm" && resultValue === "ifo"){
            result.value = Number (input.value)*0.0000351951;
        }else if(measurementValue === "cmm" && resultValue === "itbs"){
            result.value = Number (inputvalue)*0.0000563121;
        }else if(measurementValue === "cmm" && resultValue === "itsp"){
            result.value = Number (input.value)*0.0001689364;
        }else if(measurementValue === "cmm" && resultValue === "cmi"){
            result.value = Number (input.value)*2.399128636E-19;
        }else if(measurementValue === "cmm" && resultValue === "cyd"){
            result.value = Number (input.value)*1.307950619E-9;
        }else if(measurementValue === "cmm" && resultValue === "cft"){
            result.value = Number (input.value)*3.531466672E-8;
        }else if(measurementValue === "cmm" && resultValue === "cin"){
            result.value = Number (input.value)*0.0000610237;
        }else if(measurementValue === "cmm" && resultValue === "cmm"){
            result.value = input.value;
        }
        else if (measurementValue === "l" && resultValue === "cm"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "l" && resultValue === "ck"){
            result.value = Number (input.value)*1.E-12;
        }else if(measurementValue === "l" && resultValue === "ccm"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "l" && resultValue === "cmm"){
            result.value = Number (input.value)*1000000;
        }else if(measurementValue === "l" && resultValue === "ml"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "l" && resultValue === "ug"){
            result.value = Number (input.value)*0.2641721769;
        }else if(measurementValue === "l" && resultValue === "uq"){
            result.value = Number (input.value)*1.0566887074;
        }else if(measurementValue === "l" && resultValue === "up"){
            result.value = Number (input.value)*2.1133774149;
        }else if(measurementValue === "l" && resultValue === "uc"){
            result.value = Number (input.value)*4.2267548297;
        }else if(measurementValue === "l" && resultValue === "ufo"){
            result.value = Number (input.value)*33.814038638;
        }else if(measurementValue === "l" && resultValue === "utbs"){
            result.value = Number (input.value)*67.628077276;
        }else if(measurementValue === "l" && resultValue === "utsp"){
            result.value = Number (input.value)*202.88423183;
        }else if(measurementValue === "l" && resultValue === "ig"){
            result.value = Number (input.value)*0.2199692483;
        }else if(measurementValue === "l" && resultValue === "iq"){
            result.value = Number (input.value)*0.8798769932;
        }else if(measurementValue === "l" && resultValue === "ip"){
            result.value = Number (input.value)*1.7597539864;
        }else if(measurementValue === "l" && resultValue === "ifo"){
            result.value = Number (input.value)*35.195079728;
        }else if(measurementValue === "l" && resultValue === "itbs"){
            result.value = Number (inputvalue)*56.312127565;
        }else if(measurementValue === "l" && resultValue === "itsp"){
            result.value = Number (input.value)*56.312127565;
        }else if(measurementValue === "l" && resultValue === "cmi"){
            result.value = Number (input.value)*2.399128636E-13;
        }else if(measurementValue === "l" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0013079506;
        }else if(measurementValue === "l" && resultValue === "cft"){
            result.value = Number (input.value)*0.0353146667;
        }else if(measurementValue === "l" && resultValue === "cin"){
            result.value = Number (input.value)*61.023744095;
        }else if(measurementValue === "l" && resultValue === "l"){
            result.value = input.value;
        }
        else if (measurementValue === "ml" && resultValue === "cm"){
            result.value = Number (input.value)*0.000001;
        }else if(measurementValue === "ml" && resultValue === "ck"){
            result.value = Number (input.value)*9.999999999E-16;
        }else if(measurementValue === "ml" && resultValue === "ccm"){
            result.value = Number (input.value)*1;
        }else if(measurementValue === "ml" && resultValue === "cmm"){
            result.value = Number (input.value)*1000;
        }else if(measurementValue === "ml" && resultValue === "l"){
            result.value = Number (input.value)*0.001;
        }else if(measurementValue === "ml" && resultValue === "ug"){
            result.value = Number (input.value)*0.0002641722;
        }else if(measurementValue === "ml" && resultValue === "uq"){
            result.value = Number (input.value)*0.0010566887;
        }else if(measurementValue === "ml" && resultValue === "up"){
            result.value = Number (input.value)*0.0021133774;
        }else if(measurementValue === "ml" && resultValue === "uc"){
            result.value = Number (input.value)*0.0042267548;
        }else if(measurementValue === "ml" && resultValue === "ufo"){
            result.value = Number (input.value)*0.0338140386;
        }else if(measurementValue === "ml" && resultValue === "utbs"){
            result.value = Number (input.value)*0.0676280773;
        }else if(measurementValue === "ml" && resultValue === "utsp"){
            result.value = Number (input.value)*0.2028842318;
        }else if(measurementValue === "ml" && resultValue === "ig"){
            result.value = Number (input.value)*0.0002199692;
        }else if(measurementValue === "ml" && resultValue === "iq"){
            result.value = Number (input.value)*0.000879877;
        }else if(measurementValue === "ml" && resultValue === "ip"){
            result.value = Number (input.value)*0.001759754;
        }else if(measurementValue === "ml" && resultValue === "ifo"){
            result.value = Number (input.value)*0.0351950797;
        }else if(measurementValue === "ml" && resultValue === "itbs"){
            result.value = Number (inputvalue)*0.0563121276;
        }else if(measurementValue === "ml" && resultValue === "itsp"){
            result.value = Number (input.value)*0.1689363827;
        }else if(measurementValue === "ml" && resultValue === "cmi"){
            result.value = Number (input.value)*2.399128636E-16;
        }else if(measurementValue === "ml" && resultValue === "cyd"){
            result.value = Number (input.value)*0.000001308;
        }else if(measurementValue === "ml" && resultValue === "cft"){
            result.value = Number (input.value)*0.0000353147;
        }else if(measurementValue === "ml" && resultValue === "cin"){
            result.value = Number (input.value)*0.0610237441;
        }else if(measurementValue === "ml" && resultValue === "ml"){
            result.value = input.value;
        }
        else if (measurementValue === "ug" && resultValue === "cm"){
            result.value = Number (input.value)*0.00378541;
        }else if(measurementValue === "ug" && resultValue === "ck"){
            result.value = Number (input.value)*3.78541E-12;
        }else if(measurementValue === "ug" && resultValue === "ccm"){
            result.value = Number (input.value)*3785.41;
        }else if(measurementValue === "ug" && resultValue === "cmm"){
            result.value = Number (input.value)*3785410;
        }else if(measurementValue === "ug" && resultValue === "l"){
            result.value = Number (input.value)*3.78541;
        }else if(measurementValue === "ug" && resultValue === "ml"){
            result.value = Number (input.value)*3785.41;
        }else if(measurementValue === "ug" && resultValue === "uq"){
            result.value = Number (input.value)*4;
        }else if(measurementValue === "ug" && resultValue === "up"){
            result.value = Number (input.value)*8;
        }else if(measurementValue === "ug" && resultValue === "uc"){
            result.value = Number (input.value)*16;
        }else if(measurementValue === "ug" && resultValue === "ufo"){
            result.value = Number (input.value)*128;
        }else if(measurementValue === "ug" && resultValue === "utbs"){
            result.value = Number (input.value)*256;
        }else if(measurementValue === "ug" && resultValue === "utsp"){
            result.value = Number (input.value)*768;
        }else if(measurementValue === "ug" && resultValue === "ig"){
            result.value = Number (input.value)*0.8326737922;
        }else if(measurementValue === "ug" && resultValue === "iq"){
            result.value = Number (input.value)*3.3306951688;
        }else if(measurementValue === "ug" && resultValue === "ip"){
            result.value = Number (input.value)*6.6613903376;
        }else if(measurementValue === "ug" && resultValue === "ifo"){
            result.value = Number (input.value)*133.22780675;
        }else if(measurementValue === "ug" && resultValue === "itbs"){
            result.value = Number (inputvalue)*213.1644908;
        }else if(measurementValue === "ug" && resultValue === "itsp"){
            result.value = Number (input.value)*639.49347241;
        }else if(measurementValue === "ug" && resultValue === "cmi"){
            result.value = Number (input.value)*9.081685531E-13;
        }else if(measurementValue === "ug" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0049511294;
        }else if(measurementValue === "ug" && resultValue === "cft"){
            result.value = Number (input.value)*0.1336804926;
        }else if(measurementValue === "ug" && resultValue === "cin"){
            result.value = Number (input.value)*230.99989113;
        }else if(measurementValue === "ug" && resultValue === "ug"){
            result.value = input.value;
        }
        else if (measurementValue === "uq" && resultValue === "cm"){
            result.value = Number (input.value)*0.0009463525;
        }else if(measurementValue === "uq" && resultValue === "ck"){
            result.value = Number (input.value)*9.463525E-13;
        }else if(measurementValue === "uq" && resultValue === "ccm"){
            result.value = Number (input.value)*946.3525;
        }else if(measurementValue === "uq" && resultValue === "cmm"){
            result.value = Number (input.value)*946352.5;
        }else if(measurementValue === "uq" && resultValue === "l"){
            result.value = Number (input.value)*0.9463525;
        }else if(measurementValue === "uq" && resultValue === "ml"){
            result.value = Number (input.value)*946.3525;
        }else if(measurementValue === "uq" && resultValue === "ug"){
            result.value = Number (input.value)*0.25;
        }else if(measurementValue === "uq" && resultValue === "up"){
            result.value = Number (input.value)*2;
        }else if(measurementValue === "uq" && resultValue === "uc"){
            result.value = Number (input.value)*4;
        }else if(measurementValue === "uq" && resultValue === "ufo"){
            result.value = Number (input.value)*32;
        }else if(measurementValue === "uq" && resultValue === "utbs"){
            result.value = Number (input.value)*64;
        }else if(measurementValue === "uq" && resultValue === "utsp"){
            result.value = Number (input.value)*192;
        }else if(measurementValue === "uq" && resultValue === "ig"){
            result.value = Number (input.value)*0.2081684481;
        }else if(measurementValue === "uq" && resultValue === "iq"){
            result.value = Number (input.value)*0.8326737922;
        }else if(measurementValue === "uq" && resultValue === "ip"){
            result.value = Number (input.value)*1.6653475844;
        }else if(measurementValue === "uq" && resultValue === "ifo"){
            result.value = Number (input.value)*33.306951688;
        }else if(measurementValue === "uq" && resultValue === "itbs"){
            result.value = Number (inputvalue)*53.291122701;
        }else if(measurementValue === "uq" && resultValue === "itsp"){
            result.value = Number (input.value)*159.8733681;
        }else if(measurementValue === "uq" && resultValue === "cmi"){
            result.value = Number (input.value)*2.270421382E-13;
        }else if(measurementValue === "uq" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0012377823;
        }else if(measurementValue === "uq" && resultValue === "cft"){
            result.value = Number (input.value)*0.0334201231;
        }else if(measurementValue === "uq" && resultValue === "cin"){
            result.value = Number (input.value)*57.749972783;
        }else if(measurementValue === "uq" && resultValue === "uq"){
            result.value = input.value;
        }
        else if (measurementValue === "up" && resultValue === "cm"){
            result.value = Number (input.value)*0.0004731763;
        }else if(measurementValue === "up" && resultValue === "ck"){
            result.value = Number (input.value)*4.7317625E-13;
        }else if(measurementValue === "up" && resultValue === "ccm"){
            result.value = Number (input.value)*473.17625;
        }else if(measurementValue === "up" && resultValue === "cmm"){
            result.value = Number (input.value)*473176.25;
        }else if(measurementValue === "up" && resultValue === "l"){
            result.value = Number (input.value)*0.47317625;
        }else if(measurementValue === "up" && resultValue === "ml"){
            result.value = Number (input.value)*473.17625;
        }else if(measurementValue === "up" && resultValue === "ug"){
            result.value = Number (input.value)*0.125;
        }else if(measurementValue === "up" && resultValue === "uq"){
            result.value = Number (input.value)*0.5;
        }else if(measurementValue === "up" && resultValue === "uc"){
            result.value = Number (input.value)*2;
        }else if(measurementValue === "up" && resultValue === "ufo"){
            result.value = Number (input.value)*16;
        }else if(measurementValue === "up" && resultValue === "utbs"){
            result.value = Number (input.value)*32;
        }else if(measurementValue === "up" && resultValue === "utsp"){
            result.value = Number (input.value)*96;
        }else if(measurementValue === "up" && resultValue === "ig"){
            result.value = Number (input.value)*0.104084224;
        }else if(measurementValue === "up" && resultValue === "iq"){
            result.value = Number (input.value)*0.4163368961;
        }else if(measurementValue === "up" && resultValue === "ip"){
            result.value = Number (input.value)*0.8326737922;
        }else if(measurementValue === "up" && resultValue === "ifo"){
            result.value = Number (input.value)*16.653475844;
        }else if(measurementValue === "up" && resultValue === "itbs"){
            result.value = Number (inputvalue)*26.645561351;
        }else if(measurementValue === "up" && resultValue === "itsp"){
            result.value = Number (input.value)*79.936684052;
        }else if(measurementValue === "up" && resultValue === "cmi"){
            result.value = Number (input.value)*1.135210691E-13;
        }else if(measurementValue === "up" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0006188912;
        }else if(measurementValue === "up" && resultValue === "cft"){
            result.value = Number (input.value)*0.0167100616;
        }else if(measurementValue === "up" && resultValue === "cin"){
            result.value = Number (input.value)*28.874986392;
        }else if(measurementValue === "up" && resultValue === "up"){
            result.value = input.value;
        }
        else if (measurementValue === "uc" && resultValue === "cm"){
            result.value = Number (input.value)*0.0002365881;
        }else if(measurementValue === "uc" && resultValue === "ck"){
            result.value = Number (input.value)*2.36588125E-13;
        }else if(measurementValue === "uc" && resultValue === "ccm"){
            result.value = Number (input.value)*236.588125;
        }else if(measurementValue === "uc" && resultValue === "cmm"){
            result.value = Number (input.value)*236588.125;
        }else if(measurementValue === "uc" && resultValue === "l"){
            result.value = Number (input.value)*0.236588125;
        }else if(measurementValue === "uc" && resultValue === "ml"){
            result.value = Number (input.value)*236.588125;
        }else if(measurementValue === "uc" && resultValue === "ug"){
            result.value = Number (input.value)*0.0625;
        }else if(measurementValue === "uc" && resultValue === "uq"){
            result.value = Number (input.value)*0.25;
        }else if(measurementValue === "uc" && resultValue === "up"){
            result.value = Number (input.value)*0.5;
        }else if(measurementValue === "uc" && resultValue === "ufo"){
            result.value = Number (input.value)*8;
        }else if(measurementValue === "uc" && resultValue === "utbs"){
            result.value = Number (input.value)*16;
        }else if(measurementValue === "uc" && resultValue === "utsp"){
            result.value = Number (input.value)*48;
        }else if(measurementValue === "uc" && resultValue === "ig"){
            result.value = Number (input.value)*0.052042112;
        }else if(measurementValue === "uc" && resultValue === "iq"){
            result.value = Number (input.value)*0.2081684481;
        }else if(measurementValue === "uc" && resultValue === "ip"){
            result.value = Number (input.value)*0.4163368961;
        }else if(measurementValue === "uc" && resultValue === "ifo"){
            result.value = Number (input.value)*8.326737922;
        }else if(measurementValue === "uc" && resultValue === "itbs"){
            result.value = Number (inputvalue)*13.322780675;
        }else if(measurementValue === "uc" && resultValue === "itsp"){
            result.value = Number (input.value)*39.968342026;
        }else if(measurementValue === "uc" && resultValue === "cmi"){
            result.value = Number (input.value)*5.676053457E-14;
        }else if(measurementValue === "uc" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0003094456;
        }else if(measurementValue === "uc" && resultValue === "cft"){
            result.value = Number (input.value)*0.0083550308;
        }else if(measurementValue === "uc" && resultValue === "cin"){
            result.value = Number (input.value)*14.437493196;
        }else if(measurementValue === "uc" && resultValue === "uc"){
            result.value = input.value;
        }
        else if (measurementValue === "ufo" && resultValue === "cm"){
            result.value = Number (input.value)*0.0000295735;
        }else if(measurementValue === "ufo" && resultValue === "ck"){
            result.value = Number (input.value)*2.957351562E-14;
        }else if(measurementValue === "ufo" && resultValue === "ccm"){
            result.value = Number (input.value)*29.573515625;
        }else if(measurementValue === "ufo" && resultValue === "cmm"){
            result.value = Number (input.value)*29573.515625;
        }else if(measurementValue === "ufo" && resultValue === "l"){
            result.value = Number (input.value)*0.0295735156;
        }else if(measurementValue === "ufo" && resultValue === "ml"){
            result.value = Number (input.value)*29.573515625;
        }else if(measurementValue === "ufo" && resultValue === "ug"){
            result.value = Number (input.value)*0.0078125;
        }else if(measurementValue === "ufo" && resultValue === "uq"){
            result.value = Number (input.value)*0.03125;
        }else if(measurementValue === "ufo" && resultValue === "up"){
            result.value = Number (input.value)*0.0625;
        }else if(measurementValue === "ufo" && resultValue === "uc"){
            result.value = Number (input.value)*0.125;
        }else if(measurementValue === "ufo" && resultValue === "utbs"){
            result.value = Number (input.value)*2;
        }else if(measurementValue === "ufo" && resultValue === "utsp"){
            result.value = Number (input.value)*6;
        }else if(measurementValue === "ufo" && resultValue === "ig"){
            result.value = Number (input.value)*0.006505264;
        }else if(measurementValue === "ufo" && resultValue === "iq"){
            result.value = Number (input.value)*0.026021056;
        }else if(measurementValue === "ufo" && resultValue === "ip"){
            result.value = Number (input.value)*0.052042112;
        }else if(measurementValue === "ufo" && resultValue === "ifo"){
            result.value = Number (input.value)*1.0408422403;
        }else if(measurementValue === "ufo" && resultValue === "itbs"){
            result.value = Number (inputvalue)*1.6653475844;
        }else if(measurementValue === "ufo" && resultValue === "itsp"){
            result.value = Number (input.value)*4.9960427532;
        }else if(measurementValue === "ufo" && resultValue === "cmi"){
            result.value = Number (input.value)*7.095066821E-15;
        }else if(measurementValue === "ufo" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0000386807;
        }else if(measurementValue === "ufo" && resultValue === "cft"){
            result.value = Number (input.value)*0.0010443788;
        }else if(measurementValue === "ufo" && resultValue === "cin"){
            result.value = Number (input.value)*1.8046866495;
        }else if(measurementValue === "ufo" && resultValue === "ufo"){
            result.value = input.value;
        }
        else if (measurementValue === "utbs" && resultValue === "cm"){
            result.value = Number (input.value)*0.0000147868;
        }else if(measurementValue === "utbs" && resultValue === "ck"){
            result.value = Number (input.value)*1.478675781E-14;
        }else if(measurementValue === "utbs" && resultValue === "ccm"){
            result.value = Number (input.value)*14.786757812;
        }else if(measurementValue === "utbs" && resultValue === "cmm"){
            result.value = Number (input.value)*14786.757812;
        }else if(measurementValue === "utbs" && resultValue === "l"){
            result.value = Number (input.value)*0.0147867578;
        }else if(measurementValue === "utbs" && resultValue === "ml"){
            result.value = Number (input.value)*14.786757812;
        }else if(measurementValue === "utbs" && resultValue === "ug"){
            result.value = Number (input.value)*0.00390625;
        }else if(measurementValue === "utbs" && resultValue === "uq"){
            result.value = Number (input.value)*0.015625;
        }else if(measurementValue === "utbs" && resultValue === "up"){
            result.value = Number (input.value)*0.03125;
        }else if(measurementValue === "utbs" && resultValue === "uc"){
            result.value = Number (input.value)*0.0625;
        }else if(measurementValue === "utbs" && resultValue === "ufo"){
            result.value = Number (input.value)*0.5;
        }else if(measurementValue === "utbs" && resultValue === "utsp"){
            result.value = Number (input.value)*3;
        }else if(measurementValue === "utbs" && resultValue === "ig"){
            result.value = Number (input.value)*0.003252632;
        }else if(measurementValue === "utbs" && resultValue === "iq"){
            result.value = Number (input.value)*0.013010528;
        }else if(measurementValue === "utbs" && resultValue === "ip"){
            result.value = Number (input.value)*0.026021056;
        }else if(measurementValue === "utbs" && resultValue === "ifo"){
            result.value = Number (input.value)*0.5204211201;
        }else if(measurementValue === "utbs" && resultValue === "itbs"){
            result.value = Number (inputvalue)*0.8326737922;
        }else if(measurementValue === "utbs" && resultValue === "itsp"){
            result.value = Number (input.value)*2.4980213766;
        }else if(measurementValue === "utbs" && resultValue === "cmi"){
            result.value = Number (input.value)*3.54753341E-15;
        }else if(measurementValue === "utbs" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0000193403;
        }else if(measurementValue === "utbs" && resultValue === "cft"){
            result.value = Number (input.value)*0.0005221894;
        }else if(measurementValue === "utbs" && resultValue === "cin"){
            result.value = Number (input.value)*0.9023433247;
        }else if(measurementValue === "utbs" && resultValue === "utbs"){
            result.value = input.value;
        }
        else if (measurementValue === "utsp" && resultValue === "cm"){
            result.value = Number (input.value)*0.0000049289;
        }else if(measurementValue === "utsp" && resultValue === "ck"){
            result.value = Number (input.value)*4.92891927E-15;
        }else if(measurementValue === "utsp" && resultValue === "ccm"){
            result.value = Number (input.value)*4.9289192708;
        }else if(measurementValue === "utsp" && resultValue === "cmm"){
            result.value = Number (input.value)*4928.9192708;
        }else if(measurementValue === "utsp" && resultValue === "l"){
            result.value = Number (input.value)*0.0049289193;
        }else if(measurementValue === "utsp" && resultValue === "ml"){
            result.value = Number (input.value)*4.9289192708;
        }else if(measurementValue === "utsp" && resultValue === "ug"){
            result.value = Number (input.value)*0.0013020833;
        }else if(measurementValue === "utsp" && resultValue === "uq"){
            result.value = Number (input.value)*0.0052083333;
        }else if(measurementValue === "utsp" && resultValue === "up"){
            result.value = Number (input.value)*0.0104166667;
        }else if(measurementValue === "utsp" && resultValue === "uc"){
            result.value = Number (input.value)*0.0208333333;
        }else if(measurementValue === "utsp" && resultValue === "ufo"){
            result.value = Number (input.value)*0.1666666667;
        }else if(measurementValue === "utsp" && resultValue === "utbs"){
            result.value = Number (input.value)*0.3333333333;
        }else if(measurementValue === "utsp" && resultValue === "ig"){
            result.value = Number (input.value)*0.0010842107;
        }else if(measurementValue === "utsp" && resultValue === "iq"){
            result.value = Number (input.value)*0.0043368427;
        }else if(measurementValue === "utsp" && resultValue === "ip"){
            result.value = Number (input.value)*0.0086736853;
        }else if(measurementValue === "utsp" && resultValue === "ifo"){
            result.value = Number (input.value)*0.1734737067;
        }else if(measurementValue === "utsp" && resultValue === "itbs"){
            result.value = Number (inputvalue)*0.2775579307;
        }else if(measurementValue === "utsp" && resultValue === "itsp"){
            result.value = Number (input.value)*0.8326737922;
        }else if(measurementValue === "utsp" && resultValue === "cmi"){
            result.value = Number (input.value)*1.182511136E-15;
        }else if(measurementValue === "utsp" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0000064468;
        }else if(measurementValue === "utsp" && resultValue === "cft"){
            result.value = Number (input.value)*0.0001740631;
        }else if(measurementValue === "utsp" && resultValue === "cin"){
            result.value = Number (input.value)*0.3007811082;
        }else if(measurementValue === "utsp" && resultValue === "utsp"){
            result.value = input.value;
        }
        else if (measurementValue === "ig" && resultValue === "cm"){
            result.value = Number (input.value)*0.00454609;
        }else if(measurementValue === "ig" && resultValue === "ck"){
            result.value = Number (input.value)*4.54609E-12;
        }else if(measurementValue === "ig" && resultValue === "ccm"){
            result.value = Number (input.value)*4546.09;
        }else if(measurementValue === "ig" && resultValue === "cmm"){
            result.value = Number (input.value)*4546090;
        }else if(measurementValue === "ig" && resultValue === "l"){
            result.value = Number (input.value)*4.54609;
        }else if(measurementValue === "ig" && resultValue === "ml"){
            result.value = Number (input.value)*4546.09;
        }else if(measurementValue === "ig" && resultValue === "ug"){
            result.value = Number (input.value)*1.2009504915;
        }else if(measurementValue === "ig" && resultValue === "uq"){
            result.value = Number (input.value)*4.803801966;
        }else if(measurementValue === "ig" && resultValue === "up"){
            result.value = Number (input.value)*9.6076039319;
        }else if(measurementValue === "ig" && resultValue === "uc"){
            result.value = Number (input.value)*19.215207864;
        }else if(measurementValue === "ig" && resultValue === "ufo"){
            result.value = Number (input.value)*153.72166291;
        }else if(measurementValue === "ig" && resultValue === "utbs"){
            result.value = Number (input.value)*307.44332582;
        }else if(measurementValue === "ig" && resultValue === "utsp"){
            result.value = Number (input.value)*922.32997747;
        }else if(measurementValue === "ig" && resultValue === "iq"){
            result.value = Number (input.value)*4;
        }else if(measurementValue === "ig" && resultValue === "ip"){
            result.value = Number (input.value)*8;
        }else if(measurementValue === "ig" && resultValue === "ifo"){
            result.value = Number (input.value)*160;
        }else if(measurementValue === "ig" && resultValue === "itbs"){
            result.value = Number (inputvalue)*256;
        }else if(measurementValue === "ig" && resultValue === "itsp"){
            result.value = Number (input.value)*768;
        }else if(measurementValue === "ig" && resultValue === "cmi"){
            result.value = Number (input.value)*1.09066547E-12;
        }else if(measurementValue === "ig" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0059460612;
        }else if(measurementValue === "ig" && resultValue === "cft"){
            result.value = Number (input.value)*0.1605436532;
        }else if(measurementValue === "ig" && resultValue === "cin"){
            result.value = Number (input.value)*277.41943279;
        }else if(measurementValue === "ig" && resultValue === "ig"){
            result.value = input.value;
        }
        else if (measurementValue === "iq" && resultValue === "cm"){
            result.value = Number (input.value)*0.0011365225;
        }else if(measurementValue === "iq" && resultValue === "ck"){
            result.value = Number (input.value)*1.1365225E-12;
        }else if(measurementValue === "iq" && resultValue === "ccm"){
            result.value = Number (input.value)*1136.5225;
        }else if(measurementValue === "iq" && resultValue === "cmm"){
            result.value = Number (input.value)*1136522.5;
        }else if(measurementValue === "iq" && resultValue === "l"){
            result.value = Number (input.value)*1.1365225;
        }else if(measurementValue === "iq" && resultValue === "ml"){
            result.value = Number (input.value)*1136.5225;
        }else if(measurementValue === "iq" && resultValue === "ug"){
            result.value = Number (input.value)*0.3002376229;
        }else if(measurementValue === "iq" && resultValue === "uq"){
            result.value = Number (input.value)*1.2009504915;
        }else if(measurementValue === "iq" && resultValue === "up"){
            result.value = Number (input.value)*2.401900983;
        }else if(measurementValue === "iq" && resultValue === "uc"){
            result.value = Number (input.value)*4.803801966;
        }else if(measurementValue === "iq" && resultValue === "ufo"){
            result.value = Number (input.value)*38.430415728;
        }else if(measurementValue === "iq" && resultValue === "utbs"){
            result.value = Number (input.value)*76.860831456;
        }else if(measurementValue === "iq" && resultValue === "utsp"){
            result.value = Number (input.value)*230.58249437;
        }else if(measurementValue === "iq" && resultValue === "ig"){
            result.value = Number (input.value)*0.25;
        }else if(measurementValue === "iq" && resultValue === "ip"){
            result.value = Number (input.value)*2;
        }else if(measurementValue === "iq" && resultValue === "ifo"){
            result.value = Number (input.value)*40;
        }else if(measurementValue === "iq" && resultValue === "itbs"){
            result.value = Number (inputvalue)*64;
        }else if(measurementValue === "iq" && resultValue === "itsp"){
            result.value = Number (input.value)*192;
        }else if(measurementValue === "iq" && resultValue === "cmi"){
            result.value = Number (input.value)*2.726663675E-13;
        }else if(measurementValue === "iq" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0014865153;
        }else if(measurementValue === "iq" && resultValue === "cft"){
            result.value = Number (input.value)*0.0401359133;
        }else if(measurementValue === "iq" && resultValue === "cin"){
            result.value = Number (input.value)*69.354858198;
        }else if(measurementValue === "iq" && resultValue === "iq"){
            result.value = input.value;
        }
        else if (measurementValue === "ip" && resultValue === "cm"){
            result.value = Number (input.value)*0.0005682613;
        }else if(measurementValue === "ip" && resultValue === "ck"){
            result.value = Number (input.value)*5.6826125E-13;
        }else if(measurementValue === "ip" && resultValue === "ccm"){
            result.value = Number (input.value)*568.26125;
        }else if(measurementValue === "ip" && resultValue === "cmm"){
            result.value = Number (input.value)*568261.25;
        }else if(measurementValue === "ip" && resultValue === "l"){
            result.value = Number (input.value)*0.56826125;
        }else if(measurementValue === "ip" && resultValue === "ml"){
            result.value = Number (input.value)*568.26125;
        }else if(measurementValue === "ip" && resultValue === "ug"){
            result.value = Number (input.value)*0.1501188114;
        }else if(measurementValue === "ip" && resultValue === "uq"){
            result.value = Number (input.value)*0.6004752457;
        }else if(measurementValue === "ip" && resultValue === "up"){
            result.value = Number (input.value)*1.2009504915;
        }else if(measurementValue === "ip" && resultValue === "uc"){
            result.value = Number (input.value)*2.401900983;
        }else if(measurementValue === "ip" && resultValue === "ufo"){
            result.value = Number (inputp.value)*19.215207864;
        }else if(measurementValue === "ip" && resultValue === "utbs"){
            result.value = Number (input.value)*38.430415728;
        }else if(measurementValue === "ip" && resultValue === "utsp"){
            result.value = Number (input.value)*115.29124718;
        }else if(measurementValue === "ip" && resultValue === "ig"){
            result.value = Number (input.value)*0.125;
        }else if(measurementValue === "ip" && resultValue === "iq"){
            result.value = Number (input.value)*0.5;
        }else if(measurementValue === "ip" && resultValue === "ifo"){
            result.value = Number (input.value)*20;
        }else if(measurementValue === "ip" && resultValue === "itbs"){
            result.value = Number (inputvalue)*32;
        }else if(measurementValue === "ip" && resultValue === "itsp"){
            result.value = Number (input.value)*96;
        }else if(measurementValue === "ip" && resultValue === "cmi"){
            result.value = Number (input.value)*1.363331837E-13;
        }else if(measurementValue === "ip" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0007432577;
        }else if(measurementValue === "ip" && resultValue === "cft"){
            result.value = Number (input.value)*0.0200679567;
        }else if(measurementValue === "ip" && resultValue === "cin"){
            result.value = Number (input.value)*34.677429099;
        }else if(measurementValue === "ip" && resultValue === "ip"){
            result.value = input.value;
        }
        else if (measurementValue === "ifo" && resultValue === "cm"){
            result.value = Number (input.value)*0.0000284131;
        }else if(measurementValue === "ifo" && resultValue === "ck"){
            result.value = Number (input.value)*2.84130625E-14;
        }else if(measurementValue === "ifo" && resultValue === "ccm"){
            result.value = Number (input.value)*28.4130625;
        }else if(measurementValue === "ifo" && resultValue === "cmm"){
            result.value = Number (input.value)*28413.0625;
        }else if(measurementValue === "ifo" && resultValue === "l"){
            result.value = Number (input.value)*0.0284130625;
        }else if(measurementValue === "ifo" && resultValue === "ml"){
            result.value = Number (input.value)*28.4130625;
        }else if(measurementValue === "ifo" && resultValue === "ug"){
            result.value = Number (input.value)*0.0075059406;
        }else if(measurementValue === "ifo" && resultValue === "uq"){
            result.value = Number (input.value)*0.0300237623;
        }else if(measurementValue === "ifo" && resultValue === "up"){
            result.value = Number (input.value)*0.0600475246;
        }else if(measurementValue === "ifo" && resultValue === "uc"){
            result.value = Number (input.value)*0.1200950491;
        }else if(measurementValue === "ifo" && resultValue === "ufo"){
            result.value = Number (inputp.value)*0.9607603932;
        }else if(measurementValue === "ifo" && resultValue === "utbs"){
            result.value = Number (input.value)*1.9215207864;
        }else if(measurementValue === "ifo" && resultValue === "utsp"){
            result.value = Number (input.value)*5.7645623592;
        }else if(measurementValue === "ifo" && resultValue === "ig"){
            result.value = Number (input.value)*0.00625;
        }else if(measurementValue === "ifo" && resultValue === "iq"){
            result.value = Number (input.value)*0.025;
        }else if(measurementValue === "ifo" && resultValue === "ip"){
            result.value = Number (input.value)*0.05;
        }else if(measurementValue === "ifo" && resultValue === "itbs"){
            result.value = Number (inputvalue)*1.6;
        }else if(measurementValue === "ifo" && resultValue === "itsp"){
            result.value = Number (input.value)*4.8;
        }else if(measurementValue === "ifo" && resultValue === "cmi"){
            result.value = Number (input.value)*6.816659189E-15;
        }else if(measurementValue === "ifo" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0000371629;
        }else if(measurementValue === "ifo" && resultValue === "cft"){
            result.value = Number (input.value)*0.0010033978;
        }else if(measurementValue === "ifo" && resultValue === "cin"){
            result.value = Number (input.value)*1.7338714549;
        }else if(measurementValue === "ifo" && resultValue === "ifo"){
            result.value = input.value;
        }
        else if (measurementValue === "itbs" && resultValue === "cm"){
            result.value = Number (input.value)*0.0000177582;
        }else if(measurementValue === "itbs" && resultValue === "ck"){
            result.value = Number (input.value)*1.775816406E-14;
        }else if(measurementValue === "itbs" && resultValue === "ccm"){
            result.value = Number (input.value)*17.758164063;
        }else if(measurementValue === "itbs" && resultValue === "cmm"){
            result.value = Number (input.value)*17758.164063;
        }else if(measurementValue === "itbs" && resultValue === "l"){
            result.value = Number (input.value)*0.0177581641;
        }else if(measurementValue === "itbs" && resultValue === "ml"){
            result.value = Number (input.value)*17.758164063;
        }else if(measurementValue === "itbs" && resultValue === "ug"){
            result.value = Number (input.value)*0.0046912129;
        }else if(measurementValue === "itbs" && resultValue === "uq"){
            result.value = Number (input.value)*0.0187648514;
        }else if(measurementValue === "itbs" && resultValue === "up"){
            result.value = Number (input.value)*0.0375297029;
        }else if(measurementValue === "itbs" && resultValue === "uc"){
            result.value = Number (input.value)*0.0750594057;   
        }else if(measurementValue === "itbs" && resultValue === "ufo"){
            result.value = Number (inputp.value)*0.6004752457;
        }else if(measurementValue === "itbs" && resultValue === "utbs"){
            result.value = Number (input.value)*1.2009504915;
        }else if(measurementValue === "itbs" && resultValue === "utsp"){
            result.value = Number (input.value)*3.6028514745;
        }else if(measurementValue === "itbs" && resultValue === "ig"){
            result.value = Number (input.value)*0.00390625;
        }else if(measurementValue === "itbs" && resultValue === "iq"){
            result.value = Number (input.value)*0.015625;
        }else if(measurementValue === "itbs" && resultValue === "ip"){
            result.value = Number (input.value)*0.03125;
        }else if(measurementValue === "itbs" && resultValue === "ifo"){
            result.value = Number (inputvalue)*0.625;
        }else if(measurementValue === "itbs" && resultValue === "itsp"){
            result.value = Number (input.value)*3;
        }else if(measurementValue === "itbs" && resultValue === "cmi"){
            result.value = Number (input.value)*4.260411993E-15;
        }else if(measurementValue === "itbs" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0000232268;
        }else if(measurementValue === "itbs" && resultValue === "cft"){
            result.value = Number (input.value)*0.0006271236;
        }else if(measurementValue === "itbs" && resultValue === "cin"){
            result.value = Number (input.value)*1.0836696593;
        }else if(measurementValue === "itbs" && resultValue === "itbs"){
            result.value = input.value;
        }
        else if (measurementValue === "itsp" && resultValue === "cm"){
            result.value = Number (input.value)*0.0000059194;
        }else if(measurementValue === "itsp" && resultValue === "ck"){
            result.value = Number (input.value)*5.91938802E-15;
        }else if(measurementValue === "itsp" && resultValue === "ccm"){
            result.value = Number (input.value)*5.9193880208;
        }else if(measurementValue === "itsp" && resultValue === "cmm"){
            result.value = Number (input.value)*5919.3880208;
        }else if(measurementValue === "itsp" && resultValue === "l"){
            result.value = Number (input.value)*0.005919388;
        }else if(measurementValue === "itsp" && resultValue === "ml"){
            result.value = Number (input.value)*5.9193880208;
        }else if(measurementValue === "itsp" && resultValue === "ug"){
            result.value = Number (input.value)*0.0015637376;
        }else if(measurementValue === "itsp" && resultValue === "uq"){
            result.value = Number (input.value)*0.0062549505;
        }else if(measurementValue === "itsp" && resultValue === "up"){
            result.value = Number (input.value)*0.012509901;
        }else if(measurementValue === "itsp" && resultValue === "uc"){
            result.value = Number (input.value)*0.0250198019;   
        }else if(measurementValue === "itsp" && resultValue === "ufo"){
            result.value = Number (inputp.value)*0.2001584152;
        }else if(measurementValue === "itsp" && resultValue === "utbs"){
            result.value = Number (input.value)*0.4003168305;
        }else if(measurementValue === "itsp" && resultValue === "utsp"){
            result.value = Number (input.value)*1.2009504915;
        }else if(measurementValue === "itsp" && resultValue === "ig"){
            result.value = Number (input.value)*0.0013020833;
        }else if(measurementValue === "itsp" && resultValue === "iq"){
            result.value = Number (input.value)*0.0052083333;
        }else if(measurementValue === "itsp" && resultValue === "ip"){
            result.value = Number (input.value)*0.0104166667;
        }else if(measurementValue === "itsp" && resultValue === "ifo"){
            result.value = Number (inputvalue)*0.2083333333;
        }else if(measurementValue === "itsp" && resultValue === "itbs"){
            result.value = Number (input.value)*0.3333333333;
        }else if(measurementValue === "itsp" && resultValue === "cmi"){
            result.value = Number (input.value)*1.420137331E-15;
        }else if(measurementValue === "itsp" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0000077423;
        }else if(measurementValue === "itsp" && resultValue === "cft"){
            result.value = Number (input.value)*0.0002090412;
        }else if(measurementValue === "itsp" && resultValue === "cin"){
            result.value = Number (input.value)*0.3612232198;
        }else if(measurementValue === "itsp" && resultValue === "itsp"){
            result.value = input.value;
        }
        else if (measurementValue === "cmi" && resultValue === "cm"){
            result.value = Number (input.value)*4168180000;
        }else if(measurementValue === "cmi" && resultValue === "ck"){
            result.value = Number (input.value)*4.16818;
        }else if(measurementValue === "cmi" && resultValue === "ccm"){
            result.value = Number (input.value)*4168180000000000;
        }else if(measurementValue === "cmi" && resultValue === "cmm"){
            result.value = Number (input.value)*4168179999999999500;
        }else if(measurementValue === "cmi" && resultValue === "l"){
            result.value = Number (input.value)*4168180000000;
        }else if(measurementValue === "cmi" && resultValue === "ml"){
            result.value = Number (input.value)*4168180000000000;
        }else if(measurementValue === "cmi" && resultValue === "ug"){
            result.value = Number (input.value)*1101117184136;
        }else if(measurementValue === "cmi" && resultValue === "uq"){
            result.value = Number (input.value)*4404468736544;
        }else if(measurementValue === "cmi" && resultValue === "up"){
            result.value = Number (input.value)*8808937473087;
        }else if(measurementValue === "cmi" && resultValue === "uc"){
            result.value = Number (input.value)*17617874946175;   
        }else if(measurementValue === "cmi" && resultValue === "ufo"){
            result.value = Number (inputp.value)*140942999569399;
        }else if(measurementValue === "cmi" && resultValue === "utbs"){
            result.value = Number (input.value)*281885999138799;
        }else if(measurementValue === "cmi" && resultValue === "utsp"){
            result.value = Number (input.value)*845657997416396;
        }else if(measurementValue === "cmi" && resultValue === "ig"){
            result.value = Number (input.value)*916871421375;
        }else if(measurementValue === "cmi" && resultValue === "iq"){
            result.value = Number (input.value)*3667485685501;
        }else if(measurementValue === "cmi" && resultValue === "ip"){
            result.value = Number (input.value)*7334971371002;
        }else if(measurementValue === "cmi" && resultValue === "ifo"){
            result.value = Number (input.value)*146699427420047;
        }else if(measurementValue === "cmi" && resultValue === "itbs"){
            result.value = Number (input.value)*234719083872075;
        }else if(measurementValue === "cmi" && resultValue === "itsp"){
            result.value = Number (input.value)*704157251616224;
        }else if(measurementValue === "cmi" && resultValue === "cyd"){
            result.value = Number (input.value)*5451773612.4;
        }else if(measurementValue === "cmi" && resultValue === "cft"){
            result.value = Number (input.value)*147197887535;
        }else if(measurementValue === "cmi" && resultValue === "cin"){
            result.value = Number (input.value)*254357949660781;
        }else if(measurementValue === "cmi" && resultValue === "cmi"){
            result.value = input.value;
        }
        else if (measurementValue === "cyd" && resultValue === "cm"){
            result.value = Number (input.value)*0.764554858;
        }else if(measurementValue === "cyd" && resultValue === "ck"){
            result.value = Number (input.value)*7.645548579E-10;
        }else if(measurementValue === "cyd" && resultValue === "ccm"){
            result.value = Number (input.value)*764554.85798;
        }else if(measurementValue === "cyd" && resultValue === "cmm"){
            result.value = Number (input.value)*764554857.98;
        }else if(measurementValue === "cyd" && resultValue === "l"){
            result.value = Number (input.value)*764.55485798;
        }else if(measurementValue === "cyd" && resultValue === "ml"){
            result.value = Number (input.value)*764554.85798;
        }else if(measurementValue === "cyd" && resultValue === "ug"){
            result.value = Number (input.value)*201.97412116;
        }else if(measurementValue === "cyd" && resultValue === "uq"){
            result.value = Number (input.value)*807.89648464;
        }else if(measurementValue === "cyd" && resultValue === "up"){
            result.value = Number (input.value)*1615.7929693;
        }else if(measurementValue === "cyd" && resultValue === "uc"){
            result.value = Number (input.value)*3231.5859386;   
        }else if(measurementValue === "cyd" && resultValue === "ufo"){
            result.value = Number (inputp.value)*25852.687509;
        }else if(measurementValue === "cyd" && resultValue === "utbs"){
            result.value = Number (input.value)*51705.375017;
        }else if(measurementValue === "cyd" && resultValue === "utsp"){
            result.value = Number (input.value)*155116.12505;
        }else if(measurementValue === "cyd" && resultValue === "ig"){
            result.value = Number (input.value)*168.17855739;
        }else if(measurementValue === "cyd" && resultValue === "iq"){
            result.value = Number (input.value)*672.71422958;
        }else if(measurementValue === "cyd" && resultValue === "ip"){
            result.value = Number (input.value)*1345.4284592;
        }else if(measurementValue === "cyd" && resultValue === "ifo"){
            result.value = Number (inputvalue)*26908.569183;
        }else if(measurementValue === "cyd" && resultValue === "itbs"){
            result.value = Number (input.value)*43053.710693;
        }else if(measurementValue === "cyd" && resultValue === "itsp"){
            result.value = Number (input.value)*129161.13208;
        }else if(measurementValue === "cyd" && resultValue === "cmi"){
            result.value = Number (input.value)*1.834265453E-10;
        }else if(measurementValue === "cyd" && resultValue === "cft"){
            result.value = Number (input.value)*27;
        }else if(measurementValue === "cyd" && resultValue === "cin"){
            result.value = Number (input.value)*46656;
        }else if(measurementValue === "cyd" && resultValue === "cyd"){
            result.value = input.value;
        }
        else if (measurementValue === "cft" && resultValue === "cm"){
            result.value = Number (input.value)*0.0283168466;
        }else if(measurementValue === "cft" && resultValue === "ck"){
            result.value = Number (input.value)*2.831684659E-11;
        }else if(measurementValue === "cft" && resultValue === "ccm"){
            result.value = Number (input.value)*28316.846592;
        }else if(measurementValue === "cft" && resultValue === "cmm"){
            result.value = Number (input.value)*28316846.592;
        }else if(measurementValue === "cft" && resultValue === "l"){
            result.value = Number (input.value)*28.316846592;
        }else if(measurementValue === "cft" && resultValue === "ml"){
            result.value = Number (input.value)*28316.846592;
        }else if(measurementValue === "cft" && resultValue === "ug"){
            result.value = Number (input.value)*7.480523006;
        }else if(measurementValue === "cft" && resultValue === "uq"){
            result.value = Number (input.value)*29.922092024;
        }else if(measurementValue === "cft" && resultValue === "up"){
            result.value = Number (input.value)*59.844184048;
        }else if(measurementValue === "cft" && resultValue === "uc"){
            result.value = Number (input.value)*119.6883681;   
        }else if(measurementValue === "cft" && resultValue === "ufo"){
            result.value = Number (inputp.value)*957.50694476;
        }else if(measurementValue === "cft" && resultValue === "utbs"){
            result.value = Number (input.value)*1915.0138895;
        }else if(measurementValue === "cft" && resultValue === "utsp"){
            result.value = Number (input.value)*5745.0416686;
        }else if(measurementValue === "cft" && resultValue === "ig"){
            result.value = Number (input.value)*6.228835459;
        }else if(measurementValue === "cft" && resultValue === "iq"){
            result.value = Number (input.value)*24.915341836;
        }else if(measurementValue === "cft" && resultValue === "ip"){
            result.value = Number (input.value)*49.830683672;
        }else if(measurementValue === "cft" && resultValue === "ifo"){
            result.value = Number (inputvalue)*996.61367345;
        }else if(measurementValue === "cft" && resultValue === "itbs"){
            result.value = Number (input.value)*1594.5818775;
        }else if(measurementValue === "cft" && resultValue === "itsp"){
            result.value = Number (input.value)*4783.7456325;
        }else if(measurementValue === "cft" && resultValue === "cmi"){
            result.value = Number (input.value)*6.793575755E-12;
        }else if(measurementValue === "cft" && resultValue === "cyd"){
            result.value = Number (input.value)*0.037037037;
        }else if(measurementValue === "cft" && resultValue === "cin"){
            result.value = Number (input.value)*1728;
        }else if(measurementValue === "cft" && resultValue === "cft"){
            result.value = input.value;
        }
        else if (measurementValue === "cin" && resultValue === "cm"){
            result.value = Number (input.value)*0.0000163871;
        }else if(measurementValue === "cin" && resultValue === "ck"){
            result.value = Number (input.value)*1.6387064E-14;
        }else if(measurementValue === "cin" && resultValue === "ccm"){
            result.value = Number (input.value)*16.387064;
        }else if(measurementValue === "cin" && resultValue === "cmm"){
            result.value = Number (input.value)*16387.064;
        }else if(measurementValue === "cin" && resultValue === "l"){
            result.value = Number (input.value)*0.016387064;
        }else if(measurementValue === "cin" && resultValue === "ml"){
            result.value = Number (input.value)*16.387064;
        }else if(measurementValue === "cin" && resultValue === "ug"){
            result.value = Number (input.value)*0.0043290064;
        }else if(measurementValue === "cin" && resultValue === "uq"){
            result.value = Number (input.value)*0.0173160255;
        }else if(measurementValue === "cin" && resultValue === "up"){
            result.value = Number (input.value)*0.034632051;
        }else if(measurementValue === "cin" && resultValue === "uc"){
            result.value = Number (input.value)*0.0692641019;   
        }else if(measurementValue === "cin" && resultValue === "ufo"){
            result.value = Number (inputp.value)*0.5541128153;
        }else if(measurementValue === "cin" && resultValue === "utbs"){
            result.value = Number (input.value)*1.1082256305;
        }else if(measurementValue === "cin" && resultValue === "utsp"){
            result.value = Number (input.value)*3.3246768915;
        }else if(measurementValue === "cin" && resultValue === "ig"){
            result.value = Number (input.value)*0.0036046501;
        }else if(measurementValue === "cin" && resultValue === "iq"){
            result.value = Number (input.value)*0.0144186006;
        }else if(measurementValue === "cin" && resultValue === "ip"){
            result.value = Number (input.value)*0.0288372012;
        }else if(measurementValue === "cin" && resultValue === "ifo"){
            result.value = Number (inputvalue)*0.576744024;
        }else if(measurementValue === "cin" && resultValue === "itbs"){
            result.value = Number (input.value)*0.9227904384;
        }else if(measurementValue === "cin" && resultValue === "itsp"){
            result.value = Number (input.value)*2.7683713151;
        }else if(measurementValue === "cin" && resultValue === "cmi"){
            result.value = Number (input.value)*3.931467451E-15;
        }else if(measurementValue === "cin" && resultValue === "cyd"){
            result.value = Number (input.value)*0.0000214335;
        }else if(measurementValue === "cin" && resultValue === "cft"){
            result.value = Number (input.value)*0.0005787037;
        }else if(measurementValue === "cin" && resultValue === "cin"){
            result.value = input.value;
        }
        finalResult = result.value;
    }