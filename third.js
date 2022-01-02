function fun(number , target)
{
    let first = 0
    let last = number.length - 1
    while(first <= last){
        let mid = Math.floor(((first + last) / 2))
        if(number[mid] === target)
        {
            return mid;
        }
        if(target < number[mid])
        {
            last = mid -1;
        } else{
            first = mid + 1;
        }
    }
    return -1;
};
let new1 = fun([-1 , 0 ,3,5,9,12] , 9)
console.log(new1);