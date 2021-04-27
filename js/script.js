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
var scontoUtente = 0

//calcolare il prezzo del biglietto (0,21 al chilometro)
var prezzoBiglietto = chilometriUtente*prezzoChilometro

//se minorenni applicare sconto del 20% se over 65 del 40%
if (etaUtente < 18){
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto*scontoMinori)
}else if (etaUtente>65){
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto*scontoAnziani)
}

//restituisci prezzo con massimo due decimali 

if (isNaN(prezzoBiglietto) == false){
    document.getElementById('prezzo_biglietto').innerHTML = prezzoBiglietto.toFixed(2)

    //eta non inserita correttamente
    if(isNaN(etaUtente) == true){
        document.getElementById('eta_utente').innerHTML = "Età non inserita correttamente. Impossibile calcolare eventuali sconti"
    }
}else{
    document.getElementById('prezzo_biglietto').innerHTML = "impossibile calcolare il prezzo del biglietto"
    
    //chilometri inseriti non correttamente
    if(isNaN(chilometriUtente) == true){
        document.getElementById('chilometri_utente').innerHTML = "Chilometri non inseriti correttamente."
    }
    
}