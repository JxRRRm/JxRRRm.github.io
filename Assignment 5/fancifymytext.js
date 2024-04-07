function showAlert() {
  alert("Hello, world!");
}

function makeTextBigger() {
  document.getElementById("textArea").style.fontSize = "24pt";
}

function applyFancyStyles() {
  var textArea = document.getElementById("textArea");
  // selecting the "FancyShmancy" radio button, should make the text bold, underline, and blue.
  if (document.getElementById("fancy").checked) 
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
}

function removeFancyStyles() {
      textArea.style.fontWeight = "normal"; // Reset font weight to normal
      textArea.style.color = "black"; // Reset color to default
      textArea.style.textDecoration = "none"; // Reset text decoration to default
}

function transformText() {
  var textArea = document.getElementById("textArea");
  var text = textArea.value.toUpperCase(); // Uppercase the entire text
  var parts = text.split(".");  // Separate sentences
  text = parts.join("-Moo."); // Add a suffix of "-Moo" to the last word of each sentence
  // Update the text area with the modified text
  textArea.value = text;
}

function clear() {
  // Clear radio buttons
  var radios = document.getElementsByName('fanciness');
  radios.forEach(radio => radio.checked = false);
  // Clear the text area
  document.getElementById("textArea").value = ""; 
}