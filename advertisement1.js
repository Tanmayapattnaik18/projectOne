
const images = [
    "https://onemg.gumlet.io/c58b33dc-18ea-4564-9e39-0cfdce513089_1696336948.png?w=758&h=200&format=auto",
    "https://onemg.gumlet.io/2024-11%2F1730783783_Air_960x200.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/30252d4e-5821-4a42-b162-9cc27eb1ecd2_1675411660.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/59ee2d70-55fe-4f5b-9fc7-5cc0cda5ea2a_1728986104.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/e0686aa4-1aab-4f47-a576-696dcec8cf12_1709298575.png?w=1013&h=250&format=auto"
];

const imageElement = document.querySelector('.i1');
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
