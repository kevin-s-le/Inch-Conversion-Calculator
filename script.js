document.addEventListener('DOMContentLoaded', () => {
    const inchesInput = document.getElementById('inches');
    const convertFeetBtn = document.getElementById('convertFeetBtn');
    const convertYardsBtn = document.getElementById('convertYardsBtn');
    const resultDisplay = document.getElementById('result');

    convertFeetBtn.addEventListener('click', function() {
        const inchesValue = parseFloat(inchesInput.value);

        if (isNaN(inchesValue)) {
            resultDisplay.textContent = 'Please enter a valid number for inches';
            return;
        }

        const feetValue = inchesValue / 12;
        resultDisplay.textContent = `${inchesValue} inches is ${feetValue.toFixed(2)} feet.`;
    });

    convertYardsBtn.addEventListener('click', function() {
        const inchesValue = parseFloat(inchesInput.value);

        if (isNaN(inchesValue)) {
            resultDisplay.textContent = 'Please enter a valid number for inches';
            return;
        }

        const yardsValue = inchesValue / 36;
        resultDisplay.textContent = `${inchesValue} inches is ${yardsValue.toFixed(2)} yards.`;
    });
});
