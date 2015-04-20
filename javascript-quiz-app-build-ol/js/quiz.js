var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correct = [];
var wrong = [];
var question;
var answer;
var response;
var reportMessage = "";


function print(message, elementId) {
  var outputElement = document.getElementById(elementId);
  outputElement.innerHTML = message;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

function listQuestions(list, rightWrong) {
  reportMessage += "<h2>You got these " + list.length + " questions " + rightWrong + "</h2>";
  reportMessage += "<ol>";
  for (var i = 0; i < list.length; i++) {
    reportMessage += "<li>" + list[i] + "</li>";
  }
  reportMessage += "</ol>";
}

listQuestions(correct, "correct");
listQuestions(wrong, "wrong");
print(reportMessage, "output");

