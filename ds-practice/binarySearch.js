
// Binary Search in javascript

function BinarySearch(arr, number){
    let start = 0;
    let end = arr.length  - 1;
    
    while(start <= end){
        let mid=Math.floor((end+start) /2 );
        if(arr[mid] === number){
            return mid;
        }
        else if(number < mid){
            end = mid-1;
        }
        else{
            start = mid+1;
        }
    }
    return null;
}

const array = [1,6, 8, 19, 34, 80, 45, 32, 89];
const result = BinarySearch(array, 445);
console.log(result ? `Found at ${result} place` : 'Oops..! Number is not present in Array!!')