import firebase, { storageRef } from "../utils/firebaseUtils";

const db = firebase.ref("/atletas");

const getAll = () => {
  return db;
};

const create = (data) => {
  return db.push(data);
};

const update = (key, data) => {
  return db.child(key).update(data);
};

const remove = (key) => {
  return db.child(key).remove();
};

const removeAll = () => {
  return db.remove();
};

const upload = async (file) => {
  console.log("FileName", file);
  const uploadTask = storageRef.ref("All_Files/").child(file.name).put(file);
  return uploadTask;
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  upload,
};
