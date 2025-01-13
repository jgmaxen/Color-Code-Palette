// JavaScript to load swatches from localStorage
const swatchesContainer = document.getElementById("swatches-container");
const noSwatchesMessage = document.getElementById("no-swatches");

// Retrieve swatches from localStorage
const savedSwatches = JSON.parse(localStorage.getItem("colorSwatches")) || [];
if (savedSwatches.length > 0) {
  noSwatchesMessage.style.display = "none"; // Hide the "no swatches" message
  for (let i = 0; i < savedSwatches.length; i++) {
    const swatch = savedSwatches[i];
    const swatchSection = document.createElement("section");
    swatchSection.setAttribute("class", "swatchSection")
    swatchesContainer.appendChild(swatchSection);
    const h2El = document.createElement("h2");
    h2El.textContent = swatch[0];
    swatchSection.appendChild(h2El);
    for (let j = 1; j < swatch.length; j++) {
      const color = swatch[j];
      const swatchDiv = document.createElement("div");
      swatchDiv.classList.add("swatch");
      const colorDiv = document.createElement("div");
      colorDiv.classList.add("swatch-color");
      colorDiv.style.backgroundColor = color;
      swatchDiv.appendChild(colorDiv);
      swatchSection.appendChild(swatchDiv);
    }
  }
  // savedSwatches.forEach((color) => {
  //   const swatchDiv = document.createElement("div");
  //   swatchDiv.classList.add("swatch");
  //   const colorDiv = document.createElement("div");
  //   colorDiv.classList.add("swatch-color");
  //   colorDiv.style.backgroundColor = color;
  //   swatchDiv.appendChild(colorDiv);
  //   swatchesContainer.appendChild(swatchDiv);
  // });
} else {
  noSwatchesMessage.style.display = "block"; // Show the "no swatches" message
}
