document.querySelector('.result').addEventListener('click', function(){
    let name = document.querySelector('.name').value;
    let myWeight = document.querySelector('.weight').value;
    let myHeight = document.querySelector('.height').value;
    let bMI = calculateBmi(myWeight, myHeight);
    
    document.querySelector('.bmi').textContent = `${name} are BMI-ul ${bMI}`;
})

document.querySelector('.result1').addEventListener('click', function(){
    let name = document.querySelector('.name1').value;
    let myWeight = document.querySelector('.weight1').value;
    let myHeight = document.querySelector('.height1').value;
    let bMI = calculateBmi(myWeight, myHeight);
    
    document.querySelector('.bmi1').textContent = `${name} are BMI-ul ${bMI}`;
 
})

document.querySelector('.comparare').addEventListener('click', function(){
    let name = document.querySelector('.name').value;
    let name1 = document.querySelector('.name1').value;
    let weight = document.querySelector('.weight').value;
    let weight1 = document.querySelector('.weight1').value;
    let height = document.querySelector('.height').value;
    let height1 = document.querySelector('.height1').value;
    let bMi1 = calculateBmi(weight, height);
    let bMi2 = calculateBmi(weight1, height1);
    if(bMi1 > bMi2){
        document.querySelector('.compara').textContent = `${name} are BMI-ul mai mare decat ${name1}`;
    } else{
        document.querySelector('.compara').textContent = `${name1} are BMI-ul mai mare decat ${name}`;
    }
})





function calculateBmi(weight, height){
    let myBMI = weight / (height*height);
    return myBMI;
}






function compareBMI(bMI1, bMI2, weight, weight1, height, height1) {
   
    let bmi2 = weightL/(heightL*heightL);
    console.log(`BMI lui Dima este mai mare ca a lui Luiza : ${bmiD > bmiL} `);
    if (bmiD> bmiL) {
        console.log("dima are un Bmi mai mare si este: " + bmiD);
    }else{
        console.log("Luiza are un Bmi mai mare si este: " + bmiL);
    }
}