let forma = document.getElementById("forma");
let naziv = document.getElementById("naziv");
let iznos = document.getElementById("iznos");

let tabela = document.getElementById("tabela");
let redZbir = document.getElementById("redZbir");
let ukupno = document.getElementById("ukupno");
let brojac = document.getElementById("brojac");
let greska = document.getElementById("greska");

let zbir = 80;
let brojStavki = 3;

forma.addEventListener("submit", function(event) {

    event.preventDefault();

    let noviNaziv = naziv.value.trim();
    let unosIznosa = iznos.value.trim();
    let noviIznos = Number(unosIznosa);

    if (noviNaziv === "" ||
        unosIznosa === "" ||
        !Number.isFinite(noviIznos) ||
        noviIznos < 0) {

        greska.textContent = "Unesite ispravan naziv i iznos!";
        return;
    }

    greska.textContent = "";

    let redovi = tabela.tBodies[0].rows;
    let postoji = false;

    for (let i = 0; i < redovi.length - 1; i++) {

        let nazivUTabeli = redovi[i].cells[0].textContent;

        if (nazivUTabeli.trim().toLowerCase() ===
            noviNaziv.toLowerCase()) {

            let stariIznos = Number(redovi[i].cells[1].textContent);

            redovi[i].cells[1].textContent = stariIznos + noviIznos;

            postoji = true;
            break;
        }
    }

    if (!postoji) {

        let noviRed = tabela.insertRow(redZbir.rowIndex);

        let celijaNaziv = noviRed.insertCell(0);
        let celijaIznos = noviRed.insertCell(1);

        celijaNaziv.textContent = noviNaziv;
        celijaIznos.textContent = noviIznos;

        brojStavki++;
    }

    zbir = zbir + noviIznos;

    ukupno.textContent = zbir;
    brojac.textContent = "Broj stavki: " + brojStavki;

    forma.reset();
});
