date();

function date() {
    var today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();
    document.getElementById("date").innerHTML = day + "-" + (month + 1) + "-" + year;
    setTimeout(date, 1000);
}
