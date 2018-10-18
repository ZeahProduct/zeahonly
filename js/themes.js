function swapStyleSheet(sheet) {
    document.getElementById("mainstyle").setAttribute("href", sheet);
    localStorage.theme = sheet;
}

if (localStorage.theme) {
  swapStyleSheet(localStorage.theme);
}

window.onload = function() {
  var style1 = document.getElementById("stylesheet1");
  var style2 = document.getElementById("stylesheet2");
  if (style1 && style2) {
    style1.onclick = function() {
      swapStyleSheet("css/main.css");
    };
    style2.onclick = function() {
      swapStyleSheet("css/dark.css");
    };
  }
};
