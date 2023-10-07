document.querySelector('.rezultat1').addEventListener('click', function(){
    
    let baniDepozit = Number(document.querySelector('.bani').value);
    let periods = document.querySelector('.years').value;
    let dobandaInitiala = (1/100) * baniDepozit;
    let dobandaFinala = dobandaInitiala * periods;
    let totalBani = dobandaFinala + baniDepozit;
    document.querySelector('.paragraf1').textContent = `Suma dvs. totala, la finalul celor ${periods} ani, va fi de ${totalBani}, la care s-a adaugat o dobanda anuala de 1%.`;
})