function planVjezbanja(n, k) {

    for (let i = 1; i <= n; i++) {

        console.log("Vjezba " + i);

        if (i % k === 0 && i !== n) {
            console.log("Pauza");
        }
    }
}

let n = Number(prompt("Unesite broj ponavljanja:"));
let k = Number(prompt("Unesite nakon koliko ponavljanja ide pauza:"));

if (Number.isInteger(n) && Number.isInteger(k) &&
    n > 0 && k > 0) {

    planVjezbanja(n, k);

} else {
    console.log("Unesite pozitivne cijele brojeve!");
}