// Hecho por Víctor Alexander Morales Lucero
let num = 0;
const text_error = document.getElementById("text_error");

const bill = document.getElementById("bill");
const custom = document.getElementById("custom");
const people = document.getElementById("people");

const tip_amount = document.getElementById("tip_amount");
const total = document.getElementById("total");

const btn_reset = document.getElementById("btn_reset");

btn_reset.disabled = true;

const btnsPorcen = document.querySelectorAll(".btn_dark_green");
// Los array de abajo ↓↓↓ tiene a los botones de los porcentajes , el input de custom y el btn reset
// (necesario los tres ya que ellos interactuan obligatoriamente ☻)
const btnsInputs = [...btnsPorcen, custom,btn_reset];

let lastActive;

btnsInputs.forEach((element, index, array) => {
    // console.log(btnsInputs);
    element.addEventListener("click", () => {
        lastActive = array.find((element) => element.classList[1]
            === "active");
        if (lastActive) {
            lastActive.classList.remove("active");
            // console.log(lastActive);
        }
        element.classList.toggle("active");
    });
});

btnsPorcen.forEach(porcen => {
    if (porcen.localName == "button") {
        porcen.addEventListener("click", addPercentage);
    }
});

function addPercentage(event) {
    num = event.target.value;
    num = Number(num);
    activar();
};

function activar() {
    resetCus();
    calcular();
}

function calc_cus() {
    num = custom.value;
    calcular();
};

function calcular() {
    let tip = (bill.value * num) / 100;
    let money = parseInt(bill.value) + tip;
    let num_per = people.value;
    let tip_per = tip / num_per;
    let money_per = money / num_per;
    tip_per = tip_per.toFixed(2);
    money_per = money_per.toFixed(2);
    tip_amount.innerHTML = `$${tip_per}`;
    total.innerHTML = `$${money_per}`;
    // Colocado en caso de que no halla sido colocado un numero de personas
    val_per();
    btn_reset.disabled = false;
    // console.log(typeof (num));
};

btn_reset.addEventListener("click", (e) => {
    e.preventDefault();
    resetAll();
});


function resetCus() {
    custom.value = "";
};


function resetAll() {
    num = 0;
    bill.value = "";
    custom.value = "";
    people.value = "";
    text_error.style.color = "transparent";
    tip_amount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
    people.style.borderColor = "";
    btn_reset.disabled = true;
    // nuevo style
    people.style.outline = "";
    people.style.caretColor = "";
};

function val_per() {
    if (people.value <= 0) {
        people.style.borderColor = "red";
        text_error.style.color = "red";
        // nuevo style
        people.style.outline = "3px solid red";
        people.style.caretColor = "red";

        tip_amount.innerHTML = "$0.00";
        total.innerHTML = "$0.00";
    } else {
        if (bill.value <= 0) {
            tip_amount.innerHTML = "$0.00";
            total.innerHTML = "$0.00";
        } 
        people.style.borderColor = ""
        // nuevo style
        people.style.outline = "";
        people.style.caretColor = "";

        text_error.style.color = "transparent";
    };
};
