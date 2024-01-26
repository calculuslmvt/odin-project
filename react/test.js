
// implemented ig bubbble or whateveer it is just because primeTime did so !!

function sort(arr) {
    const length = arr.length ;

    for(let i=0; i<length; ++i){
        for(let j=i+1; j< length; ++j){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp; 
            }
        }
    }
    return arr; 
}
console.log(sort([3,2,1,0,-1,100, 12, 15,3]));
