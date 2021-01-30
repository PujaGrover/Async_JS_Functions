// Step 1- Declaring and initializing posts array, to simulate blog post working
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// Step - 2 Loop over the elements of the posts array inside the getPosts function to get all the posts with a time delay of 1000 milliseconds( 1 second)
function getPosts () {
    setTimeout(() => {
        let output = '';
        // Higher order forEach method to loop over the array of posts
        posts.forEach((post) => {
            output += `<li>${post.title} : ${post.body}</li>`;
        });
        // Showing the output on html page in the browser
        // document.body.innerHTML = output;
        document.getElementById('output').innerHTML= output;
    }, 1000);
}
//--------------------------------------------------------
// Step 3  - Calling the getPosts function into action
getPosts();

//---------------------------------------------------------------
// Step 4 & 5 are used to exhibit that getposts() method, if called independent of createPost() might not render the newly added post. Hence it stress on the need to use callback functions as demonstrated in Step 6
// // Step 4 - Create a createPost function, simulate a delay of 3 seconds using setTimeout Node API
// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 3000);
// }

// // Step 5 - Creating a post
// createPost({title: 'Post Three', body: 'This is post three'});
// getPosts();

//----------------------------------------------------------------
// // Step 6 - Comment out 4 & 5 to use callback function to post all the 3 posts

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 3000);
// }

// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

//-------------------------------------------------------