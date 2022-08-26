function getClock(){
    let now = new Date();
    let month = String(now.getMonth()).padStart(2, '0');
    let dates = String(now.getDate()).padStart(2, '0');
    let days = now.getDay();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let clockTxt = hours + ':' + minutes + ':' + seconds;
    let dateTxt = month + '/' + dates + ' ' + getDays(days);
    document.getElementById("date-time").innerHTML = clockTxt;
    document.getElementById("date-date").innerHTML = dateTxt;
}
function getDays(daysNum){
    switch(daysNum){
        case 0:
            return 'Sun.';
        case 1:
            return 'Mon.';
        case 2:
            return 'Tue.';
        case 3:
            return 'Wed.';
        case 4:
            return 'Thu.';
        case 5:
            return 'Fri.';
        case 6:
            return 'Sat.';
    }
}
