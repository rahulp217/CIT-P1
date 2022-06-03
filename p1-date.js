/*
    CIT 281 Project 1
    Name: Rahul Paudel
*/

 function CurrentDay(dayz){
let weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
    let day = dayz.getDay();
    return weekdays[day];
}

let date = new Date();
let weekDay = CurrentDay(date);
console.log(weekDay);