console.log('Hello World!');

let text = 'Javascriptの練習';
console.log(text);

text = 'Javascriptをマスターした';
console.log(text);

// 処理①
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

// 処理②
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

console.log(23);

let age = 23;
console.log(age);

let testText;
console.log(testText);

let again = '定義しました';
again = '再代入はできます';
console.log(again);

const constant = 'これは定数です';
console.log(constant);

let string = "JavaScriptの練習";
console.log(string);

let single = '文字列型です';
console.log(single);

let double = '英語だとstringといいます。';
console.log(double);

console.log('elephant');

let name = 'ジョニー';
let greet = '私は' + name + '!';
console.log(greet);

let template = 'テンプレートリテラル';
let templateText = `これが${template}です。
${template}は改行もできます。`;
console.log(templateText);

let num = 10;
console.log(num);

let numTen = 10;
let strTen = '10';
console.log(numTen, strTen);

let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);

let num1 = 25;
let num2 = 2;
console.log(num1 / num2);

let number = 5;
number += 3;
console.log(number);
number -= 1;
console.log(number);
number *= 5;
console.log(number);
number /= 7;
console.log(number);

let increment = 0;
console.log(increment);
increment++;
console.log(increment);

let decrement = 10;
console.log(decrement);
decrement--;
console.log(decrement);

let bigNum = 25;
let smallNum = 5;
console.log(bigNum ** smallNum);

let stringNum1 = '25';
let stringNum2 = 2;
console.log(stringNum1 + stringNum2);

let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log(names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

let empties = [];
console.log(empties);

let emptyNames = [];
emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);

/*let John = {
  name: 'John',
  age: 26,
  bloodtype: 'A',
  favorite: 'card',
};
console.log(John.favorite);
*/

let Andy = {};

Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodtype ='B';
Andy.favorite = 'sweets';

console.log(Andy.name, Andy.age)

let one = '1';
let two = 2;

console.log('one →',typeof one, one);
console.log('two →', typeof two, two);

function getArea(radius) {
  let circle = radius * radius * 3.14;
  console.log('ここはReturnよりも後ろの処理です。');
  return circle;
}

console.log('円の面積は' + getArea(3) + 'です!!!');



function kokoko(popo1,popo2,popo3){
  console.log(popo1)
}
kokoko('koko1','koko2','koko3')

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

doFunc(function() {
  console.log('コールバック関数が呼び出されました。')
});

let John = {
  name: 'John',
  age: 26,
  bloodtype: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LALALALALALALLALA~~');
  }
};

John.sing();

let round = Math.round(2.86);
console.log(round);



let userAge = 0;

function myFunc() {
  userAge = 27;
  console.log(userAge); // => 27
}


myFunc();
console.log(userAge);

if (false) {
  console.log('trueです！');
}
console.log('処理が終わりました');

let tall = 185;
if (tall >= 180) {
  console.log('高身長です');
}

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');

let signal = 'red';
if (signal ==='red') {
  console.log('赤信号です。止まりましょう。');
} else if (signal === 'blue'){
  console.log('青信号です。進みましょう');
} else if (signal ==='yellow'){
  console.log('黄色信号です。空気を読みましょう');
}

let myAge = 12;
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}

let loto = 8;

if (loto === 7 || loto ===8){
  console.log('当たり');
} else{
  console.log('ハズレ');
}

let numVal = 7;
let strVal = 'text';

console.log(numVal === 7 || strVal === 'text');


let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '到着'){
  console.log('全員そろったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}

console.log(userA === '到着' && userB === '到着');

let errMsg = '';

errMsg === '' ? console.log('ない！') : console.log('ある！');

let numberVV = 8;
let textVV = numberVV % 2 === 0 ? '偶数です' : '奇数です';
console.log(textVV);

if (1) {
  console.log('hoge');
}

if (0) {
  console.log('piyo');
}

for (let i = 0; i < 10; i++){
  console.log(i + '回目のコンソール');
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);