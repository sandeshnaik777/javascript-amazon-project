import formatCurreny from "../../scripts/utils/money.js";

console.log('test suite: formatCurrency');
console.log('converts cents into dollars');
if(formatCurreny(2095) == 20.95)
{
    console.log('passed');
}
else{
    console.log('failed');
}

console.log('works with zero');
if(formatCurreny(0) == '0.00')
{
    console.log('passed');
}
else{
    console.log('failed');
}
console.log('round up to the nearest cents');
if(formatCurreny(2000.5) == '20.01')
{
    console.log('passed');
}
else{
    console.log('failed');
}
if(formatCurreny(2000.4) == '20.00')
{
    console.log('passed');
}
else{
    console.log('failed');
}