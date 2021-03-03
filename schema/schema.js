const mongoose = require("../database/database");

let emailSchema = new mongoose.Schema({
  item: String,

  order_id:String,

  date_of_order:String,

  quantity:String,

  Phone:Number 
});

module.exports = mongoose.model("User", emailSchema);
