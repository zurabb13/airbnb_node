import House from './../models/house.model.js';

export const getAll = async (req, res) => {
  try {
    const house = await House.find();
    res.status(200).json({
      status: 'success',
      result: house.length,
      data: {
        house,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const house = await House.findById(id);
    if (!house) {
      res.status(404).json({
        status: 'fail',
        message: 'house not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        house,
      },
    });
  } catch (err) {
    res.statsu(200).json({
      status: 'fail',
      message: err,
    });
  }
};

export const create = async (req, res) => {
  try {
    const newHouse = await House.create({
      name: req.body.name,
      _id: req.body._id,
    });
    res.status(201).json({
      status: 'success',
      data: {
        newHouse,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
