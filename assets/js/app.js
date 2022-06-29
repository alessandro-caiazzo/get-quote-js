let inputHours = document.getElementById('inputHours');
const btn = document.getElementById('btnCalcola');
let displayEmpty = document.getElementById('displayEmpty');
let costo = 20;


function calcolaPreventivo() {
  let ore = inputHours.value;
  console.log(ore);
  costo = 20 * ore;
  let sconto1 = costo * 10 / 100;
  let sconto2 = costo * 20 / 100;
  displayEmpty.classList.remove('errorMessage');

  if (ore <= 4) {
    costo = costo + ' ' + '£';
    displayEmpty.classList.remove('errorMessage');
  }

  if (ore > 4 && ore <= 7) {
    costo = costo - sconto1 + ' ' + '£ <br> 10% discount applied ';
    displayEmpty.classList.remove('errorMessage');
  }
  if (ore > 7 && ore <= 20) {
    costo = costo - sconto2 + ' ' + '£ <br> 20% discount applied ';
    displayEmpty.classList.remove('errorMessage');
  }
  if (ore > 20) {
    costo = 'Purchase a full subscription for ONLY 280£';
    displayEmpty.classList.remove('errorMessage');
  }
  if (ore == '') {
    costo = 'Type a number'
    displayEmpty.classList.add('errorMessage');
  }
  displayEmpty.innerHTML = costo;
}

btn.addEventListener('click', calcolaPreventivo);
