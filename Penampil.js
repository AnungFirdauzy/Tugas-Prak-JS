alert("Selamat Datang")
var entry=document.getElementById('Register');
entry.addEventListener("click", displayDetail);

var row = 1 ;

function displayDetail() {
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var SK = document.getElementById("check").value;
    

    if (!email || !password || !repassword) {
        alert("Semua form Harus diisi");
        return;
    }

    if (password != repassword) {
        alert("Konfirmasi password harus sama dengan password");
        return;
    }

    

    var display = document.getElementById('display');

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = email;
    cell2.innerHTML = password;

    alert("Akun berhasil dibuat");

    row++;
    }