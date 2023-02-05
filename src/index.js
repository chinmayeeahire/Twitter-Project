// // const express=require('express');
// import express from 'express';
// import bodyParser from 'body-parser';

// import apiRoutes from './routes/index.js';
 import {UserRepository, TweetRepository} from './repository/index.js'
 import LikeService from './services/like-service.js';
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

// app.listen(3001, async ()=>{
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


// //day 40

// const userRepo=new UserRepository();
// const tweetRepo=new TweetRepository();
// const tweets= await tweetRepo.getAll(0,10);
// const user =await userRepo.getAll();

//  const likeService=new LikeService();
//  await likeService.toggleLike(tweets[0].id, 'Tweet', user[0]);

// });


import express from 'express';
import bodyParser from 'body-parser';
// import passport from 'passport';

import {connect} from './config/database.js';

// import { passportAuth } from './config/jwt-middleware.js';

import apiRoutes from './routes/index.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(passport.initialize());
// passportAuth(passport);

app.use('/api', apiRoutes);


app.listen(3001, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');

//     const userRepo=new UserRepository();
// const tweetRepo=new TweetRepository();
// const tweets= await tweetRepo.getAll(0,10);
// // let user=await userRepo.create({
// //     email: "abc@gmail.com",
// //     password: "abc",
// //     name: "ABC"
// // });
//  const user =await userRepo.getAll();


// const likeService=new LikeService();
//  await likeService.toggleLike(tweets[0].id, 'Tweet', user[0].id);
});