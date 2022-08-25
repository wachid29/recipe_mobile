const model = require("../model/saveModel");
const modelUser = require("../model/userDataModel");
// get userdata
const getSaveRecipe = async (req, res) => {
  try {
    const getData = await model.getAllSaved();
    res
      .status(200)
      .json({ save: getData?.rows, jumlahData: getData?.rowCount });
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

const addSaveRecipe = async (req, res) => {
  try {
    const { recipe_id, user_id_save } = req.body;
    const postSaved = await model.addNewSave(recipe_id, user_id_save);

    res.status(200).send("Save berhasil di tambah");
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

const deleteSaveRecipe = async (req, res) => {
  try {
    const { id } = req.body;
    const getSaved = await model.findSavebyID(id);
    if (getSaved?.rowCount) {
      const deletedSave = await model.deletedSave(id);
      res.send(`Save id ke-${id} berhasil dihapus`);
    } else {
      res.status(400).send("data tidak ditemukan");
    }
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

const getSavebyUser = async (req, res) => {
  try {
    const { id } = req.query;
    const getUser = await modelUser.findbyID(id);
    if (getUser?.rowCount) {
      const getSavedUser = await model.getSaveByUser(id);
      res.status(200).json({
        recipe: getSavedUser.rows,
        jumlahData: getSavedUser?.rowCount,
      });
    } else {
      res.status(400).send("data tidak ditemukan");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("ada yang error");
  }
};

const findSaveByUser = async (req, res) => {
  const { user_id_save } = req.query;
  try {
    const getData = await model.findSavebyUser(user_id_save);
    res
      .status(200)
      .json({ save: getData?.rows, jumlahData: getData?.rowCount });
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

module.exports = {
  getSaveRecipe,
  addSaveRecipe,
  deleteSaveRecipe,
  getSavebyUser,
  findSaveByUser,
};
