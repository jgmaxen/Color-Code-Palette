// These are the inputs entered by the user for ther Red Green and Blue
const redColorInput = document.getElementById("red-value");
const greenColorInput = document.getElementById("green-value");
const blueColorInput = document.getElementById("blue-value");

// These are the 
const savedColor1El = document.querySelector(".color-1");
const savedColor2El = document.querySelector(".color-2");
const savedColor3El = document.querySelector(".color-3");
const savedColor4El = document.querySelector(".color-4");
const savedColor5El = document.querySelector(".color-5");

const generateColorBtn = document.getElementById("generate-color");
const savePaletteBtn = document.getElementById("save-palette");

const emptyLastBtn = document.getElementById("empty-last");
const emptyAllBtn = document.getElementById("empty-all");

generateColorBtn.addEventListener("click", () => {
    const redValue = redColorInput.value;
    const greenValue = greenColorInput.value;
    const blueValue = blueColorInput.value;
    const rgbValue1 = `rgb(${redValue}, ${greenValue}, ${blueValue})`;   
    savedColor1El.style.backgroundColor = rgbValue1;
    savedColor1El.innerHTML = rgbValue1;
});
generateColorBtn.addEventListener("click", () => {
    const redValue = redColorInput.value;
    const greenValue = greenColorInput.value;
    const blueValue = blueColorInput.value;
    const rgbValue2 = `rgb(${redValue}, ${greenValue}, ${blueValue})`; 
    savedColor2El.style.backgroundColor = rgbValue2;    
    savedColor2El.innerHTML = rgbValue2;
}); 
