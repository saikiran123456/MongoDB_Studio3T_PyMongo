db.getCollection("posts").find()

//Let's now try "deleteOne" and "deleteMany" methods in action. 


// insert dummy documents first
// insertOne({postId: NumberInt(1111)})
// And in order to do that let me insert a couple of new documents into the "posts" collection.
//Here instead of "findOne". I'll use "insertOne" and insert document only with "postId".
//And here 4 ones i.e   {postId: NumberInt(1111)}, It is "postId" for the new document.
db.getCollection('posts').insertOne({postId: NumberInt(1111)})
// output
//{
//    "acknowledged" : true,
//    "insertedId" : ObjectId("639c844da7bdc0a729316e2c")
//}



// Insert 2 more documents into the collection
db.getCollection('posts').insertOne({postId: NumberInt(2222)})
db.getCollection('posts').insertOne({postId: NumberInt(3333)})
db.getCollection("posts").find()
// Output: Now +2 documents got added in collection with 10 documents in total


// deleteOne()
//Let's first delete this one with this "postId": 1111
db.getCollection('posts').deleteOne({postId: 1111})
// O/p:
//{
//    "acknowledged" : true,
//    "deletedCount" : 1.0
//}
db.getCollection("posts").find()




// deleteMany() we need to use $exists operator
//Now let's delete those two documents. With postId : 2222 and 3333
//Use "deleteMany" method and delete all documents that don't have "title" field. 
// find the documents
db.getCollection('posts').find({title: {$exists: false}})
//{
//    "_id" : ObjectId("639c8528a7bdc0a729316e2d"),
//    "postId" : NumberInt(2222)
//}
//{
//    "_id" : ObjectId("639c852aa7bdc0a729316e2e"),
//    "postId" : NumberInt(3333)
//}
// Now delete the above 2 documents
db.getCollection('posts').deleteMany(
    {title: {$exists: false}}
)
// {
//    "acknowledged" : true,
//    "deletedCount" : 2.0
//}

db.getCollection('posts').find({title: {$exists: false}})
// No documents!

db.getCollection('posts').find({})
// Now we have 7 documents only!



//let's move on to the last section in this course where I will shortly overview some advanced MongoDB features.



