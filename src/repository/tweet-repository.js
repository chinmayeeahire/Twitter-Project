// const { create } = require('../models/tweet');
// const Tweet=require('../models/tweet');

import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository {

    constructor(){
        super(Tweet);
    }
    
    async create(data){
         try {
            const tweet=await Tweet.create(data);
            return tweet;
         } catch (error) {
             console.log(error);
         }        
    }
    // async get(id){
    //     try {
    //         const tweet=await Tweet.findById(id);
    //         return tweet;
    //      } catch (error) {
    //          console.log(error);
    //      }
    // }
   
    // async destroy(id){
    //     try {
    //         const tweet=await Tweet.findByIdAndRemove(id);
    //         return tweet;
    //      } catch (error) {
    //          console.log(error);
    //      }
    // }


    async getAll(offset, limit){
        try {
            const tweet=await Tweet.find().skip(offset).limit(limit);    //skip for offest and limit to put a limit
            return tweet;
         } catch (error) {
             console.log(error);
         }
    }
}

export default TweetRepository;