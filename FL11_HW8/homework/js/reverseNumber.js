function reverseNumber(a) {
    let num = Math.abs(a);
    let result = 0;
    while (num > 0) {
        result = result * 10 + num%10;
        num = Math.floor(num / 10);
    }
    if (a > 0){
        return result;
    } else {
        return -result;
    }
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);