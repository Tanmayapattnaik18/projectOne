function sendlink() {
    const number = document.querySelector('.linknumber').value;
    if (number.length === 10) {
        alert("Sorry, we have not yet connected with the telecom company");
    } else {
        alert("Please enter a 10-digit number");
    }

}

document.querySelector('.button').addEventListener( 'click', sendlink );