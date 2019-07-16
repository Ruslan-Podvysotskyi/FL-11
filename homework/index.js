function getNumbers(arg) {
    let numArr = [];
    for (let i = 0; i < arg.length; i++){
        let value = +arg[i];
        if(!isNaN(value)){
            numArr.push(value);
        }
    }
    return numArr;
}

function findTypes() {
    let obj = {};
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        if (obj[type] !== undefined) {
            obj[type] = 1;
        } else {
            obj[type]++;
        }
    }
    return obj;
}

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function mapArray(arr, func) {
    let secondArr = [];
    executeforEach(arr, function (elem) {
        secondArr.push(func(elem));
    });
    return secondArr;
}

function filterArray(arr, func) {
    let secondArr = [];
    executeforEach(arr, function (elem) {
        if (func(elem) === true) {
            secondArr.push(elem);
        }
    });
    return secondArr;
}

function showFormattedDate(arg) {
    let year = arg.getFullYear();
    let day = arg.getDate();
    let month = arg.getMonth();
    const arrMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let result = `Date: ${arrMonth[month]} ${day} ${year}`;
    return result;
}

function canConvertToDate(dat) {
    let check = new Date(dat).getFullYear();
    if (!isNaN(check)) {
        return true;
    } else {
        return false;
    }
}

function daysBetween(firstDate, secondDate) {
    const check = 86400000
    let result = Math.round((firstDate - secondDate) / check);
    if (result < 0) {
        return Math.abs(result);
    }
    return result;
}

function getAmountOfAdultPeople(data) {
    const arrBirthday = [];
    const today = new Date();
    let check = 6570;
    filterArray(data, function (obj) {
        arrBirthday.push(daysBetween(today, new Date(obj.birthday)));
    });
    let result = filterArray(arrBirthday, function (el) {
        return el > check;
    })
    return result.length;    
}

function keys(obj) {
    let arr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    return arr;
}

function values(obj) {
    let arr = [];
    for (let val in obj) {
        if (obj.hasOwnProperty(val)) {
            arr.push(obj[val]);
        }
    }
    return arr;
}