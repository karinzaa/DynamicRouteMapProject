document.onkeyup = function(e) {
  if (e.which == 65) { // A
    document.location = "DRMRN01.html";
  } else if (e.which == 66) { // B
    document.location = "DRMRN02.html";
  } else if (e.which == 67) { // C
    document.location = "DRMRN03.html";
  } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
    alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
  }
};