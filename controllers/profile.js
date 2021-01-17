const { user } = require("../models");

exports.profile = async (req, res) => {
  try {
    const consul = await user.findOne({
      where: { id: req.params.id }
    });
    res.status(200).send({ data: consul });
  } catch (error) {
    res.status(500).send({ message: "Unknown Request" });
    console.log(error);
  }
};