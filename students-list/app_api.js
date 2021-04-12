// Selection de '<ul clas="list"></ul>' qui est deja dans index.html
const list = document.querySelector('.list');

function showData(students) {
  students.forEach((student, index) => {
    // dans une loop (foreach dans ce cas la)
    // on parcour toute la liste des students
    // pour chaque student on :
    // cré tout le HTML
    const listItem = createMyLi(student, index);
    // ajoute le HTML à la liste
    list.appendChild(listItem);
  });
}

function createMyLi(student) {
  // creation de '<li></li>'
  const listItem = document.createElement('li');
  // creation de '<button class="edit btn btn-primary">Modifier</button>'
  const btnEdit = createBtns('edit btn btn-primary', 'Modifier');
  // creation de '<button class="delete btn btn-danger">Supprimer</button>'
  const btnDelete = createBtns('delete btn btn-danger', 'Supprimer');
  // creation de '<span class="name">le nom du student "student.name"</span>'
  const nameNode = createColumn('span', 'name', student.name);
  // modification de la valeur "createdAt" avec new Date()
  const date = new Date(student.createdAt).toLocaleDateString('fr-FR');
  // creation de '<span class="date">la date du student "student.name"</span>'
  const dateNode = createColumn('span', 'date', date);
  // creation de '<img class="avatar" />'
  const avatarNode = createColumn('img', 'avatar', null);
  // ajout attribut "id" a '<li id="student.id"></li>'
  listItem.setAttribute('id', student.id);
  // ajout attribut "src" a '<img class="avatar" src="avatar.png" />'
  avatarNode.setAttribute('src', 'avatar.png');

  // ajout de avatarNode a listItem
  listItem.appendChild(avatarNode);
  // ajout de nameNode a listItem
  listItem.appendChild(nameNode);
  // ajout de dateNode a listItem
  listItem.appendChild(dateNode);
  // ajout de btnEdit a listItem
  listItem.appendChild(btnEdit);
  // ajout de btnDelete a listItem
  listItem.appendChild(btnDelete);

  // ajout listener on click EDIT
  // utilise la function editStudent(event)
  btnEdit.addEventListener('click', editStudent);

  // ajout listener on click DELETE
  btnDelete.addEventListener('click', function (event) {
    if (confirm(`Souhaitez vous retirer l'élève "${student.name}"`)) {
      list.removeChild(listItem);
    }
  });

  // la fonction createMyLi est egal a :
  // <li id="MON ID">
  //   <img class="avatar" src="avatar.png">
  //   <span class="name">LE NOM</span>
  //   <span class="date">LA DATE</span>
  //   <button class="edit btn btn-primary">Modifier</button>
  //   <button class="delete btn btn-danger">Supprimer</button>
  // </li>
  return listItem;
}

function createBtns(className, text) {
  const btnElement = document.createElement('button');
  btnElement.innerHTML = text;
  btnElement.setAttribute('class', className);
  return btnElement;
}

function createColumn(type, className, data) {
  const node = document.createElement(type);
  node.setAttribute('class', className);
  if (data) {
    node.innerText = data;
  }
  return node;
}

function loadData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log('readyState', this.readyState);
    if (this.readyState === 4 && this.status === 200) {
      const students = (myStudents = JSON.parse(this.responseText));
      console.log('myStudents', myStudents);

      showData(students);
    }
  };
  //xhttp.open('GET', 'https://606ba946f8678400172e673d.mockapi.io/api/v1/students', true);
  xhttp.open('GET', 'students.json', true);
  xhttp.send();
}

loadData();
/**
 * zeczezec
 * ecuzehue
 */

function editStudent(event) {
  const li = event.target.parentNode;
  const nameSpan = li.querySelector('.name');
  const name = nameSpan.innerText;
  const id = li.id;
  var studentName = prompt('Modifier le nom', name);

  if (studentName !== '') {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      console.log('readyState', this.readyState);
      if (this.readyState === 4 && this.status === 200) {
        const student = JSON.parse(this.responseText);
        const listItem = createMyLi(student, null);
        console.log(listItem);
        li.replaceWith(listItem);

        // myStudents.map((s) => {
        //   if (s.id === id) {
        //     s.name = student.name;
        //   }
        //   return s;
        // });
        // nameSpan.innerText = student.name;
        console.log('myStudents', myStudents);
        // showData(myStudents);
      }
    };
    xhttp.open('PUT', `https://606ba946f8678400172e673d.mockapi.io/api/v1/students/${id}`, true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //xhttp.open('GET', 'students.json', true);
    const newData = {
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vladyn/128.jpg',
      createdAt: '2021-04-06T14:26:30.758Z',
      id,
      name: studentName
    };
    xhttp.send(JSON.stringify(newData));
  }
}