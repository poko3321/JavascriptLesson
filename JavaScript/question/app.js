
/* Q1  */
let nickname = 'ごっしー';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。' );

/* Q2 */
let languages = [
  'JavaScript',
  'PHP',
  'Ruby',
  'Python',
  'GO'
  ];

console.log(`私の好きな言語は${languages[0]}です。
次は${languages[3]}を勉強してみたいです。`);

/* Q3 */
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
}

console.log(user.age);

/* Q4 */
let playList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football','Smash Bros.'],
  },
];

console.log(playList[1].favorites[1]);

/* Q5 */
function avgAge() {
 let totalage = (playList[0].age + playList[1].age + playList[2].age);
 console.log(totalage / playList.length);
}

avgAge();

/* Q6 */

function sayHello() {
  console.log('Hello');
}

sayHello();

let sayWorld = function() {
  console.log('World');
}
sayWorld();

/* Q7 */

user.birthday ='2000-09-27';
user.sayHello = function() {
  console.log('Hello!');
}

user.sayHello();
console.log(user.birthday);

/* Q8 */
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
}
calc.add(2, 5);

calc.subtract = function(x, y){
  console.log(x - y);
}
calc.subtract(11, 1);

calc.multiply = function(x, y){
  console.log(x * y);
}
calc.multiply(7, 7);

calc.devide = function(x, y){
  console.log(x / y);
}
calc.devide(25, 5);

/* Q9 */
function reminder(x, y){
  return x % y;
}
console.log('5を3で割った余りは'+ reminder(5, 3) + 'です。');

/* Q10 */
/*
関数の中で定義した変数は、その関数内でしか参照出来ない。
変数Xはスコープ"{}"内で定義されている為、スコープ外では参照できない。

returnでいいのでは？これ使う・・？
*/

/* 応用問題 */

/* Q1 */
let random = Math.floor(Math.random() * 10);
console.log(random);

/* Q2 */
let harowa = function (){
  console.log('Hello World!');
}
setTimeout(harowa,3000);

/* Q3 */
let num = 114514;
if (num > 0 ) {
  console.log('num is greater than 0');
} else if (num < 0){
  console.log('num is less than 0');
} else if (num === 0){
  console.log('num is 0');
}

/* Q4 */
let numbers = [];
for (let i = 0; i < 100; i++){
  numbers.push(i);
}
console.log(numbers);

/* Q5 */
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++){
  let Q5num = mixed[i];
  if (typeof Q5num === 'number'){
    if (Q5num % 2 === 0){
      console.log('even');
    }
    else if (Q5num % 2 > 0){
      console.log('odd');
    }
  }
  else if (typeof Q5num === 'string'){
    console.log('not number')
  }
}
mixed[0];
mixed[1];
mixed[2];
mixed[3];
mixed[4];
mixed[5];
mixed[6];




function hello(name) {
  console.log("田中さん、こんにちは");
  console.log("鈴木さん、こんにちは");
  return `${name}さん、こんにちは`;
}

let name = '佐藤';
console.log(hello(name));

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});