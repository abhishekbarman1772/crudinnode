let ejs = require('ejs')
let user = require("../schema/schema");
const crypto = require("crypto");

const update=function (req, res) {
   
  user.findByIdAndUpdate(req.params.id, req.query).then((users) => {
    
    console.log(users);
    console.log('updated successfully');
    res.status(200).send({message:"updation successful"});
   });
}

const save=function (req, res) {
    var obj = new user(req.body);
  
    obj.save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the User.",
        });
      });
  }
  
  const find=function (req, res) {
    user.find().then((result) => {
      ejs.renderFile('templates/shoppingcart.ejs',{result},function(err,data){
        console.log(err);
        res.send(data);
       })
       
      console.log(result)
    });
  }

  const edit=function (req, res) {
     
    user.find({"order_id":req.params.order_id}).then((users) => {
    console.log(users);
    ejs.renderFile('templates/edit.ejs',{users},function(err,data){
      res.send(data);
     })
    
  });
}
const del = function (req, res) {
  
 user.findByIdAndDelete(req.params.id).then((user)=>{
 
   if(!user){
     return res.status(404).send({
       message: "User deletion unsuccessful!"
 })}
   res.status(200).send({message:"successful"});
  
 
 })
 
 }
 const create=function (req,res) {
    res.render('create.html');
    
  }

  module.exports={
    update,
    save,
    find,
    edit,
    del,
    create
  }