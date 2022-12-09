//string handling functions

let challange = " 30 days of javaScript"; //exercise 1 
console.log(challange.length); //.lenght is used to find the lenght of the string
console.log(challange.toUpperCase()); //.converted into capital letter 
console.log(challange.toLowerCase()); //converted into small letter 
console.log(challange.substr(9,10));//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challange.split(""));
console.log(challange.includes('java'));//check if word java is in string or not 
console.log(challange.includes('dang'));//check if word java is in string or not 

let challange2='facebook , google, microsoft , apple , IBM'
console.log(challange2.split(',')); // comma inside single quote seprated words and double qoute seperate letter
console.log(challange.replace('javaScript','python'));
console.log(challange.charAt(15));
console.log(challange.charCodeAt(15));
console.log(challange.indexOf('a'));
console.log(challange.lastIndexOf('a'));

let challange3 = 'you cannot use because in the last sentence because because because is a conjunction'
console.log(challange3.indexOf('because'));
console.log(challange3.lastIndexOf('because'));
console.log(challange.trim(''));
console.log(challange3.startsWith('use'));
console.log(challange3.startsWith('you'));
console.log(challange.endsWith('t'));
console.log(challange.match('a'));

let challange4 = '30'
console.log(challange4.concat("days","of","java"))
console.log(challange4.repeat(2))


//level 2 
console.log("there is no ecercise better than reaching down and lifting people up ")
 