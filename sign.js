function signup() {
    let email = document.getElementById("semail").value;
    let password = document.getElementById("spassword").value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    window.location.href = "newpage.html";
    console.log(email, password);
    return false;
}
