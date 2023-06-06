

// function getData(a, b){
//     console.log(`${a} ${b}`)
//     return a * b
// }

// let a = getData(10, 20);
// console.log(a)

// 1-masala


// const a = (son) => son ** 3
// const b = +prompt("Son:")
// console.log(a(b))

// 2-3-masala

// const a = (son1, son2) => son1 + son2 
// const ayirma = (son1, son2) => son1 - son2
// const b = +prompt("Son1:")
// const c = +prompt("Son2:")
// console.log(a(b, c))
// console.log(ayirma(b, c))

// 4-masala


// function daraja(a){
//     console.log(`2 - daraja ${a ** 2}`)
//     console.log(`3 - daraja ${a ** 3}`)
//     console.log(`4 - daraja ${a ** 4}`)
// }

// let k = +prompt("A")

// daraja(k)

// 5-6-masala

// function toq(a){
//     console.log("Toq")
//     for (let i = 0; i <= a; i++){
        
//         if (i % 2 === 1){
//             console.log(i)
//         }
//     } 
//     console.log("juft")
//     for (let i = 0; i <= a; i++){
        
//         if (i % 2 === 0){
//             console.log(i)
//         }
//     }  
// }

// let k = +prompt("Son:")

// toq(k)

// 8-masala

// function b(a){
//     for (let i = 1; i <= a; i++){
//         if (a % i ===0 ){
//             console.log(i)
//         }
//     } 
// }

// let k = +prompt("N:")

// b(k)


// 7-masala

// function Increment(son){
//     console.log (son - 1);
// }

// function Dikrement(son){
//     console.log (son)
// }
// let son = +prompt("SON")
// let a = +prompt("Increment(1) Dikrement (0)")

// if (a === 1){
//     Increment(son)
// }else if(a === 0){
//     Dikrement(son)
// }else{
//     console.log("SIZ faqat 0 va 1 kirita olasiz")
// }

// 9-masala

// function calc(son, son2, a){
//     if  (a === '*'){
//         console.log(son * son2)
//     }else if (a === '+'){
//         console.log(son + son2)
//     }else if (a === '-'){
//         console.log(son - son2)
//     }else if (a === '/'){
//         console.log(son / son2)
//     }
// }

// let son = +prompt("SON1")
// let son2 = +prompt("SON2")
// let a = prompt("amal")

// calc(son, son2, a);


// 10-masala

function karra (a, b){
    let count = 1;
    for (let i = a; i<=b; i++){
        count = 1;
        for (let j = 1; j <= 10; j++){
            count = j * i;
            console.log(`${i} * ${j} = ${count} `)
        }
        console.log("\t ")
    }
}

let a = +prompt("Start")
let b = +prompt("End")

karra(a, b)

