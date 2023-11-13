document.addEventListener("DOMContentLoaded", function () {
  let calculateButton = document.getElementById("calculateButton");

  calculateButton.addEventListener("click", function () {
    calculateBMI();
  });

  clearButton.addEventListener("click", function () {
    clearInputs();
  });
});

function calculateBMI() {
  let heightInput = document.getElementById("height");
  let weightInput = document.getElementById("weight");
  let errorSpan = document.getElementById("error");

  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);


  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    errorSpan.innerHTML = "Please enter valid height and weight values.";
    return;
  }


  let bmi = weight / ((height / 100) * (height / 100));


  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Your BMI is: " + bmi.toFixed(2);
}

function clearInputs() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("error").innerHTML = "";
}