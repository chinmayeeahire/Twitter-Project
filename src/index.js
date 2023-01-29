const express=require('express');
const connect=require('./config/database');
// const {TweetRepository}=require('./repository/index');
// const TweetService=require('./services/tweet-service');
// const Tweet=require('./models/tweet');
// const TweetRepository=require('./repository/tweet-repository');
// const Comment=require('./models/comment');

const app=express();


app.listen(3000, async ()=>{
console.log("Server started");
await connect();
console.log("Mongo DB connected");

// const tweets =await Tweet.find({
//     content:
//         ["second tweet", "First tweet", "tweet updated twice 3"]

//     });
// console.log(tweets);

//  let repo=new HashtagRepository();
//   await repo.bulkCreate([
//     {
//         title: 'Trend',
//         tweets: []
//     },
//     {
//         title: 'Excited',
//         tweets: []
//     },
//     {
//         title: 'Python',
//         tweets: []
//     },
//     {
//         title: 'Fun',
//         tweets: []
//     },
//     {
//         title: 'Career',
//         tweets: []
//     }
//   ]);

// let response=await repo.findByName(['Excited', 'Trend']);
// console.log(response);
// response=response.map(tags=>tags.title);
// console.log(response);


// let service=new TweetService();
// const tweet=await service.create({
//     content: 'My #working twitter!!'
// });
// console.log(tweet);
});

