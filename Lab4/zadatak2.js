let naslov = document.getElementById("naslov");
let tekst = document.getElementById("tekst");

let pregled = document.getElementById("pregled");
let pregledNaslov = document.getElementById("pregledNaslov");
let pregledTekst = document.getElementById("pregledTekst");
let pregledKategorija = document.getElementById("pregledKategorija");

let greska = document.getElementById("greska");
let dugmePregled = document.getElementById("pregledaj");
let forma = document.getElementById("forma");

dugmePregled.addEventListener("click", function() {

    let noviNaslov = naslov.value.trim();
    let noviTekst = tekst.value.trim();

    let kategorija = document.querySelector(
        'input[name="kategorija"]:checked'
    ).value;

    if (noviNaslov === "" || noviTekst === "") {
        greska.textContent = "Morate unijeti naslov i tekst!";
        return;
    }

    greska.textContent = "";

    pregledNaslov.textContent = noviNaslov;
    pregledTekst.textContent = noviTekst;
    pregledKategorija.textContent = "Kategorija: " + kategorija;

    pregled.classList.remove("informacija", "upozorenje");
    pregled.classList.add(kategorija);

});

forma.addEventListener("reset", function() {
    greska.textContent = "";
});