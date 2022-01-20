// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");
let isActive = [], count = [];
isActive[0] = true;
count[0] = 1;
for (let i = 1; i < menuItems.length; i++) {
   isActive[i] = false;
   count[i] = 0;
}

for (let i = 0; i < menuItems.length; i++) {
   menuItems[i].addEventListener("mouseover", () => {
      menuItems[i].classList.add("active");
   });

   menuItems[i].addEventListener("mouseout", () => {
      if (isActive[i] === false)
         menuItems[i].classList.remove("active");
   });

   menuItems[i].addEventListener("click", (e) => {
      if (isActive[i]) {
         isActive[i] = false;
         AddActive(0);
         e.stopPropagation();
         closeAllSidebar();
      }
      else {
         for (let k = 0; k < menuItems.length; k++) {
            RemoveActive(k);
         }
         AddActive(i);
      }
   });
}

function RemoveActive(i) {
   menuItems[i].classList.remove("active");
   isActive[i] = false;
}

function AddActive(i) {
   menuItems[i].classList.add("active");
   isActive[i] = true;
}

document.querySelector("body").addEventListener("click", () => {
   closeAllSidebar();
   AddActive(0);
   closeAllActive();
});

function closeAllActive() {
   for (let i = 1; i < menuItems.length; i++) {
      RemoveActive(i);
   }
}

// NOTIFICATION
let isClick = false;
for (let i = 0; i < menuItems.length; i++) {
   menuItems[i].addEventListener("click", (e) => {
      if (isActive[i]) {
         if (i === 1) {
            document.querySelector(".map-popup").addEventListener("click", (e) => {
               e.stopPropagation();
            })
            closeAllSidebar();
            openMap();
         }
         else if (i === 2) {
            document.querySelector(".notifications-popup").addEventListener("click", (e) => {
               e.stopPropagation();
            });
            closeAllSidebar();
            openNotifications();
         }
         else if (i === 3) {
            document.querySelector(".right .messages").addEventListener("click", (e) => {
               e.stopPropagation();
            })
            closeAllSidebar();
            toggleMessage();
         }
         else if (i === 6) {
            closeAllSidebar();
            openThemeModal();
            document.querySelector(".customize-theme").addEventListener("click", () => {
               closeThemeModal();
               RemoveActive(i);
               AddActive(0);
            });
            document.querySelector(".customize-theme .card").addEventListener("click", (e) => {
               e.stopPropagation();
            });
         }
         else {
            closeAllSidebar();
         }
         e.stopPropagation();
      }
   });
}


let mapPopup = document.querySelector(".menu-item .map-popup");
let notificationsPopup = document.querySelector(".menu-item .notifications-popup");
let messagePopup = document.querySelector(".menu-item .notification-count");
let messagerightPopup = document.querySelector(".right .messages");
let themePopup = document.querySelector(".customize-theme");

function openMap() {
   mapPopup.style.display = "block";
   messagePopup.style.display = "none";
}

function closeMap() {
   mapPopup.style.display = "none";
}

function openNotifications() {
   notificationsPopup.style.display = "block";
   messagePopup.style.display = "none";
}

function closeNotifications() {
   notificationsPopup.style.display = "none";
}

function toggleMessage() {
   messagerightPopup.style.boxShadow = "0 0 1rem var(--color-primary)";
   document.getElementById("messages-notifications").querySelector(".notification-count").style.display = "none";
}

function closeToggleMessage() {
   messagerightPopup.style.boxShadow = "none";
}

function openThemeModal() {
   themePopup.style.display = "grid";
}

function closeThemeModal() {
   themePopup.style.display = "none";
}

function closeYourPost() {
   yourPost.style.display = "none";
   document.querySelector(".error-post").style.display = "none";
}

function closeAllSidebar() {
   closeNotifications();
   closeMap();
   closeToggleMessage();
   closeThemeModal();
   closeYourPost();
   // closeInputFile();
}

