  // JavaScript to load swatches from localStorage
  const swatchesContainer = document.getElementById('swatches-container');
  const noSwatchesMessage = document.getElementById('no-swatches');
  // Retrieve swatches from localStorage
  const savedSwatches = JSON.parse(localStorage.getItem('colorSwatches')) || [];
  if (savedSwatches.length > 0) {
    noSwatchesMessage.style.display = 'none'; // Hide the "no swatches" message
    savedSwatches.forEach(color => {
      const swatchDiv = document.createElement('div');
      swatchDiv.classList.add('swatch');
      const colorDiv = document.createElement('div');
      colorDiv.classList.add('swatch-color');
      colorDiv.style.backgroundColor = color;
      swatchDiv.appendChild(colorDiv);
      swatchesContainer.appendChild(swatchDiv);
    });
  } else {
    noSwatchesMessage.style.display = 'block'; // Show the "no swatches" message
  }