document.querySelector('.rezultat').addEventListener('click', function(){

    let suma = Number(document.querySelector('.sum').value);
    let perioada = document.querySelector('.period').value;
    let perioadaDeLuni = perioada * 12;
    let dobanda = Math.floor((4.6/100) * suma);
    let totalulDePlata = suma + dobanda;
    let rata = Math.floor(totalulDePlata / perioadaDeLuni);
    document.querySelector('.paragraf').textContent = `Rata dvs. este de ${rata} lei, iar totalul final de plata, pentru ${perioadaDeLuni} de luni, este ${totalulDePlata}, la care s-a adaugat o dobanda de 4,6%.`;
});




function rateCredit(sum, n){
    let perioadaDeTimp = n * 12;
    let dobanda = (4,6/100) * sum;
    let total = sum + dobanda;
    let rata = Math.floor(total / perioadaDeTimp);
    return `Rata dvs. este de ${rata} lei, iar totalul final de plata este ${total}, la care s-a adaugat o dobanda de 4,6%.`
}
console.log(rateCredit(1600, 3))

function baniDepusi(sumaBani, perioada){
    let months = perioada * 12;
    let dobanda = (1 / 100) * sumaBani;
    let total = (dobanda * perioada) + sumaBani;
    return `Suma dvs. de bani dupa ${perioada} ani este ${total}, la care s-a adaugat o dobanda anuala de 1%.`
}

console.log(baniDepusi(1400, 4))