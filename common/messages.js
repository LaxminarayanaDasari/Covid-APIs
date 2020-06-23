'use strict';

import config from '../config/config';

const sendMessage = (url) => {
  request.get({
      url: url,
      json: true
  }, function(err, response, body) {
    if(err){
      console.log("ERROR: ", err);
    } else {
      console.log("RESPONSE: ", body);
    }
  });
}

export {
  sendMessage
}
