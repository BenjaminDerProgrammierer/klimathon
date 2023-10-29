// CO2-Emissionswerte in Gramm pro Personenkilometer (g/Pkm)
const emissions = {
    fahrrad: 0,  // Fahrrad produziert keine CO2-Emissionen
    motorrad: 162,  // Wert für Pkw
    auto: 162,  // Wert für Pkw
    bus: 6,  // Linienbus, Fernverkehr
    bim: 6,  // Linienbus, Nahverkehr
    zug: 46,  // Eisenbahn, Fernverkehr
    flugzeug: 271  // Flugzeug, Inland
};
let co2Emissionen;

let kmInput = document.getElementById("km");

let fahrrad = document.getElementById("fahrrad");
let motorrad = document.getElementById("motorrad");
let auto = document.getElementById("auto");
let bus = document.getElementById("bus");
let bim = document.getElementById("bim");
let zug = document.getElementById("zug");
let flugzeug = document.getElementById("flugzeug");

kmInput.addEventListener('change', e => {
    km = kmInput.value
    co2Emissionen = {
        fahrrad: 0,
        motorrad: emissions.motorrad * km,
        auto: emissions.auto * km,
        bus: emissions.bus * km,
        bim: emissions.bim * km,
        zug: emissions.zug * km,
        flugzeug: emissions.flugzeug * km
    };
    fahrrad.innerText = co2Emissionen.fahrrad.toFixed(2)/1000;  // Beispielwert mit zwei Dezimalstellen
    motorrad.innerText = co2Emissionen.motorrad.toFixed(2)/1000;
    auto.innerText = co2Emissionen.auto.toFixed(2)/1000;
    bus.innerText = co2Emissionen.bus.toFixed(2)/1000;
    bim.innerText = co2Emissionen.bim.toFixed(2)/1000;
    zug.innerText = co2Emissionen.zug.toFixed(2)/1000;
    flugzeug.innerText = co2Emissionen.flugzeug.toFixed(2)/1000;
})
