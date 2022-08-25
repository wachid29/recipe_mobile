const model = require("../model/likeModel");
const modelUser = require("../model/userDataModel");
// get userdata
const getLikeRecipe = async (req, res) => {
  try {
    const getData = await model.getAllLiked();
    res
      .status(200)
      .json({ like: getData?.rows, jumlahData: getData?.rowCount });
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

const addLikeRecipe = async (req, res) => {
  try {
    const { recipe_id, user_id_like } = req.body;
    const postLike = await model.addNewLike(recipe_id, user_id_like);

    res.status(200).send("like berhasil di tambah");
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

const deleteLikeRecipe = async (req, res) => {
  try {
    const { id } = req.body;
    const getLike = await model.findLikebyID(id);
    if (getLike?.rowCount) {
      const deletedLike = await model.deletedLike(id);
      res.send(`like id ke-${id} berhasil dihapus`);
    } else {
      res.status(400).send("data tidak ditemukan");
    }
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

const getLikebyUser = async (req, res) => {
  try {
    const { id } = req.query;
    const getUser = await modelUser.findbyID(id);
    if (getUser?.rowCount) {
      const getlikedUser = await model.getLikeByUser(id);
      res.status(200).json({
        recipe: getlikedUser.rows,
        jumlahData: getlikedUser?.rowCount,
      });
    } else {
      res.status(400).send("data tidak ditemukan");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("ada yang error");
  }
};

module.exports = {
  getLikeRecipe,
  addLikeRecipe,
  deleteLikeRecipe,
  getLikebyUser,
};
