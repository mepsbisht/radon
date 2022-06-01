let objDate = new Date();
let getBatchInfo=function getBatchInfo(){
    console.log("Radon W3D1 the topic for today is  NODE JS")
}
let printDate = function printDate() {
  console.log(objDate.getDate());
};

let printMonth = function printMonth() {
  console.log(objDate.getMonth()+1);
};

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;
