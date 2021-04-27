// chiedere i chilometri da percorrere e l'età all'utente

//dati dell'utente
var etaUtente = document.getElementById('eta_utente').innerHTML = parseInt(prompt("Quanti anni hai?"));
console.log()

var chilometriUtente = document.getElementById('chilometri_utente').innerHTML = parseInt(prompt("Quanti chilometri vuoi percorrere?"))
console.log()

//parametri per il calcolo del prezzo del biglietto
var maggioreEta = 18
var prezzoChilometro = 0.21
var scontoMinori = 0.2
var scontoAnziani = 0.4

//calcolare il prezzo del biglietto (0,21 al chilometro)
var prezzoBiglietto = chilometriUtente*prezzoChilometro


console.log(prezzoBiglietto)

//se minorenni applicare sconto del 20% se over 65 del 40%
if (etaUtente < 18){
    prezzoBiglietto = prezzoBiglietto*scontoMinori
}else if (etaUtente>65){
    prezzoBiglietto = prezzoBiglietto*scontoAnziani
}
console.log(prezzoBiglietto)

//prezzo con massimo due decimali 

document.getElementById('prezzo_biglietto').innerHTML = prezzoBiglietto