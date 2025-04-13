function showMap() {
    let address = document.getElementById('addressId').value;
    let city = document.getElementById('cityId').value;
    let place = 'https://www.google.com/maps?q=' + address + '+' + city + '+' + '&output=embed';
    let iframeElement = document.getElementById('map-frame');
    iframeElement.src = place;

    console.log(address);
    console.log(city);
}