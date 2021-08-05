const text = document.getElementById("your-name");
answer1 = document.getElementById("answer1");
answer2 = document.getElementById("answer2");
answer3 = document.getElementById("answer3");
answer4 = document.getElementById("answer4");
answer5 = document.getElementById("answer5");
answer6 = document.getElementById("answer6");

text.addEventListener("keyup", () => {
  const value = text.value;
  answer1.textContent = getNumberOfChars(value);
  answer2.textContent = getFirstChar(value);
  answer3.textContent = getLastChar(value);
  answer4.textContent = getLowerCase(value);
  answer5.textContent = getUpperCase(value);
  answer6.textContent = getCapitalized(value);
});

function getNumberOfChars(name) {
  // number of characters in: name
  return name.length;
}

function getFirstChar(name) {
  // first character of: name
  return name.substr(0, 1);
}

function getLastChar(name) {
  /// last character of: name
  return name.substr(name.length - 1);
}

function getLowerCase(name) {
  // name all in lower case
  return name.toLowerCase();
}

function getUpperCase(name) {
  // name all in upper case
  return name.toUpperCase();
}

function getCapitalized(name) {
  // capitalized version of name
  return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
}
