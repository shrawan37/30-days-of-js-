
//function withot parametre example
function squar() {
    let num = 2
    let sq = num*num
    console.log(sq)
}
squar()

function addTwoNumbers(){
    let numOne = 10
    let numTwo = 20 
    let sum = numOne + numTwo
    console.log(sum)
}
addTwoNumbers()

function printFullName()
{
    let firstName = "shrawan"
    let lastName = "gorathoki "
    let space = ' '
    let FullName = firstName+space+lastName
    console.log(FullName)
}
printFullName()

//Function returning multiple values
function printFullName1()
{
let firstName1= "shrawan"
let lastName1 = 'gorathoki '
let space1=' '
let fullName1=firstName1+space1+lastName1
return fullName1
}
console.log(printFullName1())


// function with one parameter
function functionName(parm1) {
    //code goes her
  }
  functionName(parm1) // during calling or invoking one argument needed
  
  function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10)) // should be called with one argument
  
  function square(number) {
    return number * number
  }
  
  console.log(square(10))

  
  // function with two parameters
function functionName(parm1, parm2) {
    //code goes her
  }
  functionName(parm1, parm2) // during calling or invoking two arguments needed
  // Function without parameter doesn't take input, so lets make a function with parameters
  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
  }
  sumTwoNumbers(10, 20) // calling functions
  // If a function doesn't return it doesn't store data, so it should return
  
  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  
  console.log(sumTwoNumbers(10, 20))
  function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(printFullName('Asabeneh', 'Yetayeh'))

  // function with multiple parameters

  
  
  // this function takes array as a parameter and sum up the numbers in the array
  function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));
  
  
      const areaOfCircle = (radius) => {
        let area = Math.PI * radius * radius;
        return area;
      }
  console.log(areaOfCircle(10))





























