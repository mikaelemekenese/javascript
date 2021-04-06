console.log('students', students);

var listDiv = document.getElementById('students-list');
var ul = document.createElement('ul');

listDiv.appendChild(ul);

for (var i = 0; i < students.length; ++i) {
    var li = document.createElement('li');
    var textnode = document.createTextNode(students[i].id + ') ' + students[i].name);
    li.appendChild(textnode);
    ul.appendChild(li);
    li.style.listStyle = 'none';
}