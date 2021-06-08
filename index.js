// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

/* 
Notes on closures:

let [answer, theBase] = (
  function(thingToAdd) {
    let base = 3
    return [
      function() { return base + thingToAdd },
      function() { return base }
    ] // [3 + 2, 3]
  }
)(2) // answer = 5, theBase = 3
answer() //=> 5
console.log(`The base was ${theBase()}`)
// OUTPUT: The base was 3 

*/

const wrapAdjective = function(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
}

function actionApplyer(integer, arr) {
    return arr.reduce((result, func) => {
        return func(result);
    }, integer)
}