// // const {TweetRepository, HashtagRepository}=require('../repository/index');

// import {TweetRepository, HashtagRepository} from '../repository/index.js';

// class TweetService {
//   constructor(){
//     this.tweetRepository=new TweetRepository();
//     this.hashtagRepositry= new HashtagRepository();
//   }

//     async create(data){
//     const content=data.content;
//     const tags=await content.match(/#[a-zA-Z0-9_]+/g)
//                      .map((tag)=> tag.substring(1).toLowerCase());
//                        // this regular expression extracts hashtags
  
//     const tweet=await this.tweetRepository.create(data);
//     let alreadyPresentTags=await this.hashtagRepositry.findByName(tags);
  
//     let titleofPresenttags=alreadyPresentTags.map(tags=>tags.title) 
    
//     let newTags=tags.filter(tag=>!titleofPresenttags.includes(tag));
//     newTags=newTags.map(tag=>{
//       return {title: tag, tweets: [tweet.id]}
//     });
//     await this.hashtagRepositry.bulkCreate(newTags);
//     alreadyPresentTags.forEach((tag) => {
//       tag.tweets.push(tweet.id);
//       tag.save();
//     });
    
//     //[{title: 'coding'},  tweets:[]]
//     //[excited,coding,js]-> [{title: excited}, {title: career}]
//     //[excited,coding,js]-> [ excited, career]
//     //todo create hashtags and add here
//     /*
//      1. bulkcreate in mongoose
//      2. filter title of hashtag based on multiple tags
//      3. how to add tweetid inside all the hashtags
//     */
//     return tweet;
//    }
// }

// export default TweetService;

// /*
// This is my  #first #tweet.  I am really #excited.

// */

//----------------------------------------------------------------------------------------


import { TweetRepository, HashtagRepository } from '../repository/index.js'

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
                        .map((tag) => tag.substring(1).toLowerCase()); // this regex extracts hashtags
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    }

    async get(tweetId) {
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}

export default TweetService;

/*
    this is my #first #tweet . I am really #excited
*/
