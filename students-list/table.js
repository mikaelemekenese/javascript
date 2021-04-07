console.log('students', students);

var tbl = $("<table/>").attr("id","mytable");

$("#students-list").append(tbl);

for (var i = 0; i < students.length; i++) {
    var tr = "<tr>";
    var td1 = "<td>" + students[i]["id"] + "</td>";
    var td2 = "<td><img src=" + students[i]["avatar"] + "></td>";
    var td3 = "<td>" + students[i]["name"] + "</td>";
    var td4 = "<td>" + moment(students[i]["createdAt"]).locale('fr').format('LL, LT') + "</td></tr>";

    $("#mytable").append(tr + td1 + td2 + td3 + td4);
}