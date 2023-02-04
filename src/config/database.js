// // const mongoose=require('mongoose');
// import mongoose from 'mongoose';
// // mongoose.set('strictQuery', true);
// export const connect=async () =>{
//     await mongoose.connect('mongodb://localhost/twitter_Dev');
// }

// // module.exports=connect;


//----------------------------------------

import mongoose from 'mongoose';

export const connect = async () => {
    await mongoose.connect('mongodb://localhost/twitter_Dev');
}