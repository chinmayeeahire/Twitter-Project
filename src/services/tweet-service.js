const {TweetRepository}=require('../repository/index');


class TweetService {
  constructor(){
    this.tweetRepository=new TweetRepository();
  }

    async create(data){
    const content=data.content;
    const tags=content.match(/#[a-zA-Z0-9_]+/g);  // this regular expression extracts hashtags
    tags=tags.map((tag)=> tag.substring(1));
    console.log(tags);
    const tweet=await this.tweetRepository.create(data);
    //todo create hashtags and add here
    /*
     1. bulkcreate in mongoose
     2. filter title of hashtag based on multiple tags
     3.how to add tweetid inside all the hashtags
    */
    return tweet;
   }
}

module.exports=TweetService;

/*
This is my  #first #tweet.  I am really #excited.

*/
