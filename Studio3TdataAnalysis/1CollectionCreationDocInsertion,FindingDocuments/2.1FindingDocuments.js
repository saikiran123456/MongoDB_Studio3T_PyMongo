
// Section 6: Finding Documents (19min)
// - Find Methods find() and findOne()

// find({Query})  Method
db.getCollection("posts").find({});  //find Method by default (It will show all the documents in the collection 'posts'

// findOne({Query})  Method
db.getCollection("posts").findOne({});




// Let's find specific document by it's "postId".
// I'll try to find this document with "postId" 3015
db.getCollection("posts").findOne({postId: 3015});  // or you can use postId: NumberInt(3015)



// Please find one document that has two comments
db.getCollection("posts").findOne({comments: 2})

// Please find document that has 0 comments
db.getCollection("posts").find({comments: 0})


// Please find all documents that were created by Emily Watson.
db.getCollection("posts").find({ "author.name" : "Emily Watson"});  //  if you want to access embedded property you need to add double quotes here, around the fields


// Please find all documents where "tags" contains "programming" string.
db.getCollection("posts").find({ tags : "programming"});  //You see that "tags" is an array, array of strings.


// It means that you can easily use such queries to find documents by array elements, by specific values or by values of the nested fields.



