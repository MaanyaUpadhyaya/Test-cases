function maxElement(arr){
    let maxval = arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]>maxval){
            maxval=arr[i];
        }
    }
return maxval;

}
module.exports={maxElement};