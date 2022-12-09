//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'shrawan'
let lastName = 'gorathoki '
let country = 'nepal'
let city = 'ghorahi'
let age = 20
let isMarried = true
let year = 20
 console.log(typeof(firstName))
 console.log(typeof(lastName))
 console.log(typeof(country))
 console.log(typeof(city))
 console.log(typeof(age))
 console.log(typeof(isMarried))
 console.log(typeof(year))

 //Check if type of '10' is equal to 10

 let number='10'
 console.log(typeof(number)==='10')
 
 //Check if parseInt('9.8') is equal to 10

 let num='9.8'
let numfloat=Math.ceil(parseInt(num))
console.log(numfloat)

 

//getting year
const now=new Date()
console.log(now.getFullYear())

//getting month today as a number
const now1 = new Date()
console.log(now1.getMonth())

//geting day today as a number
const now2 = new Date()
console.log(now2.getDay())

//geting hours now
const now3 = new Date()
console.log(now3.getHours())

//getting minutes now
const now4 = new Date()
console.log(now4.getMinutes())

//finding out the numbers of second ellaped from Janauary1,1970 to now
const now5 = Date.now()
console.log(now4.getTime())

const now6 = new Date()
const year1 = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let height=prompt('Enter Height','height');
let base=prompt('Enter Base','base');
console.log('area of traingle is', height*base);

/*Write a script that prompt the user to enter side 
a, side b, and side c of the triangle and and calculate the perimeter
 of triangle (perimeter = a + b + c)*/
let side_a =prompt('enter side a ')
let side_b=prompt('enter side b')
let side_c=prompt('enter side c')
console.log( parseInt (side_a )+parseInt(side_b) + parseInt(side_c))


let name1=prompt('Enter your first name',);
let name2=prompt('Enter your last name',)
if (name1.length>name2.lenght)
    {
        console.log(`Your firstname ${name1}is longer than your family_name${name2}`)
    }
else
{
    console.log(`Your name1 ${name1} is shorter than your family_name ${name2}`);
}






