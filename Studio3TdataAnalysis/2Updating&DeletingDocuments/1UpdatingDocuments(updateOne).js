db.getCollection("posts").find({})


// updateOne({query},{update},{options})

// updateOne with $set operator
// Let's take 2nd document, for example "postId" 2618 and then let's set "shared" to "true".
// Now it is "false".
db.getCollection("posts").findOne({postId: 2618})
db.posts.updateOne(
    {postId: 2618},
    {$set: {shared: true}})
// Output:
//{
//    "acknowledged" : true,
//    "insertedId" : null,
//    "matchedCount" : 1.0,    It means one document found
//    "modifiedCount" : 1.0,   It means that one document is updates
//    "upsertedCount" : 0.0
//}

// Verify the Output:
db.getCollection("posts").findOne({postId: 2618})




// Please find document with "postId" 1151 and change it's title. 
// Title should be: "What is the average salary of the senior frontend developer?"
db.getCollection("posts").findOne({postId: 1151})
db.posts.updateOne(
    {postId: 1151},
    {$set: {title: "What is the average salary of the 'senior' frontend developer"}}
);
// Sucessfully Update:
//{
//    "acknowledged" : true,
//    "insertedId" : null,
//    "matchedCount" : 1.0,
//    "modifiedCount" : 1.0,
//    "upsertedCount" : 0.0
//}
db.getCollection("posts").findOne({postId: 1151})






// updateMany() with $unset operator. 
// $unset deletes certain field.
// let's for example delete "tags" field here in this document where "tags" array is empty.
// And let's for example delete "tags" field here in this document where "tags" array is empty.
// Let's first find all documents with empty "tags" array. "tags" equal to empty array [].
db.getCollection("posts").findOne({tags: []});

//  let's instead of "updateOne" use "updateMany". And we will simply $unset "tags" field. 
// Instead of string simply pass 1.
db.posts.updateMany(
    {tags: []},
    {$unset: {tags: 1}}
)
// Output: there are actually 2 documents with empty tags
//{
//    "acknowledged" : true,
//    "insertedId" : null,
//    "matchedCount" : 2.0,
//    "modifiedCount" : 2.0,
//    "upsertedCount" : 0.0 
//}
db.getCollection("posts").findOne({tags: []});
// Output:  NULL (we got null means no document with empty array)

db.getCollection("posts").findOne({postId: 2618});  // No tags array in this document now!



// updateOne() with $inc increment operator
// Please use $inc operator and increment number of the comments in document with postId = 8451 
// Increment this number by one.
db.getCollection("posts").findOne({postId: 8451});  // Currentlyy it has Comments: 2.0

db.posts.updateOne(
    {postId: 8451},
    {$inc : {comments: 1}}
)
db.getCollection("posts").findOne({postId: 8451});
// Output :
// It got updated "comments" : 3.0




// That is a short overview of the update operators
// and in the next section we will discuss delete methods and will delete some of the documents in our collection.


