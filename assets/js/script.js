// ESERCIZIO 1
const personName = document.getElementById('personName');
const addDataBtn = document.getElementById('addData');
const removeDataBtn = document.getElementById('removeData');
const list = document.getElementById('addName');
const newh4 = document.createElement('h4');

document.addEventListener('load', init());

function init() {
  //esercizio 1
  const valore = localStorage.getItem('personName');
  if (valore === null) {
    newh4.innerText = 'No Data';
  } else {
    newh4.innerText = `Ciao! ${valore}`;
  }

  list.appendChild(newh4);

  //esercizio 2
  counter();
}

addDataBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (personName.value.trim() === '') {
    alert('Per favore, inserisci un nome');
    personName.focus();
    return;
  }
  let nome = personName.value;
  localStorageSave(nome);
  init();
});

function localStorageSave(nome) {
  localStorage.setItem('personName', nome);

  let localName = localStorage.getItem('personName');

  document.getElementById('savePerson').reset();
}

removeDataBtn.addEventListener('click', function (e) {
  localStorage.clear();
  init();
});

// ESERCIZIO 2

function counter() {
  const counterTimer = document.getElementById('counterTimer');
  let counter = sessionStorage.getItem('counter') || 0;

  counter++;

  counterTimer.textContent = `Il tuo tempo trascorso in questa sessione: ${counter}s `;

  sessionStorage.setItem('counter', counter);
}

setInterval(counter, 1000);
