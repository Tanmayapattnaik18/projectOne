document.addEventListener('DOMContentLoaded', () => {
    const planOptions = document.querySelectorAll('.plan-option');

    planOptions.forEach(Option => {
        Option.addEventListener('click', () => {
            const selectedOption = document.querySelector('.plan-option.selected');

            if (selectedOption) {
                selectedOption.classList.remove('selected');
                const circle = selectedOption.querySelector('.circle');
                circle.innerHTML = '&#9675;';
            }

            Option.classList.add('selected');
            const circle = Option.querySelector('.circle');
            circle.innerHTML = '<span style="color: #ff6f61;">&#9673;</span>';
        });
    });
});


function sendlink() {
    const number = document.querySelector('.linknumber').value;
    if (number.length === 10) {
        alert("Sorry, we have not yet connected with the telecom company");
    } else {
        alert("Please enter a 10-digit number");
    }

}

document.querySelector('.buttonsend').addEventListener( 'click', sendlink );