
    //
    // JavaScript Date getTime()
    // getTime() returns the number of milliseconds since January 1, 1970 00:00:00.

    // JavaScript Date getTimezoneOffset()
    // getTimezoneOffset() returns the difference between UTC time and local time. 
    // getTimezoneOffset() returns the difference in minutes. 
    // For example, if your time zone is GMT+2, -120 will be returned.


// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;


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
    return hour + ":" + minute + "<span class='sec-display'>:" + second + "</span>";
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

var bangkok_day = to_day_format(bangkok_time.getDay());
document.getElementById("date-display").innerHTML = bangkok_day;

console.log(bangkok_time);

function writeTime() {
    // get time string
    const time_str = to_time_format(bangkok_time);
    // write in DOM element
    document.getElementById("clock").innerHTML = time_str;
    
    // increase time
    const ONE_SEC_IN_MS = 1;
    bangkok_time.setSeconds(bangkok_time.getSeconds() + ONE_SEC_IN_MS)
}

setInterval('writeTime()', 1000)
// writeTime()



// function weatherBalloon( cityID="1609348" ) {
//     var key = '63a6fe08cff88ada7182f7073df09f56';
//     fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
//     .then(function(resp) { return resp.json() }) // Convert data to json
//     .then(function(data) {
//       console.log(data);
//     })
//     .catch(function() {
//       // catch any errors
//     });

//     console.log('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
// }

// weather = weatherBalloon();
// console.log("weather:::: " + weather)