function toList() {
    document.getElementById("image-container").classList.add("list-container");
    document.getElementById("image-container").classList.remove("grid-container");

}

function toGrid(){
    document.getElementById("image-container").classList.remove("list-container");
    document.getElementById("image-container").classList.add("grid-container");

}
    