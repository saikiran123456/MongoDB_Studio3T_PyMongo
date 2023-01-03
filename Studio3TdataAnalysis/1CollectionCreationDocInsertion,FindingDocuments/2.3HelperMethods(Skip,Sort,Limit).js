db.getCollection("posts").find({})


        //2.Limit will limit number of the resulting documents 
//In the limit you should simply pass a number.
//For example "limit(2)".And this will limit number of the documents in the result to 2.
db.getCollection('posts').find({}).limit(2);



        //3.skip will skip certain amount of the documents.
//Skip same as with limit you pass a number and you will simply skip certain number of the documents.
//For example five or three.
db.getCollection('posts').find({}).skip(3);


    //1.Sort will sort resulting documents.
//You can sort documents by certain field and you can use either ascending(use 1) or descending(use -1) sort
// "sort" requires an object as a value. And here in the object you need to pass key-value pair.
// Let's suppose that I want to sort by "comments" field.
db.getCollection('posts').find({}).sort({comments: 1});
// All the Documents sorted in Ascending based on Comments values

db.getCollection('posts').find({}).sort({comments: -1});
// All the Documents sorted in Descending based on Comments values



//Please try to sort by title in ascending order.   Starting a,b,c...z
db.getCollection('posts').find({}).sort({title: 1});



// NOTE:
// By default documents are sorted by "_id" and you may notice that each "ObjectID" for the next document is larger than previous "ObjectID".




// Please use simultaneously two methods "sort" and "skip". 
// "skip" two elements and "sort" by "shared" field in Ascending order
db.getCollection('posts')
    .find({})
    .skip(2)
    .sort({shared: 1});
    
    
// let's summarize.
//There are three helper methods for "find" method.
//They are skip, sort and limit.
//And you can use them to limit numbers of documents, to skip some documents and to sort documents.
    
// let's move on to the next module section where we will talk about update operations.
    
  
