let mail=document.getElementById("mail").value;
let password=document.getElementById("pass");
let login1=document.getElementById("login");
login1.addEventListener("click", abc);
function abc(){
    if(password.value=="1234"){
        alert("Login Successfull");
    }
    else{
        alert("Password didn't Matched");
    }
}