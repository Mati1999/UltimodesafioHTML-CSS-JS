let billTotal = 0.00;
let tipTotal = 0.00;
let propina = 0;

const totalTip = document.getElementById('total--tip');
const totalFinal = document.getElementById('total--final');
const resetButton = document.getElementById('reset');
const botonesTip = document.querySelectorAll(".btn-tip");
const people = document.querySelector('.personas');
console.log(botonesTip);
//Función cuando hacemos 'Click' en los botones de porcentaje.

function tipbtn(porc) {
    const bill = document.getElementById('costo').value;
    const peopleValue = document.getElementById('people').value;
    const calculadoraH5 = document.querySelector('.peopleH5');
    if (peopleValue <= 0) {

        calculadoraH5.innerHTML = `Number of People <Span style="color: red; font-size: 1rem; font-weight: 700;" >Can't be zero</Span>`
        people.style.border = "1px solid red";
        return;
    } else {
        propina = (bill * (porc / 100)) / peopleValue;
        calculadoraH5.innerHTML = `Number of People`
        people.style.border = "none";
        totalTip.innerHTML = `$${propina}`;
        totalFinal.innerHTML = `$${propina + (bill / peopleValue)}`;
        return propina;
    }

}

//Función cuando agregamos un valor en el input de 'Custom'.

function tipcustombtn() {
    const bill = document.getElementById('costo').value;
    const peopleValue = document.getElementById('people').value;
    const custom = document.getElementById('custom').value;
    const calculadoraH5 = document.querySelector('.peopleH5');
    console.log(custom);
    if (peopleValue <= 0) {
        const calculadoraH5 = document.querySelector('.peopleH5');
        calculadoraH5.innerHTML = `Number of People <Span style="color: red; font-size: 1rem; font-weight: 700;" >Can't be zero</Span>`
        people.style.border = "1px solid red";
        return;
    } else if (custom <= 0 && peopleValue > 0) {
        calculadoraH5.innerHTML = `Number of People`
        people.style.border = "none";
        return;
    } else {
        propina = (bill * (custom / 100)) / peopleValue;
        calculadoraH5.innerHTML = `Number of People`
        people.style.border = "none";
        totalTip.innerHTML = `$${propina}`;
        totalFinal.innerHTML = `$${propina + (bill / peopleValue)}`;
        return propina;
    }
}

//Función para resetear todos los valores.

function btnreset() {
    const bill = document.getElementById('costo').value = "";
    const peopleValue = document.getElementById('people').value = "";
    totalTip.innerHTML = ``;
    totalFinal.innerHTML = ``;
}