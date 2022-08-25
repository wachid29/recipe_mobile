const db = require("../db");
// db get all user
const getAllLiked = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM likes ORDER BY id ASC`, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const addNewLike = (recipe_id, user_id_like) => {
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO likes ( recipe_id, user_id_like) 
    VALUES ($1,$2)`,
      [recipe_id, user_id_like],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const deletedLike = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM likes WHERE id=$1`, [id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const findLikebyID = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM likes WHERE id=$1`, [id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const getLikeByUser = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM likes JOIN recipe 
        ON likes.recipe_id = recipe.id WHERE likes.user_id_like= $1`,
      [id],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports = {
  getAllLiked,
  addNewLike,
  deletedLike,
  findLikebyID,
  getLikeByUser,
};
