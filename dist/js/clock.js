function count() {

    let today = new Date();

    let day = today.getDate();
    if (day < 10) day = "0" + day;
    let month = today.getMonth() + 1;
    if (month < 10) month = "0" + month;
    let year = today.getFullYear();
    if (year < 10) year = "0" + year;

    let hour = today.getHours();
    if (hour < 10) hour = "0" + hour;
    let min = today.getMinutes();
    if (min < 10) min = "0" + min;
    let sec = today.getSeconds();
    if (sec < 10) sec = "0" + sec;

    document.querySelector(".clock").innerHTML = day + "." + month + "." + year + "|" + hour + ":" + min + ":" + sec;

    setTimeout("count()", 1000);
}