let A = parseFloat(prompt('Enter the length of the tringle side "A"'));
let B = parseFloat(prompt('Enter the length of the tringle side "B"'));
let C = parseFloat(prompt('Enter the length of the tringle side "C"'));

if(A + B > C && B + C > A && A + C > B){
    if(A === B && B === C && C === A){
        console.log('Eequivalent triangle');  
    } else if (A === B || B === C || C === A){
        console.log('Isosceles triangle');
    } else{
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}