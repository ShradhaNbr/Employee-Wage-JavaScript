const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH = 160;
function getWorkingHours(empCheck) {
switch(empCheck) {
    case IS_PART_TIME :
        return PART_TIME_HOURS;
    case IS_FULL_TIME :
            return FULL_TIME_HOURS = 8;
    default :
        return 0;
}
}
function calcDailyWage(empHours) {
    return empHours*WAGE_PER_HOUR;
}
let totalEmpHours = 0;
let  totalWorkingDays = 0;
let empDailyWageArray = new Array();
while(totalEmpHours <=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHours += getWorkingHours(empCheck);
    empDailyWageArray.push(calcDailyWage(totalEmpHours)); // pushing total employee wage into array
}
let empWage = calcDailyWage(totalEmpHours);
console.log("Total Days "+ totalWorkingDays + " Employee Hours : " + totalEmpHours + " Employee wage : " + empWage);
console.log(empDailyWageArray);

