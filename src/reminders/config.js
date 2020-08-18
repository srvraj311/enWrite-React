var currentDate = new Date() 
var year = currentDate.getFullYear();
var monthNum = currentDate.getMonth() + 1;
var date = currentDate.getDate();

var hour = currentDate.getHours() 

//% 12 || 12;
var minute = currentDate.getMinutes();

if(minute < 10){
  minute = `0${minute}`
}
var monthName = ['January','February','March','April','May','June','July','August','September','October','November','December']
var month = monthName[monthNum - 1]

var instance = '' 
 if(hour > 12){
  instance = 'pm'
} else if (hour < 12){
  instance = 'am'
}




export { currentDate , year , month , date , hour , minute , instance, };





