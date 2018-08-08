function count() {

    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    document.querySelector(".clock").innerHTML = day + "." + month + "." + year + "|" + hour + ":" + min + ":" + sec;

    setTimeout("count()", 1000);
}