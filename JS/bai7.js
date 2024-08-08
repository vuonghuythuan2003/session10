const array = [1, 2, 3, 4, 5, 6, 2, 3, 4, 7, 8, 8, 9, 2];

const result = [];

for (let i = 0; i < array.length; i++) {
    result[array[i]] = 0;
}

for (let i = 0; i < array.length; i++) {
    result[array[i]]++;
}

console.log("Các phần tử xuất hiện từ hai lần trở lên là:");
for (let i = 0; i < result.length; i++) {
    if (result[i] > 1) {
        console.log(i);
    }
}
