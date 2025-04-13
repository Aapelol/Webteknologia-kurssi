let cats_array = [{ "name": "Koira", "src": "Kuvat/Näyttökuva 2025-02-12 122356.png" }, { "name": "Karhu", "src": "Kuvat/Näyttökuva 2024-09-05 131340.png" },
{ "name": "AAAAAAA", "src": "Kuvat/jollekoiraXD.jpg" }, { "name": "Kuuma", "src": "Kuvat/Näyttökuva 2024-09-05 125619.png" }];

let index = 0; // Initialize index to 0

let h5 = document.getElementById("carousel-title");

function init() {
    const carouselImage = document.getElementById("carousel-image")
    carouselImage.src = cats_array[index].src; // Set the initial image source
    h5.innerHTML = cats_array[index].name; // Set the initial title
}

function nextImage() {
    const carouselImage = document.getElementById("carousel-image"); // Ensure carouselImage is defined
    if (index === cats_array.length - 1) {
        index = 0; // Wrap around to the first image
    } else {
        index = index + 1; // Increment index
    }
    carouselImage.src = cats_array[index].src; // Update the image source

    h5.innerHTML = cats_array[index].name; // Update the title
}

function prevImage() {
    const carouselImage = document.getElementById("carousel-image"); // Ensure carouselImage is defined
    if (index === 0) {
        index = cats_array.length - 1; // Wrap around to the last image
    } else {
        index = index - 1; // Decrement index
    }
    carouselImage.src = cats_array[index].src; // Update the image source

    h5.innerHTML = cats_array[index].name;
}

function pauseIcon() {
    
}


