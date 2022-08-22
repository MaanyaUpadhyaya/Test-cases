function sequentialSearch(arr,key){
    let i=0;
    let n=0;
    while(i<arr.length && arr[i]!=key){
        n++;
        i++;
    }
    if(i<arr.length){
        return {iterations:n,found:i};
    }
    else{
        return {iterations:n,found:-1};
    }
}
module.exports={sequentialSearch};