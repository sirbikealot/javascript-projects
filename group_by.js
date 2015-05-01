// I wrote a function groupBy that abstracts the grouping operation. 
// It accepts as arguments an array and a function that computes the group
// for an element in the array, and returns an object that maps group names 
// to arrays of group members.

function groupBy(array, funkShun) {
  var groups = {}
  array.forEach(function(element) {
    var resultOfFunkShun = funkShun(element);
    if (!(resultOfFunkShun in groups)) {
      groups[resultOfFunkShun] = [];
    };
    groups[resultOfFunkShun].push(element)
  });
  return groups;
};

// Example of how it works
var words = ["able", "abraham", "apple", "cabin", "dog", "aiint", "dam", "babel", "cable"];
// Simple function that returns the initial letter of a word
function firstLetter(string) {
  return string[0];
};

// Use new groupBy function to group words according to their initial letter
console.log(groupBy(words, firstLetter));

// {
//   a:  ["able", "abraham", "apple", "aiint"]
//   c:  ["cabin", "cable"]
//   d:  ["dog", "dam"]
//   b:  ["babel"]
// }