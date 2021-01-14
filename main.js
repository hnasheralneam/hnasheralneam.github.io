let backButton = document.getElementById("back");

if (window.location.href != "https://meetsquirrel.github.io" || "https://meetsquirrel.github.io#meet") {
   backButton.style.opacity = "1";
}

function next() {
   if (window.location.href == "https://meetsquirrel.github.io/index.html#vegetable-dash") {
      document.location = "#vegetable-dash";
   }
}

function last() {
   if (window.location.href == "https://meetsquirrel.github.io/index.html#vegetable-dash" || "file:///D:/Documents/GitHub/meetsquirrel.github.io/index.html#vegetable-dash") {
      document.location = "#meet";
      backButton.style.opacity = "0";
   }
}
