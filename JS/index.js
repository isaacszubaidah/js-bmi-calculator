document.addEventListener("DOMContentLoaded", function () {
  var calculateButton = document.getElementById("calculateButton");

  calculateButton.addEventListener("click", function () {
      calculateBMI();
  });
});

function calculateBMI() {
  // Get the height and weight input values
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  // Check if the inputs are valid numbers
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight values.");
      return;
  }

  // Calculate BMI
  var bmi = weight / ((height / 100) * (height / 100));

  // Display the result
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Your BMI is: " + bmi.toFixed(2);
}
