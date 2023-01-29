const {TweetRepository, HashtagRepository}=require('../repository/index');


class TweetService {
  constructor(){
    this.tweetRepository=new TweetRepository();
    this.hashtagRepositry= new HashtagRepository();
  }

    async create(data){
    const content=data.content;
    const tags=await content.match(/#[a-zA-Z0-9_]+/g).map((tag)=> tag.substring(1));  // this regular expression extracts hashtags
  
    const tweet=await this.tweetRepository.create(data);
    let alreadyPresentTags=await this.hashtagRepositry.findByName(tags);
  
    let titleofPresenttags=alreadyPresentTags.map(tags=>tags.title) 
    
    let newTags=tags.filter(tag=>!titleofPresenttags.includes(tag));
    newTags=newTags.map(tag=>{
      return {title: tag, tweets: [tweet.id]}
    });
    await this.hashtagRepositry.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });
    
    //[{title: 'coding'},  tweets:[]]
    //[excited,coding,js]-> [{title: excited}, {title: career}]
    //[excited,coding,js]-> [ excited, career]
    //todo create hashtags and add here
    /*
     1. bulkcreate in mongoose
     2. filter title of hashtag based on multiple tags
     3. how to add tweetid inside all the hashtags
    */
    return tweet;
   }
}

module.exports=TweetService;

/*
This is my  #first #tweet.  I am really #excited.

*/
