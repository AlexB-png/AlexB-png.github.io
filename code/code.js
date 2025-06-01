function getTime() {
    var date = new Date()
    var time = date.getHours()
    if (time >= 16) {
        document.getElementById('time').innerHTML = "Good Evening!"
        }
    else if (time >= 12) {
        document.getElementById('time').innerHTML = "Good Afternoon!"
        }
    else {
        document.getElementById('time').innerHTML = "Good Morning!"
        }
}

getTime()
setInterval(getTime, 1000000);
