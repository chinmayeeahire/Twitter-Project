const mongoose=require('mongoose');
// mongoose.set('strictQuery', true);
const connect=async () =>{
    await mongoose.connect('mongodb://localhost/twitter_Dev');
}

module.exports=connect;