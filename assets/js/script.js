// ESERCIZIO 1
const personName = document.getElementById('personName');
const addDataBtn = document.getElementById('addData');
const removeDataBtn = document.getElementById('removeData');
const list = document.getElementById('addName');
const newh4 = document.createElement('h4');

document.addEventListener('load', init());

function init() {
  const valore = JSON.parse(localStorage.getItem('personName'));
  if (valore === null) {
    newh4.innerText = 'No Data';
  } else {
    newh4.innerText = `Ciao! ${valore}`;
  }

  list.appendChild(newh4);
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
  localStorage.setItem('personName', JSON.stringify(nome));

  let localName = localStorage.getItem('personName');

  document.getElementById('savePerson').reset();
}

removeDataBtn.addEventListener('click', function (e) {
  localStorage.clear();
  init();
});

// ESERCIZIO 2
const counterDiv = document.getElementById('counterDiv');
