var a = +prompt('Nhập vào một số nguyên a bất kỳ: ');
var b = +prompt('Nhập vào một số nguyên b bất kỳ: ');

var result = [];
for (var i = 1; i <= a; i++) {
    if (i % b === 0) {
        result.push(i);
    }
}


for (var j = 1; j <= b; j++) {
    if (j % a === 0) {
        result.push(j);
    }
}

result = [...new Set(result)];
console.log("Các số trong mảng là:", result);
