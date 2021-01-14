let backButton = document.getElementById("back");

if (window.location.href != "https://meetsquirrel.github.io" || "https://meetsquirrel.github.io#meet") {
   backButton.style.opacity = "1";
}

function next() {
   if (window.location.href == "https://meetsquirrel.github.io/index.html" || "file:///D:/Documents/GitHub/meetsquirrel.github.io/index.html#meet") {
      document.location = "#vegetable-dash";
   }
   if (window.location.href == "https://meetsquirrel.github.io/index.html#vegetable-dash") {
      document.location = "#coming-soon";
   }
}

function last() {
   if (window.location.href == "https://meetsquirrel.github.io/index.html#vegetable-dash") {
      document.location = "#meet";
      backButton.style.opacity = "0";
   }
   if (window.location.href == "https://meetsquirrel.github.io/index.html#coming-soon") {
      document.location = "#vegetable-dash";
   }
}
coming-soon
