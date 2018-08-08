function count() {

    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let hour = today.getHours();
    if (hour < 10) hour = "0" + hour;
    let min = today.getMinutes();
    if (min < 10) min = "0" + min;
    let sec = today.getSeconds();
    if (sec < 10) sec = "0" + sec;

    document.querySelector(".clock").innerHTML = day + "." + month + "." + year + "|" + hour + ":" + min + ":" + sec;

    setTimeout("count()", 1000);
}