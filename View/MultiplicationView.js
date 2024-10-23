
const MultiplicationModel = require("../Model/MultiplicationModel");

const multiplication = async (req, res) => {
    const { number1,number2 } = req.body;
    
    const result = number1*number2;
  
    const multiplicationModel = await MultiplicationModel.create({
        number1: number1,
        number2: number2,
        result:result
    });

    return res.status(201).json({ multiplicationModel });
};


module.exports = { multiplication };
