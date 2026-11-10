let stavke = document.querySelectorAll("#lista li");
let brojac = document.getElementById("brojac");
let reset = document.getElementById("reset");

function azurirajBrojac() {
    let zavrsene = document.querySelectorAll("#lista li.zavrseno");

    brojac.textContent = "Završeno: " +
        zavrsene.length + " od " + stavke.length;
}

for (let stavka of stavke) {

    let dugme = stavka.querySelector("button");

    dugme.addEventListener("click", function() {

        stavka.classList.toggle("zavrseno");

        if (stavka.classList.contains("zavrseno")) {
            dugme.textContent = "Poništi";
        } else {
            dugme.textContent = "Završi";
        }

        azurirajBrojac();
    });
}

reset.addEventListener("click", function() {

    for (let stavka of stavke) {
        stavka.classList.remove("zavrseno");

        let dugme = stavka.querySelector("button");
        dugme.textContent = "Završi";
    }

    azurirajBrojac();
});