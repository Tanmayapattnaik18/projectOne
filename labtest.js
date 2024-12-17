
const images = [
    "https://tse3.mm.bing.net/th?id=OIP.xTCZBskrG1QezM36NY1ZHAHaE8&pid=Api&P=0&h=280",
    "https://tse1.mm.bing.net/th?id=OIP.Tl3omMjaSHihHsgUCRuKegHaD4&pid=Api&P=0&h=280" ,
    "https://tse2.mm.bing.net/th?id=OIP.ocuqV7iOyPTSbP0sWoLBKgHaE9&pid=Api&P=0&h=280" ,
    "https://tse4.mm.bing.net/th?id=OIP.JClLSeNGwRJdHzHk8gMRQgHaDt&pid=Api&P=0&h=280",
    "https://tse3.mm.bing.net/th?id=OIP.63FwlitwK9gdFjvnutJT9AHaD_&pid=Api&P=0&h=280",
    "https://tse2.mm.bing.net/th?id=OIP.hOlXOi_buHdcrGhvYOKXwQHaE7&pid=Api&P=0&h=280"

]

const imageElement = document.querySelector('.change');
const buttons = document.querySelectorAll('.image-button');

let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function showImage(index) {
    currentIndex = index;
    updateImage();
}


function updateImage() {
    imageElement.src = images[currentIndex];
    buttons.forEach((button, index) => {
        if (index === currentIndex) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

setInterval(changeImage, 5000);


function sendlink() {
    const number = document.querySelector('.linknumber').value;
    if (number.length === 10) {
        alert("Sorry, we have not yet connected with the telecom company");
    } else {
        alert("Please enter a 10-digit number");
    }

}

document.querySelector('.buttonsend').addEventListener( 'click', sendlink );


