function fun(x){
    let square = 1 + (x-1)/2;
    let temp = x;
    if(x!== && x!==1 )
    {
         while( Math.abs(square - temp) > 0.1){
             temp = square;
             square = (square * square + x) / (2*square);
         }
    }
    else
    {
        square = x;
    }
    return Math.floor(square);
};

let new1 = fun(8);
console.log(new1);