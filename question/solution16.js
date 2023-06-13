function multiplyByTwo(number,callback){
    const result = 2*number;
    callback(result);
}

function callback(result){
    console.log(result);
}



multiplyByTwo(5,callback);