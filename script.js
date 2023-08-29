function clearDisplay() {  
  document.getElementById("display").innerHTML = "";
}

function resultCalc() {  
  try {
    document.getElementById("display").innerHTML = eval(document.getElementById("display").innerText); 
  } catch (error) {
    alert('Equação inválida.');
    clearDisplay();
  }
}

function displayValue(value) {
  document.getElementById("display").innerHTML += value;
}