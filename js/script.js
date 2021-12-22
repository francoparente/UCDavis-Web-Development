function checkPassword() {
    var password = document.getElementById("password").value;
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z._-]{8,}$/;

    if (regex.test(password)){
        document.getElementById("messagePassword").style.color = "olive";
        document.getElementById("messagePassword").innerHTML = "<strong>Password accepted</strong>";
        return true;
    }
    else{
        document.getElementById("messagePassword").style.color = "darkred";
        document.getElementById("messagePassword").innerHTML = "<strong>Please match the requested format</strong>";
        return false;
    }
}
function checkName() {
    var name = document.getElementById("name").value;
    var regex = /^[a-zA-Z\s\'\-]{2,15}$/;

    if(regex.test(name)){
        document.getElementById("messageName").style.color = "olive";
        document.getElementById("messageName").innerHTML = "<strong>Valid name</strong>";
        return true;
    }
    else{
        document.getElementById("messageName").style.color = "darkred";
        document.getElementById("messageName").innerHTML = "<strong>Enter 2-15 alphabetical characters</strong>";
        return false;
    }

}