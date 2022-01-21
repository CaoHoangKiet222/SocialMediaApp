const {loadFile, saveFile} = require('./load_save');

const primary = new Array(
   {
      src: '/images/profile-10.jpg',
      h5: 'Rose',
      p: 'Stop loving NO_ON'
   },
   {
      src: '/images/profile-10.jpg',
      h5: 'Rose',
      p: 'Stop loving NO_ON'
   },
   {
      src: '/images/profile-10.jpg',
      h5: 'Rose',
      p: 'Stop loving NO_ON'
   },
   {
      src: '/images/profile-16.jpg',
      h5: 'Lisa',
      p: 'I miss you NO_ON'
   },
   {
      src: '/images/profile-10.jpg',
      h5: 'Rose',
      p: 'Don\'t let me alone NO_ON'
   },
   {
      src: '/images/profile-10.jpg',
      h5: 'Rose',
      p: 'Can I call you, NO_ON?'
   }
);

const request = new Array(
   {
      src: '/images/profile-16.jpeg',
      h5: 'Lisa',
      p: '10 mutual friends',
      accept: 'Accept',
      decline: 'Decline'
   },
   {
      src: '/images/profile-16.jpeg',
      h5: 'Lisa',
      p: '10 mutual friends',
      accept: 'Accept',
      decline: 'Decline'
   },
   {
      src: '/images/profile-16.jpeg',
      h5: 'Lisa',
      p: '10 mutual friends',
      accept: 'Accept',
      decline: 'Decline'
   },
   {
      src: '/images/profile-16.jpeg',
      h5: 'Lisa',
      p: '10 mutual friends',
      accept: 'Accept',
      decline: 'Decline'
   },
);


const acceptResquest = function (file, newData) {
   const dataJSON = loadFile(file);
   dataJSON.unshift(newData);
   primary.unshift(newData);
   saveFile(file, JSON.stringify(dataJSON));
}

const declineRequest = function (file, newData) {
   const dataJSON = loadFile(file);
   request.splice(findIndex(newData, request), 1);
   dataJSON.unshift(newData);
   saveFile(file, JSON.stringify(dataJSON));
}

function findIndex(el, ob) {
   for (const [index, value] of ob.entries()) {
      if (value.src === el.src && value.h5 === el.h5) return index;
   }
   return -1;
}

// Shutdown and restart server not affect data
const makeFileRequest = function () {
   // Accept
   const accepts = loadFile('accept');
   primary.unshift(...accepts);
   randomChangeEl(primary);
   accepts.forEach(item => {
      request.splice(findIndex(item, primary), 1);
   })

   // Decline
   const declines = loadFile('decline');
   declines.forEach(item => {
      request.splice(findIndex(item, request), 1);
   })
   randomChangeEl(request);
}
makeFileRequest();

function randomChangeEl(element) {
   let size = element.length;
   let arr = new Array(size).fill(false, 0), arrOb = [...element];
   arrOb.forEach((item, index) => {
      while (true) {
         let newIndex = Math.floor(Math.random() * element.length);
         if (!arr[newIndex]) {
            element[newIndex] = item;
            arr[newIndex] = true;
            break;
         }
      }
   });
   return element;
}

module.exports = {
   randomChangeEl,
   acceptResquest,
   declineRequest,
   primary,
   request
}
