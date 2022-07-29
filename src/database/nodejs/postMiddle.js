const {randomChangeEl} = require("./acceptRequest");
const {loadFile, saveFile} = require("./load_save");

const feeds = [
   {
      src: ['/images/profile-3.jpg', '/images/profile-11.jpg', '/images/profile-1.jpg'],
      h3: 'V-Five',
      small: 'Dubai, 15 MINUTES AGO',
      srcLikedBy: ['/images/profile-8.jpg', '/images/profile-9.jpg', '/images/profile-10.jpg'],
      pLikedBy: 'Liked by ',
      bLikedBy: ['Lisa, Rose', ' and 2,343 others'],
      types: ['Like', 'Comment', 'Share'],
      textContainer: new Array()
   },
   {
      src: ['/images/profile-7.jpg', '/images/profile-6.jpg', '/images/profile-1.jpg'],
      h3: 'Jsoo',
      small: 'Pleiku, 30 MINUTES AGO',
      srcLikedBy: ['/images/profile-8.jpg', '/images/profile-9.jpg', '/images/profile-1.jpg'],
      pLikedBy: 'Liked by ',
      bLikedBy: ['Lisa, Rose', ' and 2,435 others'],
      types: ['Like', 'Comment', 'Share'],
      textContainer: new Array()
   },
   {
      src: ['/images/profile-8.jpg', '/images/profile-14.jpg', '/images/profile-1.jpg'],
      h3: 'Lisa',
      small: 'Korean, 30 MINUTES AGO',
      srcLikedBy: ['/images/profile-4.jpg', '/images/profile-9.jpg', '/images/profile-10.jpg'],
      pLikedBy: 'Liked by ',
      bLikedBy: ['Lisa, Rose', ' and 2,343 others'],
      types: ['Like', 'Comment', 'Share'],
      textContainer: new Array()
   },
   {
      src: ['/images/profile-10.jpg', '/images/profile-15.png', '/images/profile-1.jpg'],
      h3: 'Rose',
      small: 'Korean, 40 MINUTES AGO',
      srcLikedBy: ['/images/profile-4.jpg', '/images/profile-9.jpg', '/images/profile-10.jpg'],
      pLikedBy: 'Liked by ',
      bLikedBy: ['Lisa, Rose', ' and 2,343 others'],
      types: ['Like', 'Comment', 'Share'],
      textContainer: new Array()
   },
];

const stories = new Array(
   {
      src: "/images/profile-1.jpg",
      p: "Your Story",
   },
   {
      src: "/images/profile-2.jpg",
      p: "Quang_Em",
   },
   {
      src: "/images/profile-3.jpg",
      p: "NO_ON",
   },
   {
      src: "/images/profile-4.jpg",
      p: "Cao_Kiet",
   },
   {
      src: "/images/profile-5.jpeg",
      p: "Taehyung",
   },
   {
      src: "/images/profile-6.jpg",
      p: "Rose",
   },
   {
      src: "/images/profile-7.jpg",
      p: "Jsu",
   },
)

const postMiddle = function (newData, element) {
   element.push(newData);
}

const commentPopup = function (newData, element) {
   if (!element[newData.indexComment].textContainer)
      element[newData.indexComment].textContainer = new Array();
   element[newData.indexComment].textContainer.push({newText: newData.newText, text: newData.text});
   console.log(element[newData.indexComment].textContainer);
}

const commentExistPopup = function (newData, element) {
   element[newData.indexComment].textContainer.splice(newData.indexExistComment, 1, {newText: newData.newText, text: newData.text});
   console.log(element[newData.indexComment].textContainer);
}

const deleteExistPopup = function (newData, element) {
   console.log(element[newData.indexComment].textContainer);
   element[newData.indexComment].textContainer.splice(newData.indexExistComment, 1);
   console.log(element[newData.indexComment].textContainer);
}

module.exports = {
   feeds,
   postMiddle,
   stories,
   commentPopup,
   commentExistPopup,
   deleteExistPopup
};
