
const express=require('express')
const validator = require("express-joi-validation").createValidator({});
const querySchema=require('.././validator/validation')
const crud=require('../controller/crud')
const router=express.Router()


router.post("/addorder", validator.body(querySchema),crud.save);
  
  //app.get("/find/:id", function (req, res) {
  /* user.find(_id).then((users) => {
      res.status(200).send(users);
    }); */
  /* user.findById(ObjectId("5f896ad859b30f25a48ecd86")).then((users) => {
      res.status(200).send(users);
    }); */
  //  console.log(id);
  //});
  router.get("/edit/:order_id",crud.edit);
  router.get("/find",crud.find)
  router.put("/update/:id", crud.update);
  router.delete("/deleteorder/:id",crud.del);
  router.get("/",crud.create)
  
  module.exports={
    router
  }