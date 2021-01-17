const { article, user } = require("../models");

exports.create = async (req, res) => {
  req.body.userId = req.user;
  if (req.role === 1) {
    const newArticle = await article.create(req.body);
    const get = await article.findOne({
      where: { id: newArticle.id },
      include: {
        model: user,
        attributes: ["fullname"]
      }
    });
    res.status(201).send({ data: get });
  }
};

exports.index = async (req, res) => {
  const get = await article.findAll({
    order: [["createdAt", "DESC"]]
  });
  res.status(201).send({ data: get });
};

exports.getbyId = async (req, res) => {
  const get = await article.findOne({
    where: { id: req.params.id },
    include: {
      model: user,
      attributes: ["fullname"]
    }
  });
  res.status(201).send({ data: get });
};
