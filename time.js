

const get_time_utc = () => {
    /*** return current time in UTC */

    // get current local time
    const local_time = new Date();

    // convert to local time
    //  // getTime() returns the number of milliseconds since January 1, 1970 00:00:00
    //  // getTimezoneOffset() returns the difference, in minutes, between UTC time and local time
    const utc = local_time.getTime() + (local_time.getTimezoneOffset() * 60000);

    return utc;
}

const convert_utc_to_gmt = (utc, gmt_offset) => {
    /*** Converts UTC time to a GMT timezone 
     * param(s) - number: UTC time in milliseconds
     *          - number: gmt_offset [7 for +7:00GMT, -6.5 for -6:30GMT]: (to be depreciated)
    */
    const ONE_HOUR_IN_MS = 3600000;
    const local_time = new Date(utc + (ONE_HOUR_IN_MS * gmt_offset))

    return local_time;
}

const addPrefixZero = (num) => {
    if (num < 10) {
        return "0" + num;
    }
    return num;
}

const to_time_format = (time_obj) => {
    const hour = addPrefixZero(time_obj.getHours());
    const minute = addPrefixZero(time_obj.getMinutes());
    const second = addPrefixZero(time_obj.getSeconds());

    // return time as a string
    // return hour + ":" + minute + "<span class='sec-display'>:" + second + "</span>";
    return hour + ":" + minute;
}

const to_day_month_format = (day, month) => {
    switch(month) {
        case 0:
            return day + ' JAN, ';
            break;
        case 1:
            return day + ' FEB, ';
            break;
        case 2:
            return day + ' MAR, ';
            break;
        case 3:
            return day + ' APR, ';
            break;
        case 4:
            return day + ' MAY, ';
            break;
        case 5:
            return day + ' JUN, ';
            break;
        case 6:
            return day + ' JUL, ';
            break;
        case 7:
            return day + ' AUG, ';
            break;
        case 8:
            return day + ' SEP, ';
            break;
        case 9:
            return day + ' OCT, ';
            break;
        case 10:
            return day + ' NOV, ';
            break;
        case 11:
            return day + ' DEC, ';
            break;
        default:
            return 'UNKNOWN MONTH';
            break;
    }
}

const to_day_format = (index) => {
    switch(index) {
        case 0:
            return 'Sun';
            break;
        case 1:
            return 'Mon';
            break;
        case 2:
            return 'Tue';
            break;
        case 3:
            return 'Wed';
            break;
        case 4:
            return 'Thu';
            break;
        case 5:
            return 'Fri';
            break;
        case 6:
            return 'Sat';
            break;
        default:
            return 'weekday';
            break;
    }
}



var bangkok_time = convert_utc_to_gmt(get_time_utc(), 7);

const bangkok_day = to_day_format(bangkok_time.getDay());
document.querySelector(".weekday-text").innerHTML = bangkok_day;

const bangkok_date = to_day_month_format(bangkok_time.getDate(), bangkok_time.getMonth());
document.querySelector(".day-month-text").innerHTML = bangkok_date;


console.log(bangkok_time);

function writeTime() {
    // get time string
    const time_str = to_time_format(bangkok_time);
    // write in DOM element
    document.querySelector(".digital-time-text").innerHTML = time_str;
    
    // increase time
    const ONE_SEC_IN_MS = 1;
    bangkok_time.setSeconds(bangkok_time.getSeconds() + ONE_SEC_IN_MS)
}

// setInterval('writeTime()', 1000)
setInterval('writeTime()', 10000)