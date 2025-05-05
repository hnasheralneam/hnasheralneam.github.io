function checkSubmissionValid(event) {
   let message = document.querySelector('textarea[name="message"]').value;
   let github = document.querySelector('input[name="github"]').value;
   if (message.length < 1 || github.length < 1) {
      event.preventDefault();
      document.querySelector('.status').textContent = "Fill out all fields";
   }
   else if (message.length > 500) {
      event.preventDefault();
      document.querySelector('.status').textContent = "Message too long";
   }
   else {
      document.querySelector('.status').textContent = "Post succesful!";
   }
}


fetch('https://guestbook-api.hnasheralneam.dev/messages/random-5')
   .then(response => response.json())
   .then(data => {
      for (let i = 0; i < data.length; i++) {
         createMessage(data[i]);
      }
   })
   .catch(error => {
      console.error('Error fetching data:', error);
   });

function getAll() {
   document.querySelector('.messages').innerHTML = "";
   fetch('https://guestbook-api.hnasheralneam.dev/messages/all')
      .then(response => response.json())
      .then(data => {
         for (let i = 0; i < data.length; i++) {
            createMessage(data[i]);
         }
      })
      .catch(error => {
         console.error('Error fetching data:', error);
      });
}

function createMessage(message) {
   const messageDiv = document.createElement('div');
   messageDiv.classList.add('card');
   messageDiv.innerHTML = `
      <div>
         <p class="message">${message.message}</p>
         <a class="name" href="https://fetchcv.hnasheralneam.dev/user/github/${message.github}">${message.github}</a><br>
         <i>${formatDate(message.timestamp.toLocaleString(), "dmy")}</i>
      </div>`;
   document.querySelector('.messages').appendChild(messageDiv);

}

function toggleElement(elementName) {
   const element = document.querySelector(`.${elementName}-container`);
   if (element.style.opacity == 0) {
      element.style.opacity = "1";
      element.style.pointerEvents = "all";
   } else {
      element.style.opacity = 0;
      element.style.pointerEvents = "none";
   }
}