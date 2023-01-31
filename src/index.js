// // const express=require('express');
// import express from 'express';
// import bodyParser from 'body-parser';

// import apiRoutes from './routes/index.js';


// // const connect=require('./config/database');
// import {connect} from './config/database.js';
// //import TweetService from './services/tweet-service.js';
// // const {TweetRepository}=require('./repository/index');
// // const TweetService=require('./services/tweet-service');
// // const Tweet=require('./models/tweet');
// // const TweetRepository=require('./repository/tweet-repository');
// // const Comment=require('./models/comment');

// // import HashtagRepository from './repository/hashtag-repository.js';

// import Service from './services/tweet-service.js';

// const app=express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// app.use('/api', apiRoutes);

// app.listen(3000, async ()=>{
// console.log("Server started");
// await connect();
// console.log("Mongo DB connected");

// // const tweets =await Tweet.find({
// //     content:
// //         ["second tweet", "First tweet", "tweet updated twice 3"]

// //     });
// // console.log(tweets);

// //  let repo=new HashtagRepository();
// //   await repo.bulkCreate([
// //     {
// //         title: 'Trend',
// //         tweets: []
// //     },
// //     {
// //         title: 'Excited',
// //         tweets: []
// //     },
// //     {
// //         title: 'Python',
// //         tweets: []
// //     },
// //     {
// //         title: 'Fun',
// //         tweets: []
// //     },
// //     {
// //         title: 'Career',
// //         tweets: []
// //     }
// //   ]);

// // let response=await repo.findByName(['Excited', 'Trend']);
// // console.log(response);
// // response=response.map(tags=>tags.title);
// // console.log(response);


// // let service=new TweetService();
// // const tweet=await service.create({
// //     content: 'My #working twitter!!'
// // });
// // console.log(tweet);

// // let service=new Service();
// // await service.create({
// //   content: "my other code #WORKS or not?"
// // });
// });

