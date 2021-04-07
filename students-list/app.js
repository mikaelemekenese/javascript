console.log('students', JSON.stringify(students));
const list = document.querySelector('.list');

students.forEach((student) => {
    const listItem = document.createElement('li');
    const nameNode = createColumn('span', 'name', student.name);
    const date = new Date(student.createdAt).toLocaleDateString('fr-FR');
    const dateNode = createColumn('span', 'date', date);
    const avatarNode = createColumn('img', 'avatar', null);
    console.log(avatarNode);
    nameNode.setAttribute('id', student.id);
    avatarNode.setAttribute('src', student.avatar);
    listItem.appendChild(avatarNode);
    listItem.appendChild(nameNode);
    listItem.appendChild(dateNode);
    list.appendChild(listItem);
});

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
            console.log(this.responseText);
        }
    };
    xhttp.open('GET', 'students.json', true);
    xhttp.send();
}

loadData();