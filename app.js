function showtime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

  hours = (10>hours) ? "0"+hours:hours;
  hours = (12<hours) ? hours-12: hours;
  minutes = (10>minutes) ? "0"+minutes:minutes;
  seconds = (10>seconds) ? "0"+seconds:seconds;

    let time = hours +":"+ minutes +":"+ seconds;

    document.querySelector("#mytime").innerHTML = time;   

    setTimeout(showtime,1000);
}
showtime();