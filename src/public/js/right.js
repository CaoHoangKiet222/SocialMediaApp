// MESSAGES
const messageList = document.querySelectorAll(".right .messages .category h6");
const messageRequests = document.querySelector(".right .friend-requests");
const messagePrimary = document.querySelector(".right .messages");
const requestsList = document.querySelectorAll(".right .friend-requests .request .action");

function fetchData(data, type) {
   const options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      // referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
   };
   fetch(`/api/${type}`, options).then(res => {
      return res.json();
   }).then(data => {
      console.log(data.message);
   })
}

messagePrimary.addEventListener("click", (e) => {
   if (e.target.innerText === "Accept") {

      const newMessage = document.createElement("div");
      newMessage.className = "message";

      const childPhoto = document.createElement("div");
      childPhoto.className = "profile-photo";
      const divMessage = document.createElement("div");
      divMessage.className = "message-body";

      const img = document.createElement("img");
      img.src = e.target.parentElement.previousSibling.previousSibling.querySelector('.profile-photo img').src;
      const divActive = document.createElement("div");
      divActive.className = "active";

      const h5 = document.createElement("h5");
      h5.innerText = e.target.parentElement.previousSibling.previousSibling.querySelector('h5').innerText;
      const p = document.createElement("p");
      p.className = "text-muted";
      p.innerText = "Your are both friends";

      // Fetch data JSON
      fetchData({
         src: img.src,
         h5: h5.innerText,
         p: p.innerText
      }, 'requests/accept');
      // End Fetch

      childPhoto.appendChild(img);
      childPhoto.appendChild(divActive);
      divMessage.appendChild(h5);
      divMessage.appendChild(p);
      newMessage.appendChild(childPhoto);
      newMessage.appendChild(divMessage);
      newMessage.style.display = "none";

      messagePrimary.querySelector("#message").insertBefore(newMessage, document.querySelector("#message").children[0]);
      messageRequests.removeChild(e.target.parentElement.parentElement);
   }
   else if (e.target.innerText === "Decline") {
      const decline = e.target.parentElement.parentElement;
      messageRequests.removeChild(decline);
      const data = {
         src: decline.querySelector(".info .profile-photo img").src,
         h5: decline.querySelector(".info div h5").innerText,
         accept: 'Accept',
         decline: 'Decline'
      }
      fetchData(data, 'requests/decline');
   }
})

messagePrimary.addEventListener("click", (e) => {
   e.stopPropagation();
   toggleMessage();
   removeAllActive();
   toggleMessage();
   AddActive(3);
})

messageList.forEach((item, index) => {
   item.addEventListener("click", (e) => {
      e.stopPropagation();
      removeAllActive();
      removeActiveMessage();
      toggleMessage();
      AddActive(3);
      item.classList.add("active");
      item.classList.add("message-requests");
      if (index === 0) {
         messageRequests.style.display = "none";
         openMessage();
      }
      else if (index == 1) {
         removeMessage();
         messageRequests.style.display = "none";
      }
      else if (index === 2) {
         removeMessage();
         messageRequests.style.display = "block";
      }
   })
})

function removeAllActive() {
   closeAllSidebar();
   for (let i = 0; i < menuItems.length; i++) {
      RemoveActive(i);
   }
}
function removeActiveMessage() {
   for (let i = 0; i < messageList.length; i++) {
      messageList[i].classList.remove("active");
      messageList[i].classList.remove("message-requests");
   }
}

function removeMessage() {
   let list = document.querySelector("#message");
   console.log(list);
   for (let i = 0; i < list.children.length; i++) {
      list.children[i].style.display = "none";
   }
}

function openMessage() {
   let list = document.querySelector("#message");
   for (let i = 0; i < list.children.length; i++) {
      list.children[i].style.display = "flex";
   }
}

// SEARCH
document.querySelector("#message-search").addEventListener("keyup", (e) => {
   const messages = document.querySelectorAll("#message .message");
   const requests = document.querySelectorAll(".friend-requests .request");
   if (checkPrimarySearch()) {
      messages.forEach(message => {
         if (message.querySelector("h5").textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
            message.style.display = "flex";
         }
         else {
            message.style.display = "none";
         }
      })
   }
   else if (checkRequestsSearch()) {
      requests.forEach(request => {
         if (request.querySelector(".info  h5").textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
            request.style.display = "block";
         }
         else {
            request.style.display = "none";
         }
      })
   }
})

function checkPrimarySearch() {
   const h6 = document.querySelectorAll(".right .messages .category h6");
   for (const item of h6) {
      if (item.classList.contains("active") && item.textContent === "Primary") {
         return true;
      }
   }
   return false;
}

function checkRequestsSearch() {
   const h6 = document.querySelectorAll(".right .messages .category h6");
   for (const item of h6) {
      if (item.classList.contains("active") && item.textContent === "Requests") {
         return true;
      }
   }
   return false;
}
