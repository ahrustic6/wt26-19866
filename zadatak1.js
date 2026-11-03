function procijeniCekanje(vrijednost, p1, p2) {

    if (vrijednost < 0 || p1 <= 0 || p2 <= p1 || !Number.isFinite(vrijednost) ||
        !Number.isFinite(p1) || !Number.isFinite(p2)) {
        return "Neispravan unos";
    }

    if (vrijednost <= p1) {
        return "Prihvatljivo";
    }

    if (vrijednost <= p2) {
        return "Umjereno cekanje";
    }

    return "Predugo cekanje";
}

console.log(procijeniCekanje(5, 10, 30));
console.log(procijeniCekanje(10, 10, 30));
console.log(procijeniCekanje(20, 10, 30));
console.log(procijeniCekanje(30, 10, 30));
console.log(procijeniCekanje(45, 10, 30));
console.log(procijeniCekanje(-5, 10, 30));
console.log(procijeniCekanje(15, 30, 10));