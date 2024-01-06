function refreshTime() {
  var dateString = new Date().toLocaleString("en-GB", {dateStyle: "short",timeStyle: "short",timeZone: "Asia/Bangkok"});
  var formattedString = dateString.replace(", ", " ");
  document.getElementById("txt").innerHTML = formattedString;
}

setInterval(refreshTime, 1000);