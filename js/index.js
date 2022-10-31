/*console.time('Your Code Took');
console.log('hello Console');
console.log(50+50);
console.log(45);
console.log(false);
console.log([50,55,51,20,40,880,990,4550,151515,444]);
console.log({yash: 'Smart Boy', nirav: 'Good Boy'});
console.table({yash: 'Smart Boy', nirav: 'Good Boy'});
console.warn('not a web site');
console.timeEnd('Your Code Took');
console.assert(age>100, 'Age >100 is not possible')
console.error('This is an error')*/

// // String
// var name = 'Nirav';
// console.log('my name is ' + name);
// console.log('Data type is ' + (typeof name));

// // Number
// var age = 20;
// console.log('Data type is ' + (typeof age));

// // Boolean
// var question = false;
// console.log('Data type is ' + (typeof question));

// // Null
// var NumBer = null;
// console.log('Data type is ' + (typeof NumBer));

// // Undefined
// var Unef = undefined;
// console.log('Data type is ' + (typeof Unef));

// // Array
// var array = [25,26,26,24,54,5,545,4,4,545,4,44,5,5,45,45,,4,4]
// console.log('Data type is ' + (typeof array));

// var a = document;
// a = document.all;
// a = document.scripts;
// // a = document.images;
// console.log(a);

// var str = 'python';
// var links = document.links;
// console.log(links);
// var href;
// Array.from(links).forEach(function(element){
//     href = element.href;
//     if (href.includes(str)) {
//         console.log(href);
//     }
// })
document.getElementById("demo").innerHTML = "Hello World!";

function displayDate () {
    document.getElementById('demo1').innerHTML = Date();
}