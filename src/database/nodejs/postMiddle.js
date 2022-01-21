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
   },
   {
      src: ['/images/profile-7.jpg', '/images/profile-6.jpg', '/images/profile-1.jpg'],
      h3: 'Jsoo',
      small: 'Pleiku, 30 MINUTES AGO',
      srcLikedBy: ['/images/profile-8.jpg', '/images/profile-9.jpg', '/images/profile-1.jpg'],
      pLikedBy: 'Liked by ',
      bLikedBy: ['Lisa, Rose', ' and 2,435 others'],
      types: ['Like', 'Comment', 'Share'],
   },
   {
      src: ['/images/profile-8.jpg', '/images/profile-14.jpg', '/images/profile-1.jpg'],
      h3: 'Lisa',
      small: 'Korean, 30 MINUTES AGO',
      srcLikedBy: ['/images/profile-4.jpg', '/images/profile-9.jpg', '/images/profile-10.jpg'],
      pLikedBy: 'Liked by ',
      bLikedBy: ['Lisa, Rose', ' and 2,343 others'],
      types: ['Like', 'Comment', 'Share'],
   },
   {
      src: ['/images/profile-10.jpg', '/images/profile-15.png', '/images/profile-1.jpg'],
      h3: 'Rose',
      small: 'Korean, 40 MINUTES AGO',
      srcLikedBy: ['/images/profile-4.jpg', '/images/profile-9.jpg', '/images/profile-10.jpg'],
      pLikedBy: 'Liked by ',
      bLikedBy: ['Lisa, Rose', ' and 2,343 others'],
      types: ['Like', 'Comment', 'Share'],
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
      src: "/images/profile-5.jpg",
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

const postMiddle = function (file, newData) {
   const dataJSON = loadFile(file);
   dataJSON.push(newData);
   feeds.push(newData);
   saveFile(file, JSON.stringify(dataJSON));
}

const makeFilePost = function () {
   const posts = loadFile('post');
   feeds.push(...posts);
   randomChangeEl(feeds);
}
makeFilePost();

module.exports = {
   feeds,
   postMiddle,
   stories
};
