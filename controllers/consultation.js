const { consultation, user } = require("../models");

exports.consul = async (req, res) => {
  try {
    req.body.userId = req.user;

    console.log(req.role);

    if (req.role === 0) {
      const newConsul = await consultation.create(req.body);
      const consul = await consultation.findOne({
        where: { id: newConsul.id }
      });
      res.status(200).send({ data: consul });
    } else {
      res.status(405).send({ message: "Failure" });
    }
  } catch (error) {
    res.status(500).send({ message: "Unknown Request" });
    console.log(error);
  }
};

exports.getconsul = async (req, res) => {
  try {
    const consul = await consultation.findOne({
      where: { id: req.params.id }
    });
    res.status(200).send({ data: consul });
  } catch (error) {
    res.status(500).send({ message: "Unknown Request" });
    console.log(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    if (req.role === 0) {
      const consul = await consultation.findAll({
        where: { userId: req.user }
      });
      res.status(200).send({ data: consul });
    } else {
      const consul = await consultation.findAll();
      res.status(200).send({ data: consul });
    }
  } catch (error) {
    res.status(500).send({ message: "Unknown Request" });
    console.log(error);
  }
};

exports.reply = async (req, res) => {
  const id = req.params.id;

  try {
    const consul = await consultation.findAll({
      where: { userId: req.user }
    });
    res.status(200).send({ data: consul });
  } catch (error) {
    res.status(500).send({ message: "Unknown Request" });
    console.log(error);
  }
};
