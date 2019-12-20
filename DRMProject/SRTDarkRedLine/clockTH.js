function refreshTime() {
  var dateString = new Date().toLocaleString("th-GB", {dateStyle: "short",timeStyle: "short",timeZone: "Asia/Bangkok"});
  var formattedString = dateString.replace(", ", " ");
  document.getElementById("txt").innerHTML = formattedString;
}

setInterval(refreshTime, 1000);