'use strict';
// IMAGE PREVIEW
const imIcon = document.querySelectorAll(".add-post h1");
const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = document.querySelector(".image-preview__image");
const previewDefaultText = document.querySelectorAll(".image-preview__default-text");
const containerPost = document.querySelector(".container__post");
let isChooseImg = false, isOpen = false;

imIcon[0].addEventListener("click", openInputFile);


inpFile.addEventListener("change", function (e) {
   const file = e.target.files[0];

   if (file) {
      const reader = new FileReader();

      Block("none");

      previewImage.style.display = "block";

      reader.addEventListener("load", function () {
         previewImage.setAttribute("src", this.result);
      })

      reader.readAsDataURL(file);
      isChooseImg = true;
   }
})

inpFile.addEventListener("click", () => {
   if (isChooseImg) {
      inpFile.disabled = true;
   }
})

previewContainer.addEventListener("mouseenter", () => {
   if (isChooseImg) {
      document.querySelector(".image-preview").style.cursor = "default";
   }
   else
      document.querySelector(".image-preview").style.cursor = "pointer";
})

function openInputFile() {
   previewContainer.style.display = "grid";
   isOpen = true;
   allowPost();
}

function closeInputFile() {
   previewContainer.style.display = "none";
   previewImage.src = "";
   inpFile.value = null;
   Block("block");
   previewImage.style.display = "none";
}

function Block(string) {
   previewDefaultText.forEach((item) => {
      item.style.display = string;
   })
   document.querySelector("#image-plus").style.display = string;
}

// YOUR POST
const yourMind = document.querySelector("#your-mind");
const yourPost = document.querySelector(".your-post");
const textarea = document.querySelector("#create-post");
const post = document.querySelector("#post");

yourMind.addEventListener("click", openPost);

yourPost.querySelector(".card").addEventListener("click", (e) => {
   e.stopPropagation();
})

textarea.addEventListener("keyup", getText);

function getText(e) {
   if (e.target.value === '') {
      notAllowPost();
      yourMind.firstElementChild.textContent = textarea.placeholder;
   }
   else {
      allowPost();
      yourMind.firstElementChild.textContent = e.target.value;
   }
}

function openPost(e) {
   e.stopPropagation();
   closeAllSidebar();
   AddActive(0);
   closeAllActive();
   yourPost.style.display = "grid";
}

function notAllowPost() {
   if (!isOpen) {
      post.style.cursor = "not-allowed";
      post.style.background = "#E4E6EB";
      post.disabled = true;
      post.classList.add("disable-hover");
   }
   else allowPost();
}

function allowPost() {
   post.style.cursor = "pointer";
   post.style.background = "var(--color-primary)";
   post.disabled = false;
   post.classList.remove("disable-hover");
}

// CLOSE BUTTON
const closeBtn = document.querySelector(".your-post .card .close-btn i");

closeBtn.addEventListener("click", closeYourPost);

const closeBtnX = document.querySelector(".image-preview .close-btnX i");

closeBtnX.addEventListener("click", closeImage);

closeBtnX.addEventListener("mouseout", () => {
   inpFile.disabled = false;
   document.querySelector(".image-preview").classList.remove("nohover");
})

closeBtnX.addEventListener("mouseover", () => {
   inpFile.disabled = true;
   document.querySelector(".image-preview").classList.add("nohover");
})

function closeImage() {
   isChooseImg = false;
   isOpen = false;
   closeInputFile();
   if (textarea.value === '') {
      notAllowPost();
   }
}

