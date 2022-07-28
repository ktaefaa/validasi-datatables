function validasi_input (form) {
    if (form.username.value=="") {
        alert("Username Harus Diisi!");
        form.username.focus();
        return (false);
    }

    else {
        return (true);
    }
}

function checkPass() {
    var pass1 = document.getElementById('password_1');
    var pass2 = document.getElementById('password_2');
    var pesan = document.getElementById('pesan');
    var warnabenar = "#66cc66";
    var warnasalah = "#ff6666";

    if(pass1.value == pass2.value){
        pass2.style.backgroundColor = warnabenar;
        pesan.style.color = warnabenar;
    } else {
        alert("Password tidak Cocok!");
        pass2.style.backgroundColor = warnasalah;
        pesan.style.color = warnasalah;
    }
}

