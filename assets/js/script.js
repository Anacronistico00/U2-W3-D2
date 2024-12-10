// ESERCIZIO 1
const personName = document.getElementById('personName');
const addDataBtn = document.getElementById('addData');
const removeDataBtn = document.getElementById('removeData');
const list = document.getElementById('addName');
const newh4 = document.createElement('h4');

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

// ESERCIZIO 2

function counter() {
  const counterTimer = document.getElementById('counterTimer');
  let counter = sessionStorage.getItem('counter') || 0;

  counter++;

  counterTimer.textContent = `Il tuo tempo trascorso in questa sessione: ${counter}s `;

  sessionStorage.setItem('counter', counter);
}

setInterval(counter, 1000);

counter();
printOnScreen();

function printOnScreen() {
  let localName = localStorage.getItem('personName');
  if (localName === null) {
    newh4.innerText = 'No Data';
  } else {
    newh4.innerText = `Ciao! ${localName}`;
  }

  list.appendChild(newh4);
}
