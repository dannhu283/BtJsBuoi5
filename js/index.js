//nhớ mở public github
// bài tập 2
//tạo hàm để gắn sự kiện onclick
function electricBill() {
  //dom đến id lấy giá trị của kw
  let kw = +document.getElementById("kw").value;
  if (kw <= 0) {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  } else {
    let price = pay(kw, 500, 650, 850, 11, 1300);
    display(price);
  }
}
//tạo hàm riêng để tính tổng tiền cần trả để dễ tái sử dụng nếu thay đổi đơn giá
function pay(kw, price1, price2, price3, price4, price5) {
  let price = 0;
  if (kw <= 50) {
    price = price1 * kw;
  } else if (kw <= 100) {
    price = price1 * 50 + (kw - 50) * price2;
  } else if (kw <= 200) {
    price = price1 * 50 + price2 * 50 + (kw - 100) * price3;
  } else if (kw <= 350) {
    price = price1 * 50 + price2 * 50 + price3 * 100 + (kw - 200) * price4;
  } else {
    price =
      price1 * 50 +
      price2 * 50 +
      price3 * 100 +
      price4 * 150 +
      (kw - 350) * price5;
  }
  return price;
}
function display(price) {
  //dom đến id lấy giá trị của tên đển gắn vào innerHTML
  let name = document.getElementById("fullName").value;
  document.getElementById("divBill").style.display = "block";
  document.getElementById(
    "electricBill"
  ).innerHTML = ` Họ tên : ${name} ; Tiền điện : ${price.toLocaleString()} `;
}
