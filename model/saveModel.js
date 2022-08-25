const db = require("../db");
// db get all user
const getAllSaved = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM saved ORDER BY id ASC`, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const addNewSave = (recipe_id, user_id_save) => {
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO saved ( recipe_id, user_id_save) 
    VALUES ($1,$2)`,
      [recipe_id, user_id_save],
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

const deletedSave = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM saved WHERE id=$1`, [id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const findSavebyID = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM saved WHERE id=$1`, [id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const findSavebyUser = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM saved WHERE user_id_save=$1`,
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

const getSaveByUser = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM saved JOIN recipe 
        ON saved.recipe_id = recipe.id WHERE saved.user_id_save= $1`,
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
  getAllSaved,
  addNewSave,
  deletedSave,
  findSavebyID,
  findSavebyUser,
  getSaveByUser,
};
