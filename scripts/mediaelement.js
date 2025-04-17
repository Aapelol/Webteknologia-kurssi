let cats_array = [{ "name": "Koira", "src": "Kuvat/Näyttökuva 2025-02-12 122356.png" }, { "name": "Karhu", "src": "Kuvat/Näyttökuva 2024-09-05 131340.png" },
{ "name": "AAAAAAA", "src": "Kuvat/jollekoiraXD.jpg" }, { "name": "Kuuma", "src": "Kuvat/Näyttökuva 2024-09-05 125619.png" }];

let index = 0; // Initialize index to 0
let startTimer = 0; // Declare startTimer variable
let h5 = document.getElementById("carousel-title");

function init() {
    const carouselImage = document.getElementById("carousel-image")
    carouselImage.src = cats_array[index].src; // Set the initial image source
    h5.innerHTML = cats_array[index].name; // Set the initial title
    startTimer = window.setInterval(nextImage, 500); // Set interval for automatic image change
    console.log(startTimer); // Log the interval ID for debugging
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

function playOrStop() {

    if (startTimer === 0) {
        startTimer = window.setInterval(nextImage, 500); // Start the interval if it's not already running
        document.getElementById("play-pause-icon").className = " bi bi-pause-fill"; // Change button text to "Stop"
    }
    else {
        window.clearInterval(startTimer); // Stop the interval
        startTimer = 0; // Reset startTimer to 0
        document.getElementById("play-pause-icon").className = "bi bi-play-fill"; // Change button text to "Play"
    }
}

function saveIndex() {
    localStorage.setItem("index", index); // Save the current index to local storage
}
function loadIndex() {
    const savedIndex = localStorage.getItem("index"); // Retrieve the saved index from local storage
    if (savedIndex !== null) {
        index = parseInt(savedIndex, 10); // Parse the saved index as an integer
    }
}
function clearIndex() {
    localStorage.removeItem("index"); // Clear the saved index from local storage
}
function clearAll() {
    localStorage.clear(); // Clear all local storage items
    cats_array = []; // Clear the cats_array
    index = 0; // Reset index to 0
    h5.innerHTML = ""; // Clear the title text
    document.getElementById("carousel-image").src = ""; // Clear the image source
}
