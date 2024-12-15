const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("/Users/lungsomlamnio/Desktop/ApnaCollege/MajorProject/models/Listing");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "675af39a048b9fdaad424df1",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialize");
};

initDB();
