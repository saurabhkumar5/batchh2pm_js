


// for(let i = 1; i<=5; i++){ //row
  
//     let row = ""
//      for(let j =1; j<=5 ; j++){ //column
//         row = row+"* " 
//      }

//      console.log(row)
// }


for(let i = 1; i<=5; i++){ //row
    
   let row = ""
   for(let j = 5; j>=i; j--){ //column
       row = row+"* "
   }
   console.log(row)
}
