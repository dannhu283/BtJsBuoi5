//nhớ mở public github
// bài tập 2

function electricBill() {
  //dom đến id lấy giá trị của tên và kw
  let kw = +document.getElementById("kw").value;
  let name = document.getElementById("fullName").value;
  //tạo biến price để lấy giá trị cuối cùng gán vào innerHTML
  let price = 0;
  if (kw <= 0) {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  } else if (kw <= 50) {
    price = 500 * kw;
  } else if (kw <= 100) {
    price = 500 * 50 + (kw - 50) * 650;
  } else if (kw <= 200) {
    price = 500 * 50 + 650 * 50 + (kw - 100) * 850;
  } else if (kw <= 350) {
    price = 500 * 50 + 650 * 50 + 850 * 100 + (kw - 200) * 1100;
  } else {
    price = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (kw - 350) * 1300;
  }
  document.getElementById(
    "electricBill"
  ).innerHTML = ` Họ tên : ${name} ; Tiền điện : ${price.toLocaleString()} `;
}
