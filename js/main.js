// 1. Write a function that takes in two numbers 
// 2. return false if both of the are odd or even or if they are both zero
// 3. return true if one of the numbers is odd and the other is even 

function loveFunc(flower1, flower2) {
  if(flower1 === 0 && flower2 === 0) {
    return false
  } else if(flower1%2 === 0 && flower2%2 ===0 || flower1%2 !== 0 && flower2%2 !== 0) {
    return false
  } else {return true}

}