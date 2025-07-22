let statsElement = document.querySelector(".github-actions");

let userData;
let userEvents;

getUserInfo();
// getEvents();

async function getUserInfo() {
   try {
      const response = await fetch(`https://api.github.com/users/hnasheralneam`);
      if (response.ok) {
         userData = await response.json();
         showData();
      }
      else console.error("Failed to fetch user data. Status:", response.status, response);
   }
   catch (error) { console.error("Failed to request user data. Error - ", error); }
}
async function getEvents() {
   try {
      const response = await fetch(`https://api.github.com/users/hnasheralneam/events`);
      if (response.ok) {
         userEvents = await response.json();
         showEvents();
      }
      else console.error("Failed to fetch user data. Status:", response.status, response);
   }
   catch (error) { console.error("Failed to request user data. Error - ", error); }
}

function showData() {
   document.querySelector(".github-stats").innerHTML = "GitHub stats: <i>" + userData.followers + " followers - " + userData.following + " following - " + userData.public_repos + " repositories </i>";
}
function showEvents() {
   const eventsToShow = userEvents.slice(0, 3);
   renderEvents(eventsToShow);
}
function showAllActions() {
   renderEvents(userEvents);
}

function renderEvents(eventsToDisplay) {
   let eventsHtml = '<div class="github-events-container">';
   eventsToDisplay.forEach(event => {
      if (event) { // Ensure event is not null/undefined
         eventsHtml += showAction(event);
      }
   });
   eventsHtml += '</div>';
   statsElement.innerHTML = eventsHtml;
}

function showAction(action) {
   const type = action.type.replace("Event", "");
   const repoName = action.repo.name;
   const repoUrl = `https://github.com/${repoName}`;
   const eventTime = new Date(action.created_at);
   let details = `<dt>Repository:</dt><dd><a href="${repoUrl}" target="_blank" rel="noopener noreferrer">${repoName}</a></dd>`;

   switch (type) {
      case "Issues":
         details += `<dt>Action:</dt><dd>${action.payload.action}</dd>`;
         details += `<dt>Title:</dt><dd>${action.payload.issue.title}</dd>`;
         details += `<dt>Issue:</dt><dd><a href="${action.payload.issue.html_url}" target="_blank" rel="noopener noreferrer">#${action.payload.issue.number}</a></dd>`;
         break;
      case "IssueComment":
         details += `<dt>Action:</dt><dd>${action.payload.action} comment</dd>`;
         if (action.payload.issue) {
            details += `<dt>On Issue:</dt><dd><a href="${action.payload.issue.html_url}" target="_blank" rel="noopener noreferrer">#${action.payload.issue.number} (${action.payload.issue.title})</a></dd>`;
         }
         details += `<dt>Comment:</dt><dd class="event-comment-body">${action.payload.comment.body.substring(0, 150)}${action.payload.comment.body.length > 150 ? '...' : ''}</dd>`;
         break;
      case "PullRequest":
         details += `<dt>Action:</dt><dd>${action.payload.action}</dd>`;
         details += `<dt>Pull Request:</dt><dd><a href="${action.payload.pull_request.html_url}" target="_blank" rel="noopener noreferrer">#${action.payload.pull_request.number}</a></dd>`;
         details += `<dt>Title:</dt><dd>${action.payload.pull_request.title}</dd>`;
         break;
      case "Create":
         details += `<dt>Type:</dt><dd>Created ${action.payload.ref_type}</dd>`;
         if (action.payload.ref) {
            details += `<dt>Name:</dt><dd>${action.payload.ref}</dd>`;
         }
         break;
      case "Push":
         details += `<dt>Branch:</dt><dd>${action.payload.ref.replace("refs/heads/", "")}</dd>`;
         details += `<dt>Commits:</dt><dd>${action.payload.commits.length}</dd>`;
         // Optionally list first few commit messages
         if (action.payload.commits && action.payload.commits.length > 0) {
            details += `<dt>Recent Commit:</dt><dd>${action.payload.commits[0].message.split('\n')[0]}</dd>`;
         }
         break;
      case "Watch":
         details += `<dt>Action:</dt><dd>${action.payload.action} (starred)</dd>`;
         break;
      case "Fork":
         details += `<dt>Forked To:</dt><dd><a href="${action.payload.forkee.html_url}" target="_blank" rel="noopener noreferrer">${action.payload.forkee.full_name}</a></dd>`;
         break;
      default:
         details += `<dt>Details:</dt><dd>Unhandled event type.</dd>`;
   }

   return `
      <div class="github-event-card">
         <h4 class="event-type">
            ${type}
            <time class="event-time" datetime="${eventTime.toISOString()}">${eventTime.toLocaleString()}</time>
         </h4>
         <dl class="event-details">${details}</dl>
         <p class="event-time"></p>
      </div>`;
}