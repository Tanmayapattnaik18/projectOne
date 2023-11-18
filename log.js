function login(){
    let email=document.getElementsByClassName(".email").value;
    let password=document.getElementsByClassName(".password").value;
    let localemail=localStorage.getItem("email");
    let localpassword=localStorage.getItem("password");
    if(email==localemail && password==localpassword){
        alert("you are in Tata 1mg ")
        window.location.href="main.html"
    }
    else{
        alert("correct your id password")
    }
}