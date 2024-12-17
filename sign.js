function signup() {
    let email = document.querySelector(".semail").value;
    let password = document.querySelector(".spassword").value;

    if(!email || !password) {
        alert("Please enter your email and password.");
        return;
    }
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    window.location.href = "main.html";
    console.log(email, password);
    return false;
}
