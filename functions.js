function sum(a, b) {
    return a + b
}


function sum2(a, b) {
    a + a + b
}

let a = 2
let b = 3

sum2(a, b)
console.log(a)

function number(n){
    return n+1
   
}
console.log(number(4))

function sum3(a, b, c){
    return a + b + c
}
console.log(sum3(1, 2, 3))

function inc(string1, string2) {
    return string1 + string2 + string2 + string1
}
console.log(inc("Ana", "Maria" ))

function is_friend(sumName){
return sumName[0] == "D" || sumName[0] == "N"
}
console.log(is_friend("Florin"))

function suma(a, n){
    if(a<=n){
        return a + n 
        
    }
}
console.log(suma(2,50))

function biggest(a, b, c){
    if(a<b){
    return a
    } else if(b<c){
    return b
    } else if(c<a){
        return c
    }
}
console.log(biggest(10, 5, 8))

let i=1
while(i<5){
    console.log(i)
    i++
}

function print_number(n){
    let i=1
    while(i<=n){
        console.log(i)
        i++
    }
}

