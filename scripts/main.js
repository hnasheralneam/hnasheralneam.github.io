window.addEventListener("scroll", () => {
   document.body.style.setProperty("--scroll", window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

function changeTheme() {
   let color = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, "0");
   setThemeColor(`#${color}`);
}

function changeThemeHex() {
   let hex = prompt("Enter valid hexadecimal code :)");
   if (hex) {
      if (hex.charAt(0) != "#") hex = `#${hex}`;
      if (/^#[0-9A-F]{3}$/i.test(hex) || /^#[0-9A-F]{6}$/i.test(hex) || /^#[0-9A-F]{8}$/i.test(hex)) {
         setThemeColor(hex);
         document.querySelector(".hex-code-label").textContent = "Hex code: " + hex;
      } else alert("Invalid hex code!");
   }
}

function resetTheme() {
   setThemeColor("#f69b46");
}