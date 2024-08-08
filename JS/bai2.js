var arr = [
    'Vuong',
    'Huy',
    'Thuan',
    'Thuan'
];

var giatri = prompt('Nhập vào 1 giá trị bất kỳ : ');
for(var i = 0;  i<arr.length; ++i) {
    if(arr[i] == giatri) {
        console.log(`Phần tử ${giatri} xuat hien trong mang arr tại vị trí ${i}`);
    }
}
