let url = document.location.href;

function copy(txt) {
   let link = `${url}#${txt}`;
   navigator.clipboard.writeText(link).then(() => {
      console.log("Copied link!");
   }, () => { console.log("Error copying link."); });
   let alert = document.createElement("DIV");
   alert.textContent = "Copied Link to Heading!";
   alert.classList.add("tempAlert");
   document.body.appendChild(alert);
   setTimeout(() => {
      alert.style.opacity = "1";
      alert.style.bottom = ".5rem";
   }, 200);
   setTimeout(() => {
      alert.style.opacity = "0";
      alert.style.bottom = "-10rem";
   }, 4200);
   setTimeout(() => {
      alert.remove();
   }, 4400);

}