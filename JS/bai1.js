var arr = [
    7,
    'Vuong',
    'Huy',
    'Thuan',
    22
];

var result = [];
for(var i = 0; i < arr.length; ++i) {
    if(Number.isInteger(arr[i])){
        result.push(arr[i]);
    }
}
if(result.length > 0) {
    console.log('Các số nguyên trong mảng là ', result);
}
else{
    console.log('Trong mảng không tồn tại số nguyên');
}