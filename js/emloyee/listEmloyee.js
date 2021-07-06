function listEmloyee() {
  this.list = [];
  this.addEmloyee = function (employee) {
    this.list.push(employee);
  };
  this._findIndex = function (_user) {
    var index = -1;
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].user == _user) {
        index=i;
        break;
      }
    }
    return index;
  };
  this._deleteEmloyee = function (_user) {    
    index = this._findIndex(_user);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  };
  this.updateEmloyee = function (employee) {
    var index=this._findIndex(employee.user);
    this.list.splice(index, 1,employee);

  };
  this.getInfo=function(_user){
    index = this._findIndex(_user);
    if (index !== -1) {
      return this.list[index];
    }
  }
}
