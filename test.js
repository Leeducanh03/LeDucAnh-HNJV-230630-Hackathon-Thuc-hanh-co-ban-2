let arrDown1 = [3, 25, 38, 49, 12];

for (let i = 0; i < arrDown1.length; i++) {
    for (let j = i; j < arrDown1.length; j++) {
        if (arrDown1[i] < arrDown1[j]) {
            let change = arrDown1[i];
            arrDown1[i] = arrDown1[j]
            arrDown1[j] = change;
        }
    }
}
console.log(arrDown1);

// let arrDown2 = [3, 25, 38, 49, 12];
// arrDown2.sort(
//     function (a, b) {
//         return b - a;
//     }
// );
// console.log(arrDown2);