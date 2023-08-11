// Bài 1
let arr = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}
console.log(max);

// Bài 3
function SearchDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate(); //  dùng hàm new Date
};
console.log(`Số ngày trong tháng là ` + SearchDaysInMonth(8, 2023));

// Bài 2
let str = "heLlo riKkei academy";
// str = str.trim();
let arrStr = str.split("");

for (let i = 0; i < arrStr.length; i++) {
    let newArr = arrStr[i];
    let firstText = newArr.charAt(0).toUpperCase();
    let resultText = newArr.slice(1).toUpperCase();
    arrStr[i] = firstText + resultText;
}
let newStr = arrStr.join("");
console.log(newStr);

// Bài 4
// Cách 1: Sử dụng hàm Sort
let arrDown1 = [3, 25, 38, 49, 12];
arrDown1.sort(
    function (a, b) {
        return b - a;
    }
);
console.log(arrDown1);

// Cách 2: Không sử dụng hàm Sort
let arrDown2 = [3, 25, 38, 49, 12];
for (let i = 0; i < arrDown2.length; i++) {
    for (let j = i; j < arrDown1.length; j++) {
        if (arrDown2[i] < arrDown2[j]) {
            let change = arrDown2[i];
            arrDown2[i] = arrDown2[j]
            arrDown2[j] = change;
        }
    }
}
console.log(arrDown2);  