// ADD POST IN MIDDLE
const feeds = document.querySelector(".middle .feeds");
post.addEventListener("click", PostToMiddle);
function PostToMiddle() {
   let source = document.querySelector("#imagePreview img").src;
   let text = document.querySelector("#create-post");
   if (isChooseImg || text.value != '') {
      const newDiv = document.createElement("div");
      newDiv.className = "feed";
      newDiv.innerHTML = `
         <div class="head">
            <div class="user">
            <div class="profile-photo">
            <img src="/images/profile-1.jpg">
            </div>

            <div class="ingo">
               <h3>Cao Kiet</h3>
               <small>Pleiku, 1 MINUTE AGO</small>
            </div>

         </div>
            <span class="edit">
               <i class="uil uil-ellipsis-h"></i>
            </span>
         </div>

         <div class="caption">
            <p></p>
         </div>

         <div class="photo">
            <img src="">
         </div>

         <div class="action-buttons">
            <div class="interation-buttons">
               <span><i class="uil uil-heart"></i></span>
               <span><i class="uil uil-comment-dots"></i></span>
               <span><i class="uil uil-share-alt"></i></span>
            </div>
            <div class="bookmark">
               <span><i class="uil uil-bookmark-full"></i></span>
            </div>
         </div>

         <div class="liked-by">
         <p><b></b></p>
         </div>

         <div class="like-comment-share">
         <div class="like">
            <div class="like-heading">
               <span><i class="uil uil-thumbs-up"></i></span>
               <span>like</span>
            </div>

         <div class="emojis-popup">
            <div class="emoji-like">
               <p>Like</p>
               <span><i class="fas fa-thumbs-up"></i></span>
            </div>
            <div class="emoji-heart">
               <p>Love</p>
               <span><i class="fas fa-heart"></i></span>
            </div>
            <div class="emoji-care">
               <p>Care</p>
               <span><i class="fas fa-kiss-wink-heart"></i></span>
            </div>
            <div class="emoji-haha">
               <p>Haha</p>
               <span><i class="fas fa-laugh-squint"></i></span>
            </div>
            <div class="emoji-wow">
               <p>Wow</p>
               <span><i class="fas fa-surprise"></i></span>
            </div>
            <div class="emoji-sad">
               <p>Sad</p>
               <span><i class="fas fa-sad-tear"></i></span>
            </div>
            <div class="emoji-angry">
               <p>Angry</p>
               <span><i class="fas fa-angry"></i></span>
            </div>
         </div>
         </div>

         <div class="comment">
            <span><i class="uil uil-comment-alt"></i></span>
            <span>Comment</span>
         </div>

         <div class="share">
            <span><i class="uil uil-share"></i></span>
            <span>Share</span>
         </div>
         </div>

         <div class="commented">
            <div class="profile-photo">
            <img src="./images/profile-1.jpg">
            </div>
         <textarea type="text" name="text" rows="1" style="overflow: hidden;"
               placeholder="Write a comment..."></textarea>
            <span><i class="uil uil-smile"></i></span>
            <span><i class="uil uil-camera"></i></span>
            <span><i class="uil uil-smile"></i></span>
            </div>
         </div>
         `;
      const divCaption = newDiv.querySelector(".caption p");

      if (source.indexOf("http") != -1)
         source = "";

      divCaption.textContent = textarea.value;
      newDiv.querySelector(".photo img").src = source;

      divCaption.style.margin = "8px 0px 0px 12px";
      divCaption.style.fontSize = "20px"

      const data = {
         src: ['/images/profile-1.jpg', source, '/images/profile-1.jpg'],
         h3: 'Cao Kiet',
         caption: textarea.value,
         // pLikedBy: 'Liked by',
         small: 'Pleiku, 1 MINUTE AGO',
         types: ['Like', 'Comment', 'Share'],
      };

      fetchData(data, 'post');

      feeds.appendChild(newDiv);

      // ########### Add Emojis ###########################

      const like = newDiv.querySelector(".emojis-popup");
      like.querySelectorAll('div span')
         .forEach((emoji, index) => {
            emoji.addEventListener('mouseenter', () => {
               clearTimer();
            })

            emoji.addEventListener('mouseleave', () => {
               emojisHidden(index);
            })

            addEmojis(emoji);
         });

      newDiv.querySelector('.like-comment-share .like').addEventListener('mouseenter', () => {
         clearTimer();
         like.style.display = "flex";
         timerShow = setTimeout(() => {
            like.classList.add('hover');
         }, 100);
      })

      newDiv.querySelector('.like-comment-share .like').addEventListener('mouseleave', () => {
         clearTimer();
         timerHidden = setTimeout(() => {
            like.classList.remove('hover');
         }, 100);
      })

      // ########### Emojis Done ###########################

      // ################# Add Comment #######################
      const comment = newDiv.querySelector(".commented > textarea");
      comment.addEventListener('keypress', (e) => {
         const keyCode = e.which || e.keyCode;

         if (keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            if (comment.value !== '') {
               let index = findIndex(newDiv);
               commentPopup(comment.value, index);
               comment.value = '';
               comment.style.height = "auto";
            }
         }
      })

      comment.addEventListener('input', (e) => {
         e.preventDefault();
         textAreaAdjust(e.target);
      });

      // ################# Comment End #######################
      textarea.value = '';
      yourMind.firstElementChild.textContent = textarea.placeholder;
      document.querySelector(".error-post").style.display = "none";
      closeImage();
   }
   else {
      document.querySelector(".error-post").style.display = "block";
   }
}

