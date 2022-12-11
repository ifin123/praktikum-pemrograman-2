function seqSearch(arr, data){
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] === data){
            console.log("genap")
            return i
        }
        else{
            console.log("ganjil")
        }
    }
    return true
}
const arr =[1,3,5,7,9];
const arr2 =[2,4,6,8,10];
const data = [1,2,3,4,5,6,7,8,9,10]
console.log(seqSearch(arr,data,arr2));
console.log(seqSearch(data, 1));
console.log(seqSearch(data, 3));
console.log(seqSearch(data, 5));
console.log(seqSearch(data, 7));
console.log(seqSearch(data, 9));