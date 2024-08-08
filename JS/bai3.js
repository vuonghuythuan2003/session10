var arr = [
    7,
    'Vuong',
    'Huy',
    'Thuan',
    7
];
var so = +prompt("Nhập só nguyên bất kỳ vào đây : ");

var dem = 0;
var result = [];
for(var i = 0; i < arr.length; ++i) {
    if(arr[i] == so) {
        dem++;
    }
}
console.log(`Phần tử ${so} xuất hiện ${dem}`);