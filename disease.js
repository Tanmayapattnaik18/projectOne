let images = [
    "https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto",
    "https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto",
    "https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto",
    "https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto",
    "https://onemg.gumlet.io/a1af8b43-2836-483d-8709-99eff1cc6f70.png?format=auto",
    "https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto",
    "https://onemg.gumlet.io/730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png?format=auto",
    "https://onemg.gumlet.io/8051e79c-6152-440e-b402-8d1ba8d7c82e.png?format=auto",
    "https://onemg.gumlet.io/1627c0d3-a6ed-470a-8b18-94baa9fdbcfc.png?format=auto"
];

let currentIndex = 0;
const totalImages = images.length;

function nxt() {
    if (currentIndex < totalImages - 2) {
        currentIndex++;
        updateImages();
    }
}

function pre() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImages();
    }
}

function updateImages() {
    let imageElements = document.querySelectorAll('.b');
    let paragraphElements = document.querySelectorAll('.i p');

    for (let i = 0; i < imageElements.length; i++) {
        const newIndex = (currentIndex + i) % totalImages;
        imageElements[i].src = images[newIndex];
        imageElements[i].alt = `Disease Image ${newIndex + 1}`;
        paragraphElements[i].innerText = getDiseaseName(newIndex);
    }

    const prevButton = document.querySelector('.pre');
    const nxtButton = document.querySelector('.nxt');

    prevButton.style.display = currentIndex > 0 ? 'inline-block' : 'none';
    nxtButton.style.display = currentIndex < totalImages - 2 ? 'inline-block' : 'none';
}
updateImages();

function getDiseaseName(index) {
    let  diseaseNames = [
        "Diabetes",
        "Heart Care",
        "Stomach Care",
        "Liver Care",
        "Bone,Joint & Muscle Care",
        "Kideny Care",
        "Derma Care",
        "Respiratory Care",
        "Eye Care"
    ];

    return diseaseNames[index];
}
