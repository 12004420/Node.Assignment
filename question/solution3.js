var s = "Hello World";
var result = s.toLowerCase();
var vowel1=0;

for(var i=0;i<s.length;i++){
    if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u'){
         vowel1++;
    }
}
console.log(vowel1);