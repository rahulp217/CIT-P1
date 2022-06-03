/*
    CIT 281 Project 1
    Name: Rahul Paudel
*/

function theString(length){

    let result  = '';
    let alph  = 'abcdefghijklmnopqrstuvwxyz';
  
    for ( let i = 0; i < length; i++ ) {
       result += alph.charAt(Math.floor(Math.random() * alph.length));
    }
    return result;
  }
  
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    min = 5
    max = 26
    return Math.floor(Math.random() * (max - min) + min);
}
  
  console.log(theString(getRandomInteger()))
