const data = [{
   title: "Gold Rush",
   description: "A web-based incremental game about collecting gold",
   date: "2019",
   image: "../images/projects/goldrush.png",
   link: "https://goldrush.hnasheralneam.dev",
   github: "https://github.com/hnasheralneam/gold-rush"
},
{
   title: "Vegetable Dash",
   description: "A farming game built for the browser",
   date: "2020",
   image: "../images/projects/vegetabledash.png",
   link: "https://vegetabledash.hnasheralneam.dev",
   github: "https://github.com/hnasheralneam/vegetable-dash"
},
{
   title: "Git Organized",
   description: "A project management app built around managing cards",
   date: "2022",
   image: "../images/projects/gitorganized.png",
   link: "https://gitorganized.hnasheralneam.dev",
   github: "https://github.com/hnasheralneam/git-organized"
},
{
   title: "FetchCV",
   description: "Your centralized developer profile",
   date: "2024",
   image: "../images/projects/fetchcv.png",
   link: "https://fetchcv.hnasheralneam.dev",
   github: "https://github.com/FetchCV/fetchcv"
},
{
   title: "Activity Log",
   description: "A time tracking application",
   date: "2022",
   image: "../images/projects/activitylog.png",
   link: "https://activitylog.hnasheralneam.dev",
   github: "https://github.com/hnasheralneam/activity-log"
},
{
   title: "Medium Rare",
   description: "A multiplayer co-op cooking game made for a hackathon",
   date: "2024",
   image: "../images/projects/mediumrare.png",
   link: "https://mediumrare.hnasheralneam.dev/",
   github: "https://github.com/hnasheralneam/medium-rare"
},
{
   title: "Sleepwalker",
   description: "A terminal-looking web game, built for an overnight hackathon",
   date: "2024",
   image: "../images/projects/sleepwalker.png",
   link: "https://sleepwalker.quest",
   github: "https://github.com/MichaByte/sleepwalker"
},
{
   title: "Produced Demand",
   description: "A bus maanagement game",
   date: "2025",
   image: "../images/projects/produceddemand.png",
   link: "https://hnasheralneam.itch.io/produced-demand",
   github: "https://github.com/produced-demand/produced-demand"
}
];

data.forEach((item) => {
   let element = document.createElement("div");
   element.classList.add("carousel-item");
   element.innerHTML = `
            <div class="carousel-item-inner">
                <img src="${item.image}">
                <div class="text-items">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <p class="more">
                        <span class="started">Started ${item.date}</span>&nbsp;|&nbsp;
                        <a href="${item.link}">Try it</a>&nbsp;|&nbsp;
                        <a href="${item.github}">GitHub Repository</a>
                    </p>
                </div>
        </div>`;
   document.querySelector(".carousel-inner").append(element);
});

// + prayertimes

const items = document.querySelectorAll(".carousel-item");
let activeIndex = 1;
let carouselLoop;
let lastChange = Date.now();

function updateCarousel() {
   const total = items.length;
   items.forEach((item, index) => {
      item.classList.remove("prev", "active", "next", "hidden-left", "hidden-right");

      const diff = (index - activeIndex + total) % total;

      if (index === activeIndex) item.classList.add("active");
      else if (diff === total - 1) item.classList.add("prev");
      else if (diff === 1) item.classList.add("next");
      else if (diff < total / 2) item.classList.add("hidden-right");
      else item.classList.add("hidden-left");
   });
}

document.querySelector(".carousel").addEventListener("click", (event) => {
   if (event.target.parentElement.parentElement.classList.contains("next")) {
      if ((Date.now() - lastChange) < 500) return;
      nextSlide();
      resetCarouselLoop();
      lastChange = Date.now();
   } else if (event.target.parentElement.parentElement.classList.contains("prev")) {
      if ((Date.now() - lastChange) < 500) return;
      lastSlide();
      resetCarouselLoop();
      lastChange = Date.now();
   }
});

function nextSlide() {
   activeIndex = (activeIndex + 1) % items.length;
   updateCarousel();
}

function lastSlide() {
   activeIndex = (activeIndex - 1 + items.length) % items.length;
   updateCarousel();
}

updateCarousel();
carouselLoop = setInterval(nextSlide, 2000);

function resetCarouselLoop() {
   lastChange = Date.now();
   clearInterval(carouselLoop);
   carouselLoop = setInterval(nextSlide, 2000);
}