const { saveCallId, getCallId } = require("./model");
//These methods are required to be passed in the routes created in routes.js

//Method in which the ID and some signal data will be passed from the route, and get saved in the redis database
exports.saveCallId = async (req, res) => {
  try {
    const { id, signalData } = req.body;
    await saveCallId(id, signalData);
    res.status(200).send(true);
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};

//This method will get the call info from the redis database
exports.getCallId = async (req, res) => {
  try {
    //This id will be passed from the route defined in routes.js
    const { id } = req.params;
    const code = await getCallId(id);
    res.status(200).send({ code });
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};