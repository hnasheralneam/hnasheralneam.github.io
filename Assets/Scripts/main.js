let pageLocation = "meet";
let backButton = document.getElementById("back");
let nextButton = document.getElementById("next");

function next() {
   if (pageLocation === "meet") {
      document.location = "#vegetable-dash";
      pageLocation = "vegetable-dash";
   }
   else if (pageLocation === "vegetable-dash") {
      document.location = "#gold-rush";
      pageLocation = "gold-rush";
   }
   else if (pageLocation === "gold-rush") {
      document.location = "#coming-soon";
      pageLocation = "coming-soon";
   }
   buttonVisiblility();
}

function last() {
   if (pageLocation === "vegetable-dash") {
      document.location = "#meet";
      pageLocation = "meet";
   }
   else if (pageLocation === "gold-rush") {
      document.location = "#vegetable-dash";
      pageLocation = "vegetable-dash";
   }
   else if (pageLocation === "coming-soon") {
      document.location = "#gold-rush";
      pageLocation = "gold-rush";
   }
   buttonVisiblility();
}

function buttonVisiblility() {
   if (pageLocation != "meet") {
      backButton.style.opacity = "1";
   }
   else {
      backButton.style.opacity = "0";
   }
   if (pageLocation != "coming-soon") {
      nextButton.style.opacity = "1";
   }
   else {
      nextButton.style.opacity = "0";
   }
   where();
}

function where() {
   let meetIndicator = document.getElementById("meetIndicator");
   let vegIndicator = document.getElementById("vegetable-dashIndicator");
   let goldIndicator = document.getElementById("gold-rushIndicator");
   let comingIndicator = document.getElementById("coming-soonIndicator");

   if (pageLocation === "meet") {
      meetIndicator.style.backgroundColor = "#262626";
   }
   else {
      meetIndicator.style.backgroundColor = "#d6d6d6";
   }
   if (pageLocation === "vegetable-dash") {
      vegIndicator.style.backgroundColor = "#262626";
   }
   else {
      vegIndicator.style.backgroundColor = "#d6d6d6";
   }
   if (pageLocation === "gold-rush") {
      goldIndicator.style.backgroundColor = "#262626";
   }
   else {
      goldIndicator.style.backgroundColor = "#d6d6d6";
   }
   if (pageLocation === "coming-soon") {
      comingIndicator.style.backgroundColor = "#262626";
   }
   else {
      comingIndicator.style.backgroundColor = "#d6d6d6";
   }
}

function ind(page) {
   document.location = "#" + page;
   pageLocation = page;
   buttonVisiblility();
}

// Right Click Menu
let rightClickMenu = document.getElementById("menu").style;
if (document.addEventListener) {
   document.addEventListener('contextmenu', function(e) {
      var posX = e.clientX;
      var posY = e.clientY;
      menu(posX, posY);
      e.preventDefault();
   }, false);
   document.addEventListener('click', function(e) {
      rightClickMenu.display = "none";
   }, false);
}
else {
   document.attachEvent('oncontextmenu', function(e) {
      var posX = e.clientX;
      var posY = e.clientY;
      menu(posX, posY);
      e.preventDefault();
   });
   document.attachEvent('onclick', function(e) {
      setTimeout(function() {
         rightClickMenu.display = "none";
      }, 501);
   });
}

function menu(x, y) {
   rightClickMenu.top = y + "px";
   rightClickMenu.left = x + "px";
   rightClickMenu.display = "block";
}
