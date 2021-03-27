const form1 = document.querySelector('#addForm1');
const form2 = document.querySelector('#addForm2');

let item = document.getElementById('item');
let items = document.getElementById('items');
let submit = document.getElementById('submit');
let text = document.getElementById('lblsuccess');

let editItem = null;

window.onload = () => {
    form1.addEventListener('click', addItem);
    items.addEventListener('click', removeItem);
};
  
function addItem(e) {
    e.preventDefault();
    
    if (item.value == '') {
        text.style.display = 'initial';
        text.innerHTML = "Veuillez entrer une tâche !";
        submit.disabled = true;
    } else {
        text.style.display = 'initial';
        text.innerHTML = "Tâche enregistrée !";
        submit.disabled = false;
    };
};

function removeItem(e) {
    e.preventDefault();
    /**
     *
     * a vous de jouer
     */
};

function toggleButton(ref, btnID) {
    /**
     *
     * a vous de jouer
     */
};