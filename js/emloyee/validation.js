function Validation() {
    this.kiemTraRong = function (input, divID, mess) {
      if (input.trim() !== "") {
        getEle(divID).innerHTML = "";
        getEle(divID).className = "";
        return true;
      } else {
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
      }
    };
    this.kiemTraDoDaiKyTu = function (input, divID, mess, min, max) {
      if (input.length >= min && input.length <= max) {
        getEle(divID).innerHTML = "";
        getEle(divID).className = "";
        return true;
      } else {
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
      }
    };
    this.kiemTraKyTuChuoi = function (input, divID, mess) {
      var letter =
        "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
      if (input.match(letter)) {
        getEle(divID).innerHTML = "";
        getEle(divID).className = "";
        return true;
      } else {
        getEle(divID).innerHTML = mess;
        getEle(divID).className = "alert alert-danger";
        return false;
      }
    };
    this.kiemTraEmail=function (input, divID, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (input.match(letter)) {
          getEle(divID).innerHTML = "";
          getEle(divID).className = "";
          return true;
        } else {
          getEle(divID).innerHTML = mess;
          getEle(divID).className = "alert alert-danger";
          return false;
        }
      };
      this.kiemTraPass=function (input, divID, mess) {
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (input.match(letter)) {
          getEle(divID).innerHTML = "";
          getEle(divID).className = "";
          return true;
        } else {
          getEle(divID).innerHTML = mess;
          getEle(divID).className = "alert alert-danger";
          return false;
        }
      };
      this.kiemTraNgay=function (input, divID, mess) {
        var letter = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        if (input.match(letter)) {
          getEle(divID).innerHTML = "";
          getEle(divID).className = "";
          return true;
        } else {
          getEle(divID).innerHTML = mess;
          getEle(divID).className = "alert alert-danger";
          return false;
        }
      };
      this.kiemTraLuong=function (input, divID, mess) {
        if (parseInt(input)>=1000000&&parseInt(input)<=20000000) {
          getEle(divID).innerHTML = "";
          getEle(divID).className = "";
          return true;
        } else {
          getEle(divID).innerHTML = mess;
          getEle(divID).className = "alert alert-danger";
          return false;
        }
      };
      this.kiemTraChucVu=function (input, divID, mess) {
        if (parseInt(input)>=1&&parseInt(input)<=3) {
          getEle(divID).innerHTML = "";
          getEle(divID).className = "";
          return true;
        } else {
          getEle(divID).innerHTML = mess;
          getEle(divID).className = "alert alert-danger";
          return false;
        }
      };
      this.kiemTraSoGio=function (input, divID, mess) {
        if (parseInt(input)>=80&&parseInt(input)<=200) {
          getEle(divID).innerHTML = "";
          getEle(divID).className = "";
          return true;
        } else {
          getEle(divID).innerHTML = mess;
          getEle(divID).className = "alert alert-danger";
          return false;
        }
      };
      this.kiemTraMaNVTrung=function(input, divID, mess, arr)
      {
        var status=true;
        for(var i =0; i<arr.length;i++)
        {
          if (arr[i].user===input){
            status=false;
            break;
          }
        }
        if (status===true) {
          getEle(divID).innerHTML = "";
          getEle(divID).className = "";
          return true;
        } else {
          getEle(divID).innerHTML = mess;
          getEle(divID).className = "alert alert-danger";
          return false;
        }
      }
}