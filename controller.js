const database = require("./database");

module.exports = {
  async index(req, res) {
    const cars = await database.get("cars");
    return res.json(cars);
  },

  async show(req, res) {
    const car = await database
      .get("cars")
      .find({ id: parseInt(req.params.id, 10) })
      .value();
    if (!car) {
      return res.sendStatus(404);
    }
    return res.json(car);
  },
};
