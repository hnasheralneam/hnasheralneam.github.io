console.log("JavaScript Connected!");
console.log("Nice to see you :)");
console.log("Have a great day! 💖 Editor Rust");

window.addEventListener("scroll", () => {
   document.body.style.setProperty("--scroll", window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

function changeThme() {
   let color = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, "0");
   document.documentElement.style.setProperty("--theme-color", `#${color}`);
}

function changeThmeHex() {
   let hex = prompt("Enter valid hexidecimal code :)");
   if (hex) {
      if (hex.charAt(0) != "#") hex = `#${hex}`;
      if (/^#[0-9A-F]{3}$/i.test(hex) || /^#[0-9A-F]{6}$/i.test(hex) || /^#[0-9A-F]{8}$/i.test(hex)) {
         document.documentElement.style.setProperty("--theme-color", hex);
      } else alert("Invalid hex code!");
   }
}