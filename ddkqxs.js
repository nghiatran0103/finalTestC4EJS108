const res = Math.floor(Math.random() * 100) + 1;

let input = document.getElementById("input");
let button = document.getElementById("button");

let preCount = 3;

function check() {
  let pred = Number(input.value);

  if (input.value > 100 || input.value < 1) {
    alert("Bạn chỉ được dự đoán con số từ 1 - 100");
    input.value = "";
  } else {
    if (pred === res) {
      alert("Chúc mừng bạn đã rất may mắn!");
    } else {
      preCount--;
      if (preCount) {
        alert(`Bạn còn ${preCount} lượt đoán`);
        input.value = "";
      }
      if (!preCount) {
        alert(`Chúc bạn may mắn lẫn sau! \n Kết quả đúng là: ${res}`);
        location.reload();
      }
    }
  }
}

Button.addEventListener("click", check);
