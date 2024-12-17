let totalimages = 9;
let imagesperpage = 7;
let currentpage = 0;

function showimages() {
    let container = document.querySelector(".brands");
    for (let i = currentpage * imagesperpage; i < (currentpage + 1) * imagesperpage && i < totalimages; i++) {
        let imageElement = document.createElement("img");
        imageElement.src = document.querySelectorAll(".b")[i].src;
        imageElement.alt = `image${i + 1}`;
        imageElement.classList.add("b");
        container.appendChild(imageElement);
    }
    document.querySelector(".prev").style.display = currentpage === 0 ? "none" : "inline-block";
}

function shownext() {
    if ((currentpage + 1) * imagesperpage < totalimages) {
        currentpage++;
        showimages();
    }
}

function showprevious() {
    if (currentpage > 0) {
        currentpage--;
        showimages();
    }
}

showimages();
