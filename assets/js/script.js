// ESERCIZIO 1
const personName = document.getElementById('personName');
const addDataBtn = document.getElementById('addData');
const removeDataBtn = document.getElementById('removeData');
const h2 = document.getElementById('addName');

addDataBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (personName.value.trim() === '') {
    alert('Per favore, inserisci un nome');
    personName.focus();
    return;
  }
  let nome = personName.value;
  localStorageSave(nome);
  printOnScreen();
});

function localStorageSave(nome) {
  localStorage.setItem('personName', nome);

  document.getElementById('savePerson').reset();
}

removeDataBtn.addEventListener('click', function (e) {
  localStorage.clear();
  printOnScreen();
});

printOnScreen();

function printOnScreen() {
  let localName = localStorage.getItem('personName');
  if (localName) {
    h2.innerText = `Ciao! ${localName}`;
  } else {
    h2.innerText = 'No Data';
  }
}

// ESERCIZIO 2

function counter() {
  const counterTimer = document.getElementById('counterTimer');
  let counter = sessionStorage.getItem('counter') || 0;

  counter++;

  counterTimer.textContent = `Il tuo tempo trascorso in questa sessione: ${counter}s `;

  sessionStorage.setItem('counter', counter);
}

const resetBtn = document.getElementById('resetSession');

resetBtn.addEventListener('click', function (e) {
  e.preventDefault();
  sessionStorage.clear();
  alert('Session Timer Restarted');
});

setInterval(counter, 1000);

counter();
