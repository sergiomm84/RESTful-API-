const mongoose = require('mongoose');
require('dotenv').config();
const PASSWORD_DB=process.env.PASSWORD_DB;
const USER_DB = process.env.USER_DB;

mongoose.connect(`mongodb+srv://${USER_DB}:${PASSWORD_DB}@cluster0.uf1y4c0.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
  .then(() => console.log('mongo connected'))
 .catch(err => console.log(err));

let CustomersSchema =new mongoose.Schema({
    name:String,
    email:{
        type: String,
        require:true,
        unique:true
    }
})

module.exports =mongoose.model('Customer',CustomersSchema);