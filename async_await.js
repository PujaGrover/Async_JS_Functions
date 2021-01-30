// For Async await we need to have a function labeled as async

// declaring and initializing posts array
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// for each loop over the elements of the posts array inside the getPosts function
// with a time delay of 3000 milliseconds
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

// Create a createPost function
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });  
}

// Async - await
// await simply waits for an asynchronous process to complete

async function init() {
    await createPost({title: 'Post Three', body: 'This is post three'});

    getPosts();
}

init();

//--------------------------------------------------------

// Async - await with fetch (remember fetch returns a promise)
// async - keyword tells JavaScript that this function will run asynchronously
// await - keyword will tell the program to wait until the data has been resolved
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await res.json();  // formatting response to json format

    console.log(users);  // logging the data on the console

    // Once we get our users array containing multiple user data, we can extract that data and use it in our code for further processing or display it on the html page

    // Code below is using '.map(callback())' function to extract user name from each user object in the users array.
    document.getElementById('result').innerHTML = users.map((user) => user.name);

    // Code below is using '.map(callback())' function to extract user name and user phone number from each user object in the users array.
    document.getElementById('result').innerHTML = users.map((user) => `<li>${user.name} :   ${user.phone}</li>`)

}

fetchUsers();

//-----------------------------------------------------
