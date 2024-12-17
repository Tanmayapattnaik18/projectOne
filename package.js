let currentIndex = 0;

function updateButtons() {
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const checkups = document.querySelectorAll('.checkups');
    const totalCheckups = checkups.children.length;
    const checkupsPerPage = 4;
    const maxIndex = Math.ceil(totalCheckups / checkupsPerPage) - 1;

    if (currentIndex > 0) {
        prevButton.style.display = 'block';
    } else {
        prevButton.style.display = 'none';
    }

    if (currentIndex < maxIndex) {
        nextButton.style.display = 'block';
    } else {
        nextButton.style.display = 'none';
    }
}

function nextCheckups() {
    const checkups = document.querySelectorAll('.checkups');
    const totalCheckups = checkups.children.length;
    const checkupsPerPage = 4;
    const maxIndex = Math.ceil(totalCheckups / checkupsPerPage) - 1;

    if (currentIndex < maxIndex) {
        currentIndex++;
        const offset = -(currentIndex * 100); 
        checkups.style.transform = `translateX(${offset}%)`;
    }
    updateButtons();
}

function prevCheckups() {
    const checkups = document.querySelectorAll('.checkups');

    if (currentIndex > 0) {
        currentIndex--;
        const offset = -(currentIndex * 100);
        checkups.style.transform = `translateX(${offset}%)`;
    }
    updateButtons();
}

updateButtons();
