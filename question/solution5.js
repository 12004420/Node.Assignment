var s=  "racecar";
var i=0;
var j= s.length-1;
var k=0;
while(i<=j){
    if(s[i]!=s[j]){
        k++;
        break;
    }
    i++;
    j--;
}
if(k==0) console.log("True");
else console.log("False");