function linearSearch(arr, num){
    for(let i = 0;i<arr.length;i++){
        if(num == arr[i]){
            return i;
        }
    }
    return null;
};

const arr = [3, 4,5, 6, 1, 90, 43, 65];
const res = linearSearch(arr, 423);
console.log(res ? `Found at ${res} position.` : 'Number is not present in the Array.');
