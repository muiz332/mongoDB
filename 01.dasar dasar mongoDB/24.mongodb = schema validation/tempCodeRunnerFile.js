function meeting(s) {
//     // your code
//     const str = s.split(';').map(value => value.toUpperCase().split(':').reverse())
//     const urut = str.sort()
//     const duplicatNames = []
//     const index = []

//     for(let i = 0; i < urut.length; i++){
//         const tes = urut.filter((value,j) => {
//             if(i != j){
//                 if(value[0] === urut[i][0]){
//                     return urut[i][0]
//                 }
//             }
//         })
        
//         if(tes.length != 0){
//             index.push(i)
//             duplicatNames.push(tes[0].join(':'))
//         }
//     }
//     const buang = duplicatNames.sort()
//     console.log(urut)
//     console.log(index)

// }