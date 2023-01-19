document.onkeyup = function(e) {
  if (e.which == 49) { // 1 For alert กลางบางซื่อ Bang Sue Central
    document.location = "DRMRNStation01.html";
  } else if (e.which == 81 ) { // Q For next station กลางบางซื่อ Chatuchak
    document.location = "DRMRN01.html";
  } else if (e.which == 50) { // 2 For alert
    document.location = "DRMRNStation02.html";
  } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
    alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
  }
};