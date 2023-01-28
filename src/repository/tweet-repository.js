const { create } = require('../models/tweet');
const Tweet=require('../models/tweet');

class TweetRepository {
    
    async create(data){
        try {
            const tweet=await Tweet.create(data);
            return tweet;
         } catch (error) {
             console.log(error);
         }        
    }
    async get(id){
        try {
            const tweet=await Tweet.findById(id);
            return tweet;
         } catch (error) {
             console.log(error);
         }
    }
    async update(tweetId, data){
        try {
            const tweet=await Tweet.findByIdAndUpdate(tweetId, data, {new: true});
            return tweet;
         } catch (error) {
             console.log(error);
         }
    }
    async destroy(id){
        try {
            const tweet=await Tweet.findByIdAndRemove(id);
            return tweet;
         } catch (error) {
             console.log(error);
         }
    }

    async getWithComments(id){
        try {
            const tweet=await Tweet.findById(id).populate({path: 'Comments'}).lean();  //.lean()  -> Document returned from lean function are plain js obj not mongoose documents. They have no save method , getters/setters, virtuals ,or other mongoose features
            return tweet;
         } catch (error) {
             console.log(error);
         }
    }

    async getAll(offset, limit){
        try {
            const tweet=await Tweet.find().skip(offset).limit(limit);    //skip for offest and limit to put a limit
            return tweet;
         } catch (error) {
             console.log(error);
         }
    }
}

module.exports=TweetRepository;