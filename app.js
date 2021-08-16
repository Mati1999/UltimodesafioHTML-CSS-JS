let billTotal = 0.00;
let tipTotal = 0.00;
let propina = 0;


const custom = document.getElementById('custom').value;
const totalTip = document.getElementById('total--tip');
const totalFinal = document.getElementById('total--final');
const resetButton = document.getElementById('reset');
const botonesTip = document.querySelectorAll(".btn-tip");
console.log(botonesTip);

function tipbtn(porc) {
    const bill = document.getElementById('costo').value;
    const people = document.getElementById('people').value;

    if (people < 0) {
        return;
    } else if (people == 0) {
        propina = (bill * (porc / 100)) / 1;
        totalTip.innerHTML = `$${propina}`;
        totalFinal.innerHTML = `$${propina + (bill / 1)}`;
        return propina;
    } else {
        propina = (bill * (porc / 100)) / people;
        totalTip.innerHTML = `$${propina}`;
        totalFinal.innerHTML = `$${propina + (bill / people)}`;
        return propina;
    }

}

resetButton.addEventListener('click',() => {
    bill.value = '';
    botonesTip.forEach(element => {

    });
})