function findIndex(el) {
   const feeds = document.querySelectorAll(".middle .feeds .feed");
   for (const [index, value] of Array.from(feeds).entries()) {
      if (el === value) return index;
   }
   return -1;
}

// LIKE-COMMENT-SHARE
feeds.addEventListener("click", chooseLikeCommentShare);

function chooseLikeCommentShare(e) {
   const target = e.target.classList;
   if (target.contains("like")) {
      const types = e.target.parentElement;
      types.classList.toggle("LIKE");
      if (types.classList.contains("LIKE")) {
         addImage(types.previousElementSibling);
      }
      else {
         removeImage(types.previousElementSibling);
      }
   }
   else if (target.contains("like-heading")) {
      const types = e.target.parentElement.parentElement;
      types.classList.toggle("LIKE");
      if (types.classList.contains("LIKE")) {
         addImage(types.previousElementSibling);
      }
      else {
         removeImage(types.previousElementSibling);
      }
   }
   else if (e.target.textContent === "Like") {
      const types = e.target.parentElement.parentElement.parentElement;
      types.classList.toggle("LIKE");
      if (types.classList.contains("LIKE")) {
         addImage(types.previousElementSibling);
      }
      else {
         removeImage(types.previousElementSibling);
      }
   }
   else if (target.contains("uil-thumbs-up")) {
      const types = e.target.parentElement.parentElement.parentElement.parentElement;
      types.classList.toggle("LIKE");
      if (types.classList.contains("LIKE")) {
         addImage(types.previousElementSibling);
      }
      else {
         removeImage(types.previousElementSibling);
      }
   }

   if (target.contains("comment")) {
      e.target.parentElement.nextElementSibling.classList.toggle("COMMENT");
   }
   else if (e.target.textContent === "Comment") {
      e.target.parentElement.parentElement.nextElementSibling.classList.toggle("COMMENT");
   }
   else if (target.contains("uil-comment-alt")) {
      e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle("COMMENT");
   }
}

// ####################### Comment Popup #####################
// const comment = document.querySelector("#comment");
const commentList = document.querySelectorAll(".commented > textarea");

commentList.forEach((comment, index) => {
   comment.addEventListener('keypress', function (e) {
      const keyCode = e.which || e.keyCode;

      if (keyCode === 13 && !e.shiftKey) {
         e.preventDefault();
         if (comment.value !== '') {
            commentPopup(comment.value, index);
            comment.value = '';
            comment.style.height = "auto";
         }
      }
   })

   comment.addEventListener('input', (e) => {
      e.preventDefault();
      textAreaAdjust(e.target);
   });
})

function textAreaAdjust(element) {
   element.style.height = "auto";
   element.style.height = `${element.scrollHeight}px`;
}

