document.getElementById("btnSubmit").onclick = function () {
    document.getElementById("tableUsers").style.display = "block";


    var table = document.getElementById("tableUsers");
    var row = table.insertRow(-1);
    var fname = row.insertCell(0);
    var lname = row.insertCell(1);
    var email = row.insertCell(2);
    var phone = row.insertCell(3);
    var age = row.insertCell(4);
    var date = row.insertCell(5);
    var icon = row.insertCell(6);

    fname.innerHTML = document.getElementById("txtFirstname").value;
    lname.innerHTML = document.getElementById("txtLastname").value;
    email.innerHTML = document.getElementById("txtEmail").value;
    phone.innerHTML = document.getElementById("txtPhone").value;
    age.innerHTML = document.getElementById("txtAge").value;
    date.innerHTML = document.getElementById("txtDate").value;
    icon.innerHTML = ' <i class="far fa-edit" style ="font-size:20px;color:#575757;margin-left:5px;" id = "myBtn" data-toggle="modal" data-target="#myModal"></i><i class="fas fa-trash-alt" style ="font-size:20px;color:#575757;margin-left:5px;"  onclick = "DeleteRows()"> </i></i>';

    return false;
}

function txtClear() {
    document.getElementById("txtFirstname").value = "";
    document.getElementById("txtLastname").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtPhone").value = "";
    document.getElementById("txtDate").value = "";
}

function txtToggle() {
    var x = document.getElementById("btnOpenForm");
    if (x.innerHTML === "Open Form") {
        x.innerHTML = "Close Form";
    } else {
        x.innerHTML = "Open Form";
    }
}

function DeleteRows() {
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}


























