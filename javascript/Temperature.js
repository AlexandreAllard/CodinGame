const n = parseInt(readline()); // the number of temperatures to analyse
let lowerTemp;
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    const temp = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
        (Math.abs(temp)==Math.abs(lowerTemp)) ? lowerTemp=Math.abs(temp) : (Math.abs(temp)>=Math.abs(lowerTemp)) ? lowerTemp=lowerTemp : lowerTemp=temp;
}

if (n==0){
    lowerTemp = 0;
}

console.log(lowerTemp);