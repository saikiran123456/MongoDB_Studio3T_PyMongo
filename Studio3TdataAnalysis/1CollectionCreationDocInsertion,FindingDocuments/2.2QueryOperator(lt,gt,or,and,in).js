db.getCollection("posts").find({})

// 25. LECTURE - Query Operators Overview
//For example $lt operator is used when you want to find all documents with certain value of the field that is less than specified value or greater than specified value ($gt).
//
//$and is used when you want to pass several conditions and only documents that match all conditions will be returned.
//
//If you use $or operator then documents that match any of the conditions will be returned back.


// 26. PRACTICE - Finding Documents with Query Operators
// $gt
// Let's find all documents that have non-zero number of comments. i.e greater than 0  // 4 documents should be returned back.
db.getCollection("posts").find({ comments : {$gt : 0}}); 



//  Please find all documents that have less than 5 comments.
// $lt
db.getCollection("posts").find({comments : {$lt : 5}});
// There are 5 documents which are less than 5 comments



// Now let's suppose that we want to find all documents that have less than 5 comments but greater than zero comments.
db.getCollection("posts").find({
    $and: [                             // This query operator needs an array as a value, array of conditions.
        {comments: {$lt: 5}},            //  I'll add two conditions to this array.
        {comments: {$gt: 0}}                               // First condition - {comments: {$lt: 5}}. Then comma and next condition {comments: {$gt: 0}}
                                            ]
})
// Got 2 Documents having 2 comments each(having greater than 0 and less than 5)



// Please use $or operator instead of $and and find all documents that are either shared, 
// where "shared" is "true" or have "programming" tag.
db.getCollection("posts").find({
    $or: [
        {shared: true},
        {tags: "programming"}
        ]
})
// we got 4 outputs, ($or operator will give either of condition to satisfy and displays the documents)



// $in operator
//Please use $in operator and this $in operator requires an array of elements as a value. And this operator is used for arrays.
//And it will find documents that have certain value in the array that exists in the list of the elements that you pass as a value to this $in operator.

// find documents where "tags" array contains either "programming" or "coding".
db.getCollection("posts").find({
    tags: {$in: [
        "programming", 
        "coding"
     ]}})
// output:
// there are 3 documents which contains 'programming' or 'coding'



//Now you know how to use query operators in the Queries.
//Now let's move on and next let's talk about sort, limit and skip helper methods.

