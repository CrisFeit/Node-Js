require('dotenv/config');
const axios = require('axios')

class Request {
  constructor() {
    this.request = axios.create({
      baseURL : process.env.BASE_URL
    })
  }
  
  getMedias(media) {
    return this.request.get(media);
  }
  // axios.all([getUserAccount(), getUserPermissions()])
  //   .then(axios.spread(function (acct, perms) {
  //     Both requests are now complete
  //   }));
}

module.exports = Request