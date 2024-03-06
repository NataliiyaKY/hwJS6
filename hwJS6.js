// - Знайти та вивести довижину настипних стрінгових значень------------------------------------------------------------
// 'hello world', 'lorem ipsum', 'javascript is cool'

let x = ['hello world', 'lorem ipsum', 'javascript is cool']

x.forEach((elem) => console.log(elem.length))


// - Перевести до великого регістру наступні стрінгові значення---------------------------------------------------------
// 'hello world', 'lorem ipsum', 'javascript is cool'

let y = ['hello world', 'lorem ipsum', 'javascript is cool']

y.forEach((elem) => console.log(elem.toUpperCase()))


// - Перевести до нижнього регістру настипні стрінгові значення---------------------------------------------------------
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let z = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']

y.forEach((elem) => console.log(elem.toLowerCase()))


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.--------------------------------

let str = ' dirty string   '

let str1 = str.replaceAll(' ', '')


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str2 = 'Ревуть воли як ясла повні'

let stringToarray = (elem) => elem.split(' ')

stringToarray(str2)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let x3 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]

x3.map((elemNum) => elemNum.toString())


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// ------------------------------------------------var_1------------------------------------------------------------------
let nums = [11, 21, 3]

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        nums.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        nums.sort((a, b) => b - a)
    }
    return nums
}

sortNums(nums, 'ascending')


// - є масив------------------------------------------------------------------------------------------------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration------------------------------------------------------------------

let newArray1 = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let newArray2 = coursesAndDurationArray.filter((elenMonthDur) => elenMonthDur.monthDuration > 5)


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let newArray3 = coursesAndDurationArray.map((elemNewArrow3, index) => ({
    id: index,
    title: elemNewArrow3.title,
    monthDuration: elemNewArrow3.monthDuration
}))


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

let cardSuit = ['spade', 'diamond', 'heart', 'clubs']
let value = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen']
let color = ['red', 'black']

let desk = () => {
    let coloda = []
    for (elemCardSuit of cardSuit) {
        for (elemValue of value) {
            coloda.push({cardSuit: elemCardSuit, value: elemValue})
        }
    }
    coloda.map(item => item.cardSuit === 'diamond' || item.cardSuit === 'heart' ? item.color = 'red' : item.color = 'black')
    return coloda
}
let desk1 = desk()
console.log(desk1)

// - знайти піковий туз-------------------------------------------------------------------------------------------------

let tuzPik = desk1.filter((el1) => el1.cardSuit === 'spade' && el1.value === 'ace')

// - всі шістки

let six = desk1.filter((el2) => el2.value === 6)

// - всі червоні карти

let color1 = desk1.filter((el3) => el3.color === 'red')

// - всі буби

let bubni = desk1.filter((el4) => el4.cardSuit === 'diamond')

// - всі трефи від 9 та більше

let clubs = desk1.filter((el5) => (el5.cardSuit === 'clubs' && el5.value !== 6 && el5.value !== 7 && el5.value !== 8))

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let ror = desk1.reduce((accum, el6) => {
        if (el6.cardSuit === 'spade') {
            accum[0].push(el6);
        } else if (el6.cardSuit === 'diamond') {
            accum[1].push(el6);
        } else if (el6.cardSuit === 'heart') {
            accum[2].push(el6);
        } else if (el6.cardSuit === 'clubs') {
            accum[3].push(el6);
        }
        return accum;
    },
    [[], [], [], []]
);

console.log(ror)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
