// Step 1 - declaring and initializing posts array
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// Step - 2 Loop over the elements of the posts array inside the getPosts function to get all the posts with a time delay of 1000 milliseconds( 1 second)
function getPosts () {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} : ${post.body}</li>`;
        });
        // document.body.innerHTML = output;
        document.getElementById('output').innerHTML= output;
    }, 1000);
}

// Step 3 - Create a createPost function that returns a Promise. Promise object consumes an executor function that takes resolve and reject as parameters
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if(!error) {
                resolve();
            } 
            else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });  
}

// Step 4 - create a post
// This goes for a single promise
createPost({title: 'Post Three', body: 'This is post Three'})
            .then(getPosts)
            .catch(err => console.log(err));
//----------------------------------------
// Step 5 - Let's say if we have a lot of promises, Promise.all, allows to handle all promises together. Promise.all(takes in array of promises)

const promise1 = Promise.resolve('Hello World');
const promise2 = 21;
// Note: It will take however long the longest promise is to return all promises
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 2000, 'Good Bye'));

// // Step 6 - Promise.all() returns and array of values, we print them using .then() method
// Promise.all([promise1, promise2, promise3])
//                 .then(values => console.log(values))
//                 .catch(err => console.log(err));

//------------------------------------------

// Step - 7 Using an fetch API to get users from https://jsonplaceholder.typicode.com/ and fetch data
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json());    // first .then() is to format the response to json

Promise.all([promise1, promise2, promise3, promise4])
                .then(values => console.log(values));


