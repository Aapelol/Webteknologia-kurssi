let count = 1;

function incrementCounter() {
    document.getElementById('count').textContent = count;
    count++;
}

let counter = 1; // Define counter variable


function counteri() {
    counter++; // Increment counter for unique IDs
}
// Call the function after DOM loads

function getNappi() {

    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) {
            //.then, palauttaa tässä Promisen (lupauksen), jota käytetään seuraavassa then-funktiossa. 

            const button = document.querySelector('.btn-primary');
            const originalText = button.innerHTML;
            button.innerHTML = '<i id="hakuNappi"></i>';
            setTimeout(() => {
                button.innerHTML = originalText;
            }, 1000);

            document.getElementById("hakuNappi").innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>';
            return response.json(); //huom. tässä response tulee JSON-muodossa
        })
        .then(function (result) {
            let data =
                '<div class="accordion accordion-flush" id="accordionFlushExample">' +
                '<div class="accordion-item">' +
                '<h2 class="accordion-header">' +
                '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse' + counter + '" aria-expanded="false" aria-controls="flush-collapse' + counter + '">' +
                'Accordion Item #' + counter +
                '</button>' +
                '</h2>' +
                '<div id="flush-collapse' + counter + '" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">' +
                '<div class="accordion-body">' + result.value + '</div>' +
                '</div>'
            counter++; // Increment counter for unique IDs

            //Jos lupaus onnistuu (eli lupaus on täytetty), tämä toiminto suoritetaan
            console.log(result.value); //tulostaa konsoliin JSON-muotoisen datan 
            document.getElementById("vitsi").innerHTML = result.value; //tulostaa vitsin HTML-elementtiin, jonka id on "vitsi"
            document.getElementById("previousVitsit").innerHTML += "<li>" + result.value + "</li>"; //lisää vitsin listaan, jonka id on "previousVitsit"
            document.getElementById("accordionFlushExample").innerHTML += data; //lisää vitsin listaan, jonka id on "previousVitsit"
        })

        .catch(function (error) {
            //Jos lupaus epäonnistuu (eli lupaus on hylätty), tämä toiminto suoritetaan
            console.log(error);
        });

}




