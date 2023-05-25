var num = 0;
var text_error=document.getElementById("text_error");

const bill = document.getElementById("bill");
const custom = document.getElementById("custom");
const people = document.getElementById("people");

const btn5 = document.getElementById("btn5");
const btn10 = document.getElementById("btn10");
const btn15 = document.getElementById("btn15");
const btn25 = document.getElementById("btn25");
const btn50 = document.getElementById("btn50");

const tip_amount = document.getElementById("tip_amount");
const total = document.getElementById("total");

const btn_reset = document.getElementById("btn_reset");

btn_reset.disabled = true;  

btn5.addEventListener("click", (e) => {
    num = 5;
    e.preventDefault();
    resetCus()
    calcular();

});

btn10.addEventListener("click", (e) => {
    num = 10;
    e.preventDefault();
    resetCus()
    calcular();
});

btn15.addEventListener("click", (e) => {
    num = 15;
    e.preventDefault();
    resetCus()
    calcular();
});

btn25.addEventListener("click", (e) => {
    num = 25;
    e.preventDefault();
    resetCus()
    calcular();
});

btn50.addEventListener("click", (e) => {
    num = 50;
    e.preventDefault();
    resetCus()
    calcular();
    
});

function calc_cus(){
    num = custom.value;
    calcular();
};

function calcular(){
    let tip = (bill.value * num) /100;
    let money = parseInt(bill.value) + tip;
    let num_per = people.value;
    let tip_per = tip / num_per;
    let money_per = money / num_per;
    tip_per = tip_per.toFixed(2);
    money_per = money_per.toFixed(2);
    tip_amount.innerHTML =`$${tip_per}`;
    total.innerHTML =`$${money_per}`;
    // Colocado en caso de que no halla sido colocado un numero de personas
    val_per();
    btn_reset.disabled = false; 
};

btn_reset.addEventListener("click", (e) => {
    e.preventDefault();
    resetAll();
});

function resetCus(){
    custom.value = "";
};


function resetAll(){
    bill.value = "";
    custom.value = "";
    people.value = "";
    text_error.style.color = "transparent";
    tip_amount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
    people.style.borderColor = "";
    btn_reset.disabled = true; 
    // nuevo style
    people.style.outline= "3px solid transparent";
};

function val_per(){
    if (people.value == 0){
        people.style.borderColor = "red";
        text_error.style.color = "red";
        // nuevo style
        people.style.outline= "3px solid red";

        tip_amount.innerHTML = "$0.00";
        total.innerHTML = "$0.00";
    }else{
        if(bill.value == 0){
            tip_amount.innerHTML = "$0.00";
            total.innerHTML = "$0.00";
        }else{

        }
        people.style.borderColor = ""
        // nuevo style
        people.style.outline= "3px solid transparent";

        text_error.style.color = "transparent";
    };
};
