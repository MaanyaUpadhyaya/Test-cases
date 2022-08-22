function binarySearch(arr, val) {
    let start =0;
    let end = arr.length-1;
    console.log(`the length of the given array is :${arr.length}`);
    let n =0
    while (start <= end) {
      n++;
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] == val) {
        return {iterations:n,found:mid};
      }
       else if (arr[mid]<val) {
       start=mid+1;
      } else {
        end = mid -1;
      }
    }
    return {iterations:n,found:-1};
  }
module.exports={binarySearch};

