var listEL = new listEmloyee();
var validation = new Validation();

function getEle(id) {
  return document.getElementById(id);
}
getLocalStorage();
getEle("btnThemNV").onclick = function () {
  var _user = getEle("tknv").value;
  var _name = getEle("name").value;
  var _email = getEle("email").value;
  var _password = getEle("password").value;
  var _dateStartWork = getEle("datepicker").value;
  var _basicSalary = getEle("luongCB").value;
  var _position = getEle("chucvu").value;
  var _timeWorkPerMonth = getEle("gioLam").value;

  //Tạo đối tượng Nhân viên có lớp là Nhân Viên
  var emloyee = new Emloyee(
    _user,
    _name,
    _email,
    _password,
    _dateStartWork,
    _position,
    _timeWorkPerMonth,
    _basicSalary
  );

  //validation Nhân viên nhập vào
  var isValid = validationInput(
    _user,
    _name,
    _email,
    _password,
    _dateStartWork,
    _position,
    _timeWorkPerMonth,
    _basicSalary
  );
  if (isValid) {
    emloyee.classificationEmloyee();
    emloyee.getPositionName();
    listEL.addEmloyee(emloyee);
    createTable(listEL.list);
    setLocalStorage();
  }
};
getEle("btnTimNV").onclick = function () {
  var arr = [];
  var text = getEle("searchName").value;
  for (var i = 0; i < listEL.list.length; i++) {
    if (listEL.list[i].typeEmloyee.toLowerCase().indexOf(text.toLowerCase())!==-1) {
      arr.push(listEL.list[i]);
    }
  }
  createTable(arr);
};
getEle("btnCapNhat").onclick = function () { 
  var _user = getEle("tknv").value;
  var _name = getEle("name").value;
  var _email = getEle("email").value;
  var _password = getEle("password").value;
  var _dateStartWork = getEle("datepicker").value;
  var _basicSalary = getEle("luongCB").value;
  var _position = getEle("chucvu").value;
  var _timeWorkPerMonth = getEle("gioLam").value;

  //Tạo đối tượng Nhân viên có lớp là Nhân Viên
  var emloyee = new Emloyee(
    _user,
    _name,
    _email,
    _password,
    _dateStartWork,
    _position,
    _timeWorkPerMonth,
    _basicSalary
  );

  //validation Nhân viên nhập vào
  var isValid = validationUpdate(
    _user,
    _name,
    _email,
    _password,
    _dateStartWork,
    _position,
    _timeWorkPerMonth,
    _basicSalary
  );
  if (isValid) {
    emloyee.classificationEmloyee();
    emloyee.getPositionName();
    listEL.updateEmloyee(emloyee);
    createTable(listEL.list);
    setLocalStorage();
    alert("Cập nhật nhân viên thành công");
  }
};
getEle("btnDong").onclick = function () {
  getEle("myModal").classList.remove("show");
  getEle("myModal").style="display: none;"
  document.body.classList="";
  document.body.style="";
  clearInfo();
};
function clearInfo(){
  getEle("tknv").value = "";
  getEle("tknv").disabled = false;

  getEle("name").value = "";
  getEle("email").value = "";
  getEle("password").value = "";
  getEle("datepicker").value = "";
  getEle("luongCB").value = "";
  getEle("chucvu").value="";
  getEle("gioLam").value="";
}
function getInfo(_user) {
  var emloyee = listEL.getInfo(_user);
  getEle("tknv").value = emloyee.user;
  getEle("tknv").disabled = true;

  getEle("name").value = emloyee.name;
  getEle("email").value = emloyee.email;
  getEle("password").value = emloyee.password;
  getEle("datepicker").value = emloyee.dateStartWork;
  getEle("luongCB").value = emloyee.basicSalary;
  getEle("chucvu").value=emloyee.position;
  getEle("gioLam").value=emloyee.timeWorkPerMonth; 
 
  getEle("myModal").classList.add("show");
  getEle("myModal").style="display: block; padding-right: 16px;"
  document.body.classList.add("modal-open");
  document.body.style="padding-right: 16px;";
}
function validationInput(
  _user,
  _name,
  _email,
  _password,
  _dateStartWork,
  _position,
  _timeWorkPerMonth,
  _basicSalary
) {
  var isValid = true;
  //check user
  isValid &=
    validation.kiemTraRong(_user, "tbTKNV", "Vui lòng không để trống") &&
    validation.kiemTraDoDaiKyTu(
      _user,
      "tbTKNV",
      "Vui lòng nhập từ 4-6 ký tự",
      4,
      6
    ) &&
    validation.kiemTraMaNVTrung(
      _user,
      "tbTKNV",
      "Mã nhân viên đã tồn tại",
      listEL.list
    );

  //check name
  isValid &=
    validation.kiemTraRong(_name, "tbTen", "Vui lòng không để trống") &&
    validation.kiemTraKyTuChuoi(_name, "tbTen", "Vui lòng nhập chữ");
  //check email
  isValid &=
    validation.kiemTraRong(_email, "tbEmail", "Vui lòng không để trống") &&
    validation.kiemTraEmail(
      _email,
      "tbEmail",
      "Vui lòng nhập đúng định dạng email"
    );
  //check password
  isValid &=
    validation.kiemTraRong(_password, "tbMatKhau", "Vui lòng không để trống") &&
    validation.kiemTraPass(
      _password,
      "tbMatKhau",
      "Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    ) &&
    validation.kiemTraDoDaiKyTu(
      _password,
      "tbMatKhau",
      "Vui lòng nhập từ 6-10 ký tự",
      6,
      10
    );
  //check date
  isValid &=
    validation.kiemTraRong(
      _dateStartWork,
      "tbNgay",
      "Vui lòng không để trống"
    ) &&
    validation.kiemTraNgay(
      _dateStartWork,
      "tbNgay",
      "Vui lòng nhập đúng định dạng dd/mm/yyyy"
    );

  //check time
  isValid &=
    validation.kiemTraRong(
      _timeWorkPerMonth,
      "tbGiolam",
      "Vui lòng không để trống"
    ) &&
    validation.kiemTraSoGio(
      _timeWorkPerMonth,
      "tbGiolam",
      "Vui lòng nhập từ 80-200 giờ"
    );
  //check salary
  isValid &=
    validation.kiemTraRong(
      _basicSalary,
      "tbLuongCB",
      "Vui lòng không để trống"
    ) &&
    validation.kiemTraLuong(
      _basicSalary,
      "tbLuongCB",
      "Vui lòng nhập lương từ 1tr-20tr"
    );
  //check position
  isValid &= validation.kiemTraChucVu(
    _position,
    "tbChucVu",
    "Chức vụ không phù hợp"
  );
  return isValid;
}
function validationUpdate(
  _user,
  _name,
  _email,
  _password,
  _dateStartWork,
  _position,
  _timeWorkPerMonth,
  _basicSalary
) {
  var isValid = true;
  //check user
  isValid &=
    validation.kiemTraRong(_user, "tbTKNV", "Vui lòng không để trống") &&
    validation.kiemTraDoDaiKyTu(
      _user,
      "tbTKNV",
      "Vui lòng nhập từ 4-6 ký tự",
      4,
      6
    );

  //check name
  isValid &=
    validation.kiemTraRong(_name, "tbTen", "Vui lòng không để trống") &&
    validation.kiemTraKyTuChuoi(_name, "tbTen", "Vui lòng nhập chữ");
  //check email
  isValid &=
    validation.kiemTraRong(_email, "tbEmail", "Vui lòng không để trống") &&
    validation.kiemTraEmail(
      _email,
      "tbEmail",
      "Vui lòng nhập đúng định dạng email"
    );
  //check password
  isValid &=
    validation.kiemTraRong(_password, "tbMatKhau", "Vui lòng không để trống") &&
    validation.kiemTraPass(
      _password,
      "tbMatKhau",
      "Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    ) &&
    validation.kiemTraDoDaiKyTu(
      _password,
      "tbMatKhau",
      "Vui lòng nhập từ 6-10 ký tự",
      6,
      10
    );
  //check date
  isValid &=
    validation.kiemTraRong(
      _dateStartWork,
      "tbNgay",
      "Vui lòng không để trống"
    ) &&
    validation.kiemTraNgay(
      _dateStartWork,
      "tbNgay",
      "Vui lòng nhập đúng định dạng dd/mm/yyyy"
    );

  //check time
  isValid &=
    validation.kiemTraRong(
      _timeWorkPerMonth,
      "tbGiolam",
      "Vui lòng không để trống"
    ) &&
    validation.kiemTraSoGio(
      _timeWorkPerMonth,
      "tbGiolam",
      "Vui lòng nhập từ 80-200 giờ"
    );
  //check salary
  isValid &=
    validation.kiemTraRong(
      _basicSalary,
      "tbLuongCB",
      "Vui lòng không để trống"
    ) &&
    validation.kiemTraLuong(
      _basicSalary,
      "tbLuongCB",
      "Vui lòng nhập lương từ 1tr-20tr"
    );
  //check position
  isValid &= validation.kiemTraChucVu(
    _position,
    "tbChucVu",
    "Chức vụ không phù hợp"
  );
  return isValid;
}
function createTable(arr) {
  //reset element
  getEle("tableDanhSach").innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    //Tạo dòng
    var tagTR = document.createElement("tr");
    // Tạo cột
    var tagTD_User = document.createElement("td");
    var tagTD_Name = document.createElement("td");
    var tagTD_Email = document.createElement("td");
    var tagTD_DateSW = document.createElement("td");
    var tagTD_Position = document.createElement("td");
    var tagTD_TotalSalary = document.createElement("td");
    var tagTD_Type = document.createElement("td");
    var tagTD_Delete = document.createElement("td");
    var tagTD_Update = document.createElement("td");

    //Tạo nội dung
    tagTD_User.innerHTML = arr[i].user;
    tagTD_Name.innerHTML = arr[i].name;
    tagTD_Email.innerHTML = arr[i].email;
    tagTD_DateSW.innerHTML = arr[i].dateStartWork;
    tagTD_Position.innerHTML = arr[i].positionName;
    tagTD_TotalSalary.innerHTML = arr[i].totalSalary.toLocaleString();
    tagTD_Type.innerHTML = arr[i].typeEmloyee;
    tagTD_Delete.innerHTML =
      '<button class="btn btn-danger" onclick="deleteEmloyee(\'' +
      arr[i].user +
      "')\">Xoá</button>";
    tagTD_Update.innerHTML =
      '<button class="btn btn-info" onclick="getInfo(\'' +
      arr[i].user +
      "')\">Sửa</button>";
    //Thêm cột vào dòng
    tagTR.appendChild(tagTD_User);
    tagTR.appendChild(tagTD_Name);
    tagTR.appendChild(tagTD_Email);
    tagTR.appendChild(tagTD_DateSW);
    tagTR.appendChild(tagTD_Position);
    tagTR.appendChild(tagTD_TotalSalary);
    tagTR.appendChild(tagTD_Type);
    tagTR.appendChild(tagTD_Delete);
    tagTR.appendChild(tagTD_Update);
    //Thêm dòng vào tbody
    getEle("tableDanhSach").appendChild(tagTR);
  }
}
function setLocalStorage() {
  var arrString = JSON.stringify(listEL.list);
  localStorage.setItem("ListEmloyee", arrString);
}
function getLocalStorage() {
  if (localStorage.getItem("ListEmloyee")) {
    listEL.list = JSON.parse(localStorage.getItem("ListEmloyee"));
    createTable(listEL.list);
  }
}
function deleteEmloyee(user) {
  listEL._deleteEmloyee(user);
  createTable(listEL.list);
  setLocalStorage();
}
