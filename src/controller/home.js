const {primary, request, randomChangeEl} = require('./../database/nodejs/acceptRequest');
const {feeds, stories} = require('./../database/nodejs/postMiddle');

exports.display = (_req, res) => {
   const obj = {
      title: 'Responsive Social Media Website',
      h2: 'SocialMedia',
      name: 'Cao Kiet',
      feeds: randomChangeEl(feeds),
      stories: randomChangeEl(stories),
      primary: randomChangeEl(primary),
      request: randomChangeEl(request),
   };
   res.render('body', obj);
}
