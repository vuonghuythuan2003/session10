
        let array=[10,-3,5,-11,-20,16,35,18,-7,9,2];
        let array_sort=[];
        while (array.length!=0) {
            let min=Math.min(...array);
            for (let i = 0; i < array.length; i++) {
                if (array[i]==min) {
                    array_sort.push(array[i]);
                    array.splice(i,1);
                };                
            }
        };
        console.log(array_sort);
        console.log(array);
        