function commentPopup(text, index) {
   let newText = text.trim().split('\n').filter(item => item.length != 0).join('</br>');
   const newComment = `
      <div class="commented-popup">
         <div class="profile-photo">
            <img src="./images/profile-1.jpg">
         </div>
         <div class="handle">
            <h4>Kiet CaoHoang</h4>
            <p contenteditable="false">${newText}</p>
         </div>
         <div class="edit-delete">
            <span><i class="uil uil-ellipsis-h"></i></span>
            <div class="edit-delete-popup">
               <span><i class="uil uil-pen"></i>Edit</span>
               <span><i class="uil uil-trash-alt"></i>Delete</span>
            </div>
         </div>
      </div>

      <div class="commented" style="display: none;">
         <div class="profile-photo">
            <img src="./images/profile-1.jpg">
         </div>

      <textarea type="text" name="text" rows="1" style="overflow: hidden;"
            placeholder="Write a comment...">${text}</textarea>

         <span><i class="uil uil-smile"></i></span>
         <span><i class="uil uil-camera"></i></span>
         <span><i class="uil uil-smile"></i></span>
      </div>
   `;

   const feedList = document.querySelectorAll(".feeds .feed");
   feedList.forEach((feed, idx) => {
      if (index === idx) {
         feed.insertAdjacentHTML('beforeend', newComment);
      }
   })

   // ######################### Edit Comment ############################
   const edits = document.querySelectorAll(".commented-popup .edit-delete > span i");
   edits.forEach((item) => {
      item.addEventListener('click', editComment);
   })
}

function editComment(e) {
   const containerJustify = e.target.parentElement.nextElementSibling;
   const commentedPopup = e.target.parentElement.parentElement.parentElement;
   const textarea = e.target.parentElement.parentElement.parentElement.nextElementSibling.querySelector("textarea");

   containerJustify.classList.toggle("show-up");

   textarea.addEventListener('input', (e) => {
      e.preventDefault();
      textAreaAdjust(textarea);
   })

   const spans = containerJustify.querySelectorAll('span');
   spans.forEach((span, index) => {
      span.addEventListener('click', () => {
         if (index === 0) {
            containerJustify.classList.remove("show-up");
            commentedPopup.style.display = "none";
            commentedPopup.nextElementSibling.style.display = "flex";
            textAreaAdjust(textarea);
            textarea.focus();
            textarea.setSelectionRange(textarea.value.length, textarea.value.length);
            textarea.addEventListener('keypress', removeEnter);
         }
         else if (index === 1) {
            e.target.parentElement.parentElement.parentElement.remove();
            containerJustify.classList.remove("show-up");
         }
      })
   })
}

function removeEnter(e) {
   const keyCode = e.which || e.keyCode;
   const comPopup = e.target.parentElement;
   const p = e.target.parentElement.previousElementSibling.querySelector(".handle p");

   if (keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      e.target.value = e.target.value.trim();
      if (e.target.value !== '') {
         let newText = e.target.value.split('\n').filter(item => item.length != 0).join('</br>');
         p.innerHTML = newText;
         comPopup.previousElementSibling.style.display = "flex";
         comPopup.style.display = "none";
      }
   }
}

function addImage(likedBy) {
   const newSpan = document.createElement("span");
   newSpan.innerHTML = `
      <img src="./images/profile-1.jpg">
   `;
   likedBy.insertBefore(newSpan, likedBy.firstElementChild);
   let caption = likedBy.lastElementChild.textContent.trim();

   if (caption === "") {
      likedBy.lastElementChild.innerHTML = `Kiet Cao <b></b>`;
      // likedBy.lastElementChild.firstElementChild.textContent = "You";
   }
   // else {
   //    likedBy.lastElementChild.firstElementChild.textContent = "You, " + likedBy.lastElementChild.firstElementChild.textContent;
   // }
   removeLikeEmojis();
}

function removeImage(likedBy) {
   likedBy.removeChild(likedBy.firstElementChild);
   let caption = likedBy.lastElementChild.textContent.trim();
   // if (caption.indexOf("Kiet Cao") != -1) {
   likedBy.lastElementChild.textContent = caption.replace("Kiet Cao", "");
   // }
   // else {
   //    likedBy.lastElementChild.firstElementChild.textContent = likedBy.lastElementChild.firstElementChild.textContent.replace("Liked by You", "");
   // }
   removeLikeEmojis();
}

