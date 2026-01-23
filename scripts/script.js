// theme color
let themeColor = localStorage.getItem("theme-color");
if (!themeColor) themeColor = "#f69b46";
setThemeColor(themeColor);

function setThemeColor(color) {
   document.documentElement.style.setProperty("--theme-color", color);
   document.documentElement.style.setProperty("--secondary-color", adjust(color, -40));
   let metaThemeColor = document.querySelector("meta[name=theme-color]");
   metaThemeColor.setAttribute("content", color);
   localStorage.setItem("theme-color", color);
}


// Source - https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
// Posted by supersan
// Retrieved 2026-01-22, License - CC BY-SA 4.0

function adjust(color, amount) {
   return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}
