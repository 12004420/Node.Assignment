var num=12345;
let result =0;
while(num){
    let rem =num%10;
    num =Math.floor(num /10);
    result =result*10+rem;
}
console.log(result);