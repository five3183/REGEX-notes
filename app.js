//Error handling 
/*
Try catch block - a more elegant way to handle errors 
this method allows us to handle errors without stopping the script

Types of Errors:
   Reference
   TypeError
   Syntax
   URI
*/

// const user = {email: 'jdoe@gmail.com'}



// try {
//    if(!user.name) {
//       throw new SyntaxError('User has no name')
//    }
// } catch(error) {
//    console.log(error)
//    console.log(error.message)
//    console.log(error.name)
//    console.log(error instanceof ReferenceError)
// } finally {
//    // this block runs no matter what!
//    console.log('YUP STILL WORKS!')
// }

// console.log('Program continues....')

/*
Regular Expressions : used to describe a pattern of characters

exec() - return a result in an array or null
   return the expression, the index that it starts at, and the string
   if it does not exist, it returns null
test() - returns true of false if there is a match

match() - return restult array or null

search() - return index of the first match, if not found returns -1

replace() - return new string with some or all matches of a pattern

FLAGS - they go after the end backslash
      i - case insensitive
      g - global search. This will search the entire string for a match 
*/

// let re
// re = /hello/
// re =/hello/i


// ***** exec() *****
// console.log(re)
// console.log(re.source)

// const result = re.exec('Matt! hello world')
// console.log(result[0])
// console.log(result.index)
// console.log(result.input)

// const result = re.test('Hello')

// const str = 'Hello There.  I said HELLO!  hello!  hi'
// const result = str.match(re)

// const str ='hello there'
// const result = str.search(re)
// console.log(result)

// const str = 'Hello There'
// const newStr = str.replace(re, 'Hi')
// console.log(newStr)


/*
Litteral Characters re = /hello/

Metacharacter Symbols 
   ^ - First letter must match what follows the carrot
   $ - Last letter must match what is before the moneySign
   . - Matches one and only one characeter in its position
   * - Matches any character infinite amout of times
   ? - Optional character.  In the grey example gry, gray and grey will match
   \ - Escape character. 
   + - looks at all characters
*/
let re = /hello/i
re = /^h/i
re = /world$/i
re = /^hello$/i   // This example we are looking for an exact match
re = /..llo/i     // First 2 letters in the string can be anything. 
re = /h*llo/i     // Match any example: This matches h (Anything can go here) llo

re = /gre?a?y/i   // Optional character example: This matches Gry, Grey, Gray

re = /gre?a?y\?/i   // Escaping example:  This matches Grey?

/*
Brackets [] - Character sets
   brackets account for 1 character

*/
re = /gr[ae]y/i         // Matches gray and grey
re = /[GF]rey/          // Matches Frey or Grey (first letter must be upper case)
re = /[^GF]rey/i        // [First letter cannot be a G or F] + rey
re = /[A-Z]rey/         // [Any uppercase letter as the first letter] + rey
re = /[a-z]rey/         // [Any lower case letter] + rey
re = /[A-z a-z]rey/     // [Any letter any case A-Z] + rey
re = /[0-9]rey/         // [Any digit] + rey
/* 
Braces {} - Quantifiers
   The braces follow the trageted character.  With the amount of occurances inside the brace
*/
re = /Hel{2}o/i      // l{occurance} - means there must be 2 l's.  This matches hello or Hello
re = /Hel{2,4}o/i    // {A range of occurances} Matches hello helllo and hellllo
re = /Hel{2,}o/i     // {occurance,} The targeted letter must happen at least as many times. Mathes hello helllllo and hellllllllllllllo

/* 
Parentheses () - Grouping
   Used to specify order or operations in REGEX
*/

re = /^([0-9]x){3}$/    //  (Inside looked at first then outside is applied)  Matches 3x3x3x only
/* 
Shorthand Character Classes
   \w -  Checkes string for a number, letter or underscore
   \W -  Checkes for what is not included in \w !@#$%^&*
   \d -  Checks for a digit
   \D -  Checks for non-digit
   \s -  Checks for white space 
   \S -  Checks for non-white space 
   \b -  Word boundry: checks for exact characters placed before \
*/
re = /\w/
re = /\w+/
re = /\W/
re = /\d/
re = /\d+/
re = /\D/
re = /\s/
re = /Hell\b/i
re = /3ret\b/

/* 
Assertions
   x(?=y) - Will match only if x is followed by y
   x(?!y) - Will match only if x is not followed by y        
*/

re = /x(?=y)/     // This will match x only if followed by y
re = /x(?!y)/
re = /gr[ae]y/i         // Matches gray and grey


const str =  'gry'
const result = re.exec(str)
console.log(result)

//CUSTOM FUNCTION
const reTest = (re, str) => {
   if(re.test(str)) {
      console.log(`${str} matched ${re.source}`)
   } else {
      console.log(`${str} did not match ${re.source}`)
   }
}
reTest(re, str)