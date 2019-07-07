let Ax = parseFloat(prompt('Enter the first value for point A', ''));
let Ay = parseFloat(prompt('Enter the second value for point A', ''));

let Bx = parseFloat(prompt('Enter the first value for point B', ''));
let By = parseFloat(prompt('Enter the second value for point B', ''));

let Cx = parseFloat(prompt('Enter the first value for point C', ''));
let Cy = parseFloat(prompt('Enter the second value for point C', ''));

const number = 2;

let resultX = (Ax + Bx) / number;
let resultY = (Ay + By) / number;

console.log(resultX === Cx && resultY === Cy);