const express=require('express');
const connect=require('./config/database');
// const Tweet=require('./models/tweet');
// const TweetRepository=require('./repository/tweet-repository');
// const Comment=require('./models/comment');

const app=express();

app.listen(3000, async ()=>{
console.log("Server started");
await connect();
console.log("Mongo DB connected");



});

