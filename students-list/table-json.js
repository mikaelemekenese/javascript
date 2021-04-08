console.log('students', students);

// A refaire (ne pas utiliser jQuery)

$(document).ready(function () {
    $.getJSON("students.json",
        function (data) {
        var student = '';

        $.each(data, function (key, value) {
            student += '<tr>';
            student += '<td>' + value.id + '</td>';
            student += '<td><img src=' + value.avatar + '></td>';
            student += '<td>' + value.name + '</td>';
            student += '<td>' + moment(value.createdAt).locale('fr').format('ll') + '</td>';
            student += '<td><button type=button class=btn-primary onclick=editRow() style="border-radius:5px";>Edit</button> <button type=button class=btn-danger onclick=deleteRow(this) style="border-radius:5px";>Delete</button></td>';
            student += '</tr>';
        });

        $('#table').append(student);
    });
});

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}