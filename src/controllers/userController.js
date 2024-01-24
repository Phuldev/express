exports.createInfo = (req, res) => {
    try{
        const dummyData = {
            name: "Phuldev Mandal",
            address: "Kathmandu,Nepal",
            age: "24",
            email: "phuldevmandal20@gmail.com",
            mobileNumber: "9817348212",
          };
          res.status(200).json(dummyData);
    }
    catch(err){
        res.startus(400).json({
            message:"somthing errors"
        })
    }
};
