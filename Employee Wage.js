const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
function getWorkingHous(empCheck) {
switch(empCheck) {
    case IS_PART_TIME :
        return PART_TIME_HOURS;
    case IS_FULL_TIME :
            return FULL_TIME_HOURS = 8;
    default :
        return 0;
}
}
let empCheck = Math.floor(Math.random() * 10) % 3;
let empHours = getWorkingHous(empCheck);
let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee Hours : " + empHours + " Employee wage : " + empWage);

