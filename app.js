// let one = 15
// let two = 18
// let three = 20

// if (one>two && one>three) {
//     console.log(one);
// }

// let num = 0
// while (num < 100 ) {
//  num++
//  if (num % 2 == 0){
//     console.log(num);
//\  }
// //  console.log(num);
// }

// let arr1 = ["banan", "olma" , "anor" ,"gilos", "anjir"]
// let arr2 = ["banan", "olma"   , "uzum" , "behi "]
// let arr3 = []
// for (let x of  arr1 ) {
//   for (let y of arr2){
//     if (x == y){
//       arr3.push(x)
//     }
//   }
// }
// console.log(arr3);

// let pro = prompt("son kirgizing")
// for (i= 1 ;i < 10 ; i++ ){
//     console.log(pro*i);
// }

// let pro = prompt("transporni tanlang avtobus , avtomobil , skuter");
// let arr = ["bus", "avtomobil", "skuter"];
// if (pro == "avtobus") {
//   alert(`yo'l haqqi 50 ming so'm`);
// } else if (pro == "avtomobil") {
//   alert(`yo'l haqqi 80 ming `);
// }
// else if (pro == 'skuter'){
//     alert (`yo'l haqqi 30 ming so'm`)
// }

// let array = [10, 25 , 21 , 3 , 50 , 60 , 100 ,77]

// function handle(array){
//   for(let i = 0; i<array.length; i++){
//     if(array[i] % 3 == 0){
//       console.log(array[i])
//     } else {
//       console.log(false)
//     }
//   }
// }
// handle(array)
// //declarition function

// let expration = function(arr){
//   for(let i = 0; i<arr.length; i++){
//     if (arr[i] % 5 === 0){
//       console.log(arr[i]);
//     }else{
//       console.log(false);
//   }
//   }
// }

// expration(array)
// let number = [-101.1, 303.7384783483748 , 21.778]
// const nom = function(arr){ //parametr
//   let result = []
//   let numb;
//   for(key of arr){
//     if (key < 0 ){
//       numb = Math.round(Math.abs(key))
//     }else {
//       numb = Math.round(key)
//       result.push(numb)
//     }
//   }
//   console.log(result);
// }

// nom(number) //Arguments

//random
// const random = Math.trunc(Math.random() * 10) + 1;
// console.log(random);

// const number = 4.3

// const number = 5.2
// //sonning eng yaqin qismiga yaxlitlaydi
// console.log(Math.round(number));

// eng yaqin kichik butun qismiga qarab yaxlitlaydi
// console.log(Math.floor(number));

// eng yaqin katta butun qismiga qarab yaxlitlaydi
// console.log(Math.ceil(number));

//sonning faqat butun qismini qaytaradi
// console.log(Math.trunc(number));

// function cm(string) {
//   let number = "";
//   if (string[string.length -1 ] === "m") {
//     for (let i = 0; i < string.length; i++) {
//       if (Number(string[i]) === "0" || Number(string[i])) {
//         number += Number(string[i]);
//       }
//     }
//   }
//   let result  = Number(number) / 100 + "cm"
//   console.log(result)
// }
// cm("100m");

// function Num(num) {
//   if (num <= 0) {
//     console.log("manfiy son");
//   } else if (num <= 1) {
//     console.log("butun");
//   } else {
//     console.log("false");
//   }
// }
// Num(-107.8787878);

// let string = "Lionel Messi"
// console.log(string.includes("M")); // tekshirib beradi
// console.log(string.lastIndexOf("i"));
// console.log(string.padEnd(20 , d));
// console.log(string.padStart(30 , "m"))
// console.log(string.search(L));
// console.log(string.replace("Lionel Messi" , "Ronaldo"));
// console.log(string.slice(0.5));
// console.log(string.split(""));  // " " => " "

// let pro = prompt("ism kiriting");
// function num(pro) {
//     let results = ''
//     for(let i = 0; i<pro.length; i++){
//       if (i == 0){
//         console.log(results += pro);
//       }
//     }
// }
// num(pro);

// let numbers = [10, 20, 30, 55,40, 20 , 33, 27]
// function reduces(arr){
//     arr.reduce(function(a,b){
//         console.log(a+b);
//         return a+b
//     }),0
// }
// reduces(numbers)
// function numbersF(arr){
//     arr.filter(function(item){
//         if(item %3 === 0){
//             console.log(item);
//         }else if (item %3 === 1){
//             console.log(item);
//         }
//     })

// arr.map(function(number){
//     console.log(number);
// })
// arr.find((number) => {
//     console.log("string");
// })

// }
// numbersF(numbers)

// function qush(arr){
//     let result = 0
//     arr.map(function(params){
//         result+=params
//     })
//     console.log(result);
// }
// qush(numbers)

// numbers.forEach(function(number, index, array){
//     console.log(number.toString().split(" "));
// })
// //element uzi ushani indexi array
// let kes = numbers.slice(2, numbers.length)
// console.log();
// console.log(array)