// THEME
const root = document.querySelector(":root");
const themeList = document.querySelector(".customize-theme .font-size .choose-size");
const customizeTheme = document.querySelector(".customize-theme");
let isChoose = true;
const spanActive = themeList.querySelector(".active");
for (let i = 0; i < themeList.children.length; i++) {
   themeList.children[i].addEventListener("click", () => {
      deleteFont();
      themeList.children[i].style.background = "var(--color-primary)";

      if (i === 0) {
         document.querySelector("html").style.fontSize = "10px";
         root.style.setProperty("--sticky-top-left", "5.4rem");
         root.style.setProperty("--sticky-top-right", "5.4rem");
      }
      else if (i === 1) {
         document.querySelector("html").style.fontSize = "13px";
         root.style.setProperty("--sticky-top-left", "5.4rem");
         root.style.setProperty("--sticky-top-right", "-7rem");
      }
      else if (i === 2) {
         document.querySelector("html").style.fontSize = "16px";
         root.style.setProperty("--sticky-top-left", "-2rem");
         root.style.setProperty("--sticky-top-right", "-17rem");
      }
      else if (i === 3) {
         document.querySelector("html").style.fontSize = "19px";
         root.style.setProperty("--sticky-top-left", "-5rem");
         root.style.setProperty("--sticky-top-right", "-25rem");
      }
      else {
         document.querySelector("html").style.fontSize = "22px";
         root.style.setProperty("--sticky-top-left", "-12rem");
         root.style.setProperty("--sticky-top-right", "-35rem");
      }
   })
}

function deleteFont() {
   for (let j = 0; j < themeList.children.length; j++) {
      themeList.children[j].style.background = "hsl(252, 100%, 90%)";
   }
}

const colorList = document.querySelectorAll(".choose-color span");
colorList.forEach((item, index) => {
   item.addEventListener("click", () => {
      item.style.border = "5px solid white";
      removeColor(index);
      if (item.contains(document.querySelector(".choose-color span.color-1"))) {
         root.style.setProperty("--color-primary", "hsl(252, 75%, 60%)");
      }
      else if (item.contains(document.querySelector(".choose-color span.color-2"))) {
         root.style.setProperty("--color-primary", "hsl(52, 75%, 60%)");
      }
      else if (item.contains(document.querySelector(".choose-color span.color-3"))) {
         root.style.setProperty("--color-primary", "hsl(0, 95%, 65%)");
      }
      else if (item.contains(document.querySelector(".choose-color span.color-4"))) {
         root.style.setProperty("--color-primary", "hsl(152, 75%, 60%)");
      }
      else {
         root.style.setProperty("--color-primary", "hsl(202, 75%, 60%)");
      }
   })
})

function removeColor(index) {
   for (let i = 0; i < colorList.length; i++) {
      if (i != index) {
         colorList[i].style.border = "none";
      }
   }
}

const backGround = document.querySelectorAll(".background .choose-bg div");
backGround.forEach(chooseBackground);

function chooseBackground(item) {
   item.addEventListener("click", () => {
      removeActive();
      item.classList.add("active");
      if (item.classList.contains("bg-1")) {
         root.style.setProperty("--dark-color-lightness", "17%");
         root.style.setProperty("--white-color-lightness", "100%");
         root.style.setProperty("--light-color-lightness", "95%");
      }
      else if (item.classList.contains("bg-2")) {
         root.style.setProperty("--dark-color-lightness", "95%");
         root.style.setProperty("--white-color-lightness", "20%");
         root.style.setProperty("--light-color-lightness", "15%");
      }
      else {
         root.style.setProperty("--dark-color-lightness", "95%");
         root.style.setProperty("--white-color-lightness", "10%");
         root.style.setProperty("--light-color-lightness", "0%");
      }
   })
}

function removeActive() {
   for (let i = 0; i < backGround.length; i++) {
      backGround[i].classList.remove("active");
   }
}

document.querySelector(".customize-theme .card .close-btnX > i").addEventListener("click", () => {
   closeThemeModal();
   AddActive(0);
   RemoveActive(6);
})
