const cal = (height, weight) => {
  this.height = height = document.getElementById("height").value;
  this.weight = weight = document.getElementById("weight").value;
  var feet = this.height * this.height;
  var results = this.weight / feet;
  results = results.toFixed(2);
  document.getElementById("result").innerHTML = results;
  // BMI CHART
  if (results < 18.5) {
    document.getElementById("demo1").innerHTML = "underweight: kindly eat well";
  } else if ((results > 18.5) & (results < 24.9)) {
    document.getElementById("demo1").innerHTML =
      "Normal or Healthy weight: kindly eat well";
  } else {
    document.getElementById("demo1").innerHTML = " Obese: kindly see a doctor";
  }
};
