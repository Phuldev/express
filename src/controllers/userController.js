const { Mongo } = require("../model/userScheme");

const createInfo = async (req, res) => {
  try {
    // const dummyData = {
    //     name: "Phuldev Mandal",
    //     address: "Kathmandu,Nepal",
    //     age: "24",
    //     email: "phuldevmandal20@gmail.com",
    //     mobileNumber: "9817348212",
    //   };
    const DB = await Mongo.create(req.body);
    res.status(200).json({ DB });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err.message,
    });
  }
};

const getInfo = async (req, res) => {
  const Db = await Mongo.find({});
  res.status(400).json({ Db });
};
module.exports = {
  createInfo,
  getInfo,
};
