// 1. for loop
// 2. while loop
// 3. do while loop

// syntax 
//  for(initilize; condtion; increment/dec){
//     ///code
//  }



// for(let i = 0; i<10; i++){  //i++ i = i+1
//     console.log("hello")
// }

// for(let i = 0;i<=100; i++){
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i*4);
// }


// for(let i = 0; i<=30; i=i+3){
//     console.log(i)
// }um = 55


// 3 7 11 15 19

// for (let i = 0; i < 5; i++) {
//     console.log(3 + i * 4); 
// }


// for(let i = 3; i<=19;i=i+4){
//     console.log(i)
// }


// 3 to 27  print even number 

// for(let i = 3; i<=27;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// for (let i = 4; i <=27; i= i+2) {
//     console.log(i); 
// }

// let sum = 0
// for (let i = 0; i<=10; i++){
//     sum = sum+i
// }
// console.log(sum)


// while loop

// let i = 0;
// while(i>10){
//     console.log(i)
//     i++;
// }


// do-while loop

// let a = 0;
// do{
//     console.log(a)
//     a++
// }while(a>10)


// 10 to 1

// for(let i = 10; i>0; i--){
//     console.log(i)
// }




// for(let i = 0; i<=10; i++){
//     if(i==7){
//         break
//     }
//     console.log(i)
// }

// for(let i = 0; i<=10; i++){
//     if(i==6){
//         continue
//     }
//     console.log(i)
// }


let arr = ["kullu","shimla","spiti","mohali","chandigargh","jammu","kashimir"]

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// for-of loop

for(let i of arr){
    console.log(i)
}