//nhớ mở public github
// bài tập 1
function admissionsManager() {
  //tạo biến và dom lấy giá trị khu vực,đối tượng và điểm
  let area = +document.getElementById("selectArea").value;
  let object = +document.getElementById("selectObject").value;
  let mark = +document.getElementById("point").value;
  let point1 = +document.getElementById("point1").value;
  let point2 = +document.getElementById("point2").value;
  let point3 = +document.getElementById("point3").value;
  let total = area + object + point1 + point2 + point3;
  if (point1 <= 0 || point2 <= 0 || point3 <= 0) {
    document.getElementById(
      "result"
    ).innerHTML = ` Bạn đã rớt do có điểm nhỏ hơn hoặc bằng 0`;
  } else if (total < mark) {
    document.getElementById(
      "result"
    ).innerHTML = `Bạn đã rớt.  Tổng điểm: ${total}`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = ` Bạn đã đậu.  Tổng điểm: ${total}`;
  }
}
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
  let fullName = document.getElementById("fullName").value;
  document.getElementById("divBill").style.display = "block";
  document.getElementById(
    "electricBill"
  ).innerHTML = ` Họ tên : ${fullName} ; Tiền điện : ${price.toLocaleString()} `;
}

//bài tập 3
