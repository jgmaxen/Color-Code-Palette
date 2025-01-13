// These are the inputs entered by the user for ther Red Green and Blue
const redColorValue = document.querySelector("#red-value");
const greenColorValue = document.querySelector("#green-value");
const blueColorValue = document.querySelector("#blue-value");

// This is the Generate Color Button
const generateColorBtn = document.querySelector("#generate-color");
// This is the Empty Last Color Button
const emptyLastBtn = document.querySelector("#empty-last");
// This is the Save Palette Button
const savePaletteBtn = document.querySelector("#save-palette");
// This is the Empty All Colors Button
const emptyAllBtn = document.querySelector("#empty-all");

// These are the boxes where the saved colors will go
const savedColorElements = [
  document.querySelector(".color-1"),
  document.querySelector(".color-2"),
  document.querySelector(".color-3"),
  document.querySelector(".color-4"),
  document.querySelector(".color-5"),
];
// Counter to track colors
let currentColorIndex = 0;

// Function that generates and applies the RGB Color
function generateAndSaveColor() {
  // Get values from input fields
  const redValue = redColorValue.value;
  const greenValue = greenColorValue.value;
  const blueValue = blueColorValue.value;
  // Make sure value is a number AND in the range of 0-255
  if (!isNaN(redValue) && redValue >= 0 && redValue <= 255 &&
    !isNaN(greenValue) && greenValue >= 0 && greenValue <= 255 &&
    !isNaN(blueValue) && blueValue >= 0 &&blueValue <= 255) {
    // Create RGB Value
    const rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    // Check to see if there is an available box to update
    if (currentColorIndex < savedColorElements.length) {
      // Updates box to have generated background color
      savedColorElements[currentColorIndex].style.backgroundColor = rgbValue;
      // Update counter
      currentColorIndex++;
    } else {
      alert("All Saved Colors are filled.");
    }
    // Clear the input fields
    redColorValue.value = "";
    greenColorValue.value = "";
    blueColorValue.value = "";
  } else {
    // Error message if inputs are invalid
    alert("Please enter only digits between 0 and 255");
  }
}
// Event listener for Generate Color Button
generateColorBtn.addEventListener("click", generateAndSaveColor);
