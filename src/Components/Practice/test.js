

// function sumOfDigitsUnitOneDigit(){

// }
 
// 12345 => 15 => 6

import React from 'react'

export default function Test() {


function sumOfDigitsUnitOneDigit(num) {
    let sum = 0;

    while(num > 0 || sum>9){
        if(num === 0) {
            num = sum;
            sum = 0;
        }
        sum += num%10;
        num = Math.floor(num/10);
    }

    return sum;
}
 console.log(sumOfDigitsUnitOneDigit(9989));
  return (
    <div>test</div>
  )
}
