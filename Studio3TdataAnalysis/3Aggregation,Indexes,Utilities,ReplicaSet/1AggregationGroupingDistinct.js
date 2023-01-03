db.getCollection("posts").find({})


// Aggregate Syntax


// {$group: {_id: "$author.name"}}
// let's find all different author names in the documents.  eg:    "author" : { "name" : "Mike Forester",
// use $group operator: Curly braces and here $group. Then colon and another object "_id", colon then in double quotes "$author.name"
db.posts.aggregate([
    {$group: {_id: "$author.name"}}])
// OutPut/ Result:
//{
//    "_id" : "Emily Watson"
//}
//{
//    "_id" : "Mike Forester"
//}
//{
//    "_id" : "Bob Hutchinson"
//}


//{$group: {_id: "$author.nickname"}}
// Let's change "author.name" to "author.nickname" and run this.
db.posts.aggregate([
    {$group: {_id: "$author.nickname"}}
])
// OutPut/ Result:
//{
//    "_id" : "mikef"
//}
//{
//    "_id" : "bob1995"
//}
//{
//    "_id" : "emily23"
//}



//{$group: {_id: "$comments"}}
//  I can change "author.nickname" to "comments" for example.
// now I will find all distinct values of the comments 
db.posts.aggregate([
    {$group: {_id: "$comments"}}
])
// Output/Result:
//    "_id" : NumberInt(3)
//}
//{
//    "_id" : NumberInt(2)
//}
//{
//    "_id" : NumberInt(0)
//}
//{
//    "_id" : NumberInt(10)
//}
//{
//    "_id" : NumberInt(25)
//}


//  let's move to the next section where we will talk about MongoDB Indexes
