// theme color
let themeColor = localStorage.getItem("theme-color");
if (!themeColor) themeColor = "#f69b46";
setThemeColor(themeColor);

function setThemeColor(color) {
   document.documentElement.style.setProperty("--theme-color", color);
   let metaThemeColor = document.querySelector("meta[name=theme-color]");
   metaThemeColor.setAttribute("content", color);
   localStorage.setItem("theme-color", color);
}