function removeLikeEmojis() {
   clearTimer();
   const emojis = document.querySelectorAll('.emojis-popup');
   emojis.forEach((emoji) => {
      emoji.classList.remove('hover');
      emoji.style.display = 'none';
      setTimeout(() => {
         emoji.style.display = 'flex';
      }, 0);
   })
}


// ############################### Emojis ##################################
const emojis = document.querySelectorAll(".emojis-popup");
const likes = document.querySelectorAll('.like-comment-share .like');
var timerShow = 0, timerHidden = 0;

emojis.forEach((emoji, index) => {
   emoji.addEventListener('mouseenter', () => {
      clearTimer();
   })

   emoji.addEventListener('mouseleave', () => {
      emojisHidden(index);
   })
})

likes.forEach((like, index) => {
   like.addEventListener('mouseenter', () => {
      clearTimer();
      like.querySelector(".emojis-popup").style.display = "flex";
      timerShow = setTimeout(() => {
         emojis[index].classList.add('hover');
      }, 100);
   });

   like.addEventListener('mouseleave', () => {
      clearTimer();
      timerHidden = setTimeout(() => {
         emojis[index].classList.remove('hover');
      }, 100);
   });
})

function emojisHidden(index) {
   clearTimer();
   timerHidden = setTimeout(() => {
      emojis[index].classList.remove('hover');
   }, 100);
}

function clearTimer() {
   if (timerShow) {
      clearTimeout(timerShow);
      timerShow = 0;
   }
   if (timerHidden) {
      clearTimeout(timerHidden);
      timerHidden = 0;
   }
}

const emojisPopups = document.querySelectorAll(".emojis-popup");

emojisPopups.forEach(emojisPopup => {
   emojisPopup.querySelectorAll("div span").forEach(emoji => {
      addEmojis(emoji);
   });
});

function addEmojis(emoji) {
   emoji.addEventListener('mouseenter', () => {
      emoji.previousElementSibling.style.visibility = "visible";
   });

   emoji.addEventListener('mouseleave', () => {
      emoji.previousElementSibling.style.visibility = "hidden";
   });

   emoji.addEventListener('click', () => {
      const target = emoji.parentElement.parentElement.previousElementSibling;
      const span = target.querySelector("span");
      const p = emoji.previousElementSibling.textContent;

      if (p === "Like") {
         span.innerHTML = `<span><i class="fas fa-thumbs-up"></i></span>`;
         target.style.color = "#0088ff";
      }
      else if (p === "Love") {
         span.innerHTML = `<span><i class="fas fa-heart"></i></span>`;
         target.style.color = "#ff243a";
      }
      else if (p === "Care") {
         span.innerHTML = `<span><i class="fas fa-kiss-wink-heart"></i></span>`;
         target.style.color = "#ffff00";
      }
      else if (p === "Haha") {
         span.innerHTML = `<span><i class="fas fa-laugh-squint"></i></span>`;
         target.style.color = "#ffe24f";
      }
      else if (p === "Wow") {
         span.innerHTML = `<span><i class="fas fa-surprise"></i></span>`;
         target.style.color = "#f200ff";
      }
      else if (p === "Sad") {
         span.innerHTML = `<span><i class="fas fa-sad-tear"></i></span>`;
         target.style.color = "#ff4d00";
      }
      else if (p === "Angry") {
         span.innerHTML = `<span><i class="fas fa-angry"></i></span>`;
         target.style.color = "red";
      }
      target.lastElementChild.textContent = p;
      // emoji.parentElement.parentElement.classList.remove("hover");
      emoji.parentElement.parentElement.style.display = "none";
      // setTimeout(() => {
      //    emoji.parentElement.parentElement.style.display = "flex";
      // }, 100);
   });
}

