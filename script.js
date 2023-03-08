// task 1


function getResult (arr, callback) {
    
    return Math.round(callback(arr));
    
}


function mult (arr) {
    let n = 1;
    for (let i = 0; i < arr.length; i++) {
        n *= arr[i]
        
    }
    return n;
    
}

function sum (arr) {
    let m = 0;
    for (let i = 0; i < arr.length; i++) {
        m += arr[i];
        
    }
    return m;
   
}

console.log(getResult([1, 4, 3, 6, 8], mult));
console.log(getResult([1, 9, 3, 4, 5], sum));

// task 2

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function defineOrder(x, y) {
    if (x.age < y.age) return -1;
    if (x.age > y.age) return 1;
    return 0;
    
}

console.log(users.sort(defineOrder));


// task 3


const arrOne = [1, '4', 9, 'two'];
const arrTwo = [1, '4', false, 9, 'two'];

function toNumberArr(arr) {
    let newArr = [];
    arr.map((el) => {
        if (!isNaN(el)) {
            newArr.push(+el)
        }
    })
    return newArr;
    }

function reversArr (arr) {
    let arrReversed = arr.reverse();
    return arrReversed;
}



function each (arr, callback) {
   return callback(arr);
}

console.log(each(arrOne, reversArr));
console.log(each(arrTwo, toNumberArr));

// task 4


let alertTime= setInterval(() => console.log(new Date()), 3000);

setTimeout(() => { clearInterval(alertTime); console.log('30 секунд прошло'); }, 30000);


// task 5

const u = 0;
function calling() {
    console.log('Звоню!')
};


const beeps = (u, talk) => {
    setTimeout(() => {
        console.log('Идут гудки...');
        talk();
    }, 1000);
};

function talk() {
    console.log('Разговор')
}

calling();
let afterCalling = beeps(u, talk);
