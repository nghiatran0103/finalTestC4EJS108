function findOppositeNumber(n, inputNumber) {
  if (n % 2 === 0 && n >= 4 && n <= 20) {
    if (inputNumber >= 0 && inputNumber < n) {
      let result = inputNumber + n / 2;
      if (result >= n) {
        result = result - n;
      }
      alert(`Số đối diện của ${inputNumber} là: ${result}`);
    } else {
      alert(`inputNumber >= 0 va <= ${n - 1}`);
    }
  } else {
    alert("n là số nguyên dương chẵn trong khoảng từ 4 đến 20");
  }
}

findOppositeNumber(10,2);
findOppositeNumber(10,6);

