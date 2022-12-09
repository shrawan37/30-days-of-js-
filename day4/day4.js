/* Get user input using prompt(“Enter your age:”). If 
user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give 
another feedback stating to wait for the number of years he needs to turn 18.*/

let age = prompt('enter your age ')
if(age<18)
{  
   console.log (`wait for ${18-age} years  to drive`) //```and  ''' and """" are diffirent thing
}
else{
    console.log('you are old enough to drive')
}


/*Compare the values of myAge and yourAge using if … else. Based on the comparison and
 log the result to console 
stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.*/

let yourAge = prompt('enter your age ')
const myAge = 20
if(yourAge<myAge)
{
    console.log(`you are ${myAge-yourAge} year younger than me`)
}
else{
    console.log(`you are ${yourAge-myAge} year  older  than me `)
}

/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

let grades = prompt('enter the scores od students')
if(grades >= 100 && grades<=80)
{
console.log('A')
}
else if (grades>=70&&grades<=89)
{
console.log('B')
}
else if(grades>=60&&grades<=69)
{
    console.log('C')
}
else if(grades>=50&&grades<=59)
{
    console.log('D')
}
else{
    console.log('f')
}

/*Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.*/

    let dayUserInput = prompt('What day is today ?')

    
    switch (dayUserInput) {
      case 'saturday':
        console.log('saturday is a weekend')
        break
      case 'friday ':
        console.log('friday  is a workinf day ')
        break
      case 'wednesday':
        console.log('wednesday is a working day ')
        break
      case 'thursday':
        console.log('Thursday is a working day ')
        break
      case 'friday':
        console.log('Today is Friday')
        break
      case 'saturday':
        console.log('Today is Saturday')
        break
      case 'sunday':
        console.log('Today is Sunday')
        break
      default:
        console.log('It is not a week day.')
    }










