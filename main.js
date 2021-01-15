let pageLocation = "meet";
let backButton = document.getElementById("back");
let nextButton = document.getElementById("next");

function next() {
   if (pageLocation === "meet") {
      document.location = "#vegetable-dash";
      pageLocation = "vegetable-dash";
   }
   else if (pageLocation === "vegetable-dash") {
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
   else if (pageLocation === "coming-soon") {
      document.location = "#vegetable-dash";
      pageLocation = "vegetable-dash";
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
}
