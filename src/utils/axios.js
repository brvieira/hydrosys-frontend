'use strict'

const axios = require('axios');
const backendUrl = process.env.BACKEND;

function callUrl(url){
    return new Promise (function (resolve, reject) {
      
      console.log('called url', backendUrl + url);
  
      axios.get(backendUrl + url)
      .then(({ data }) => resolve(data))
      .catch(error => {
          console.error(error);
          reject(error);
      });
    });
  }
  
  
  export default { callUrl };