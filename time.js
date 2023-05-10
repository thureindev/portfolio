// This JS get's user's local time, convert it to utc and then convert to Bangkok time. 

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
            return day + ' Jan';
            break;
        case 1:
            return day + ' Feb';
            break;
        case 2:
            return day + ' Mar';
            break;
        case 3:
            return day + ' Apr';
            break;
        case 4:
            return day + ' May';
            break;
        case 5:
            return day + ' Jun';
            break;
        case 6:
            return day + ' Jul';
            break;
        case 7:
            return day + ' Aug';
            break;
        case 8:
            return day + ' Sep';
            break;
        case 9:
            return day + ' Oct';
            break;
        case 10:
            return day + ' Nov';
            break;
        case 11:
            return day + ' Dec';
            break;
        default:
            return 'ERROR';
            break;
    }
}

const to_day_format = (index) => {
    switch(index) {
        case 0:
            return 'SUN';
            break;
        case 1:
            return 'MON';
            break;
        case 2:
            return 'TUE';
            break;
        case 3:
            return 'WED';
            break;
        case 4:
            return 'THU';
            break;
        case 5:
            return 'FRI';
            break;
        case 6:
            return 'SAT';
            break;
        default:
            return 'ERROR';
            break;
    }
}

// Assign to DOM elements
// --------------------------------------
var bangkok_time = convert_utc_to_gmt(get_time_utc(), 7);

const bangkok_weekday = to_day_format(bangkok_time.getDay());
document.querySelector(".weekday-text").innerHTML = bangkok_weekday;

const bangkok_day_month = to_day_month_format(bangkok_time.getDate(), bangkok_time.getMonth());
document.querySelector(".day-month-text").innerHTML = bangkok_day_month;

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

writeTime();

setInterval('writeTime()', 10000)