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
   where();
}

function where() {
   let meetIndicator = document.getElementById("meetIndicator");
   let vegIndicator = document.getElementById("vegetable-dashIndicator");
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
   if (pageLocation === "coming-soon") {
      comingIndicator.style.backgroundColor = "#262626";
   }
   else {
      comingIndicator.style.backgroundColor = "#d6d6d6";
   }
}

// Like carousel show progress
// Transparent text moving background

/* Links */

/* Should have nice hover that shows some content from link */
