function greetings(name = 'shrawan') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('shrawan'))

 
 //Function with default parameters
  function generateFullName(firstName = 'shrawan', lastName = 'gorathoki') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('sabin', 'hari'))

  function calculateAge(birthYear, currentYear = 2020) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ', calculateAge(2000))

  