
$(document).ready
{
    updateTime();
    setInterval(updateTime, 1000);
}

function updateTime()
{
    //console.log("Updating time");

    var dtyt = new Date();
    var timeyt = dtyt.toLocaleTimeString();
    $("#yourtime").text(timeyt);

    $("#greglestime").text(calcTime('+1'));
   /* var dt = new timezoneJS.Date(dtyt.getFullYear(), dtyt.getMonth(), dtyt.getDay(), dtyt.getHours(), dtyt.getMinutes(), dtyt.getSeconds(),'America/Los_Angeles');*/
/*
    console.log(dt.getTimezoneOffset())
    var timegt = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $("#greglestime").text(timegt);*/


}


function calcTime(offset) {
    
        // create Date object for current location
        d = new Date();
        
        // convert to msec
        // add local time zone offset 
        // get UTC time in msec
        utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        
        // create new Date object for different city
        // using supplied offset
        nd = new Date(utc + (3600000*offset));
        
        // return time as a string
        return nd.toLocaleTimeString();
    
    }
