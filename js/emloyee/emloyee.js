function Emloyee(
  _user,
  _name,
  _email,
  _password,
  _dateStartWork,
  _position,
  _timeWorkPerMonth,
  _basicSalary
) {
  this.user = _user;
  this.name = _name;
  this.email = _email;
  this.password = _password;
  this.dateStartWork = _dateStartWork;
  this.position = parseInt(_position);
  this.positionName="";
  this.timeWorkPerMonth = parseFloat(_timeWorkPerMonth);
  this.basicSalary = parseInt(_basicSalary);
  this.totalSalary = this.basicSalary * this.position;
  this.typeEmloyee = "null";

  this.classificationEmloyee = function () {
    if (this.timeWorkPerMonth < 160) {
      this.typeEmloyee = "Trung bình";
    } else if (this.timeWorkPerMonth < 176) {
      this.typeEmloyee = "Khá";
    } else if (this.timeWorkPerMonth < 192) {
      this.typeEmloyee = "Giỏi";
    } else {
      this.typeEmloyee = "Xuất sắc";
    }
    return this.typeEmloyee;
  };
  this.getPositionName = function () {
    switch (this.position) {
      case 3: {
        this.positionName = "Sếp";
        break;
      }

      case 2: {
        this.positionName = "Trưởng phòng";
        break;
      }

      case 1: {
        this.positionName = "Nhân viên";
        break;
      }

      default: {
        this.positionName = "Null";
        break;
      }
    }
  };
  
}
