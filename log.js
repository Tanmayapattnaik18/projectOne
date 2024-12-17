function login() {
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
    let localemail = localStorage.getItem("email");
    let localpassword = localStorage.getItem("password");

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    if (email === localemail && password === localpassword) {
        alert("You are in Tata 1mg");
        window.location.href = "main.html";
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}