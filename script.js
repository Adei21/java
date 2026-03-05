function add(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  const display = document.getElementById("display");
  try {
    if (display.value.includes("/0")) {
      display.value = "Error";
    } else {
      display.value = eval(display.value);
    }
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}