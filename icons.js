const data = document.getElementsByClassName("weather");
document.querySelector(".search-bar").addEventListener("input", (event) => {
   let userQuery = document.querySelector(".search-bar").value;
   for (i = 0; i < data.length; i++) {
      console.log(data[i].classList);
      if (data[i].classList.contains(userQuery.toLowerCase())) {
         data[i].style.display = "grid";
      }
      else { data[i].style.display = "none"; }
   }
});
