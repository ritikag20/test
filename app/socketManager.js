const io = require("./../server").io;

//Whenever a socket connection takes place, we will log the message "Connected" on the console
module.exports = (socket) => {
  try {
    console.log("Connected");
    socket.on("code", (data, callback) => {
      socket.broadcast.emit("code", data);
    });
  } catch (ex) {
    console.log(ex.message);
  }
};