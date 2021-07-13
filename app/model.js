//The methods defined here are imported in controller.js
const redisClient = require("./config/redis");

//In this method,"key" stands for the Call-ID and "value" stands for the signal data
//Expiry set to 1 day, i.e. redis will automatically clear the values after a day
exports.saveCallId = (key, value) => {
  return new Promise((resolve, reject) => {
    redisClient.SET(key, JSON.stringify(value), "EX", 86400, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

//This method will take in a "key" and get call info from the redis database
exports.getCallId = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.GET(key, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(res));
    });
  });
};