const posts = [
    { Title: "Atomic Habits", Author: "James Clear" },
    { Title: "Attitude is everything", Author: "Teff Keller" }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `${post.Title} \n`;
        });
        console.log(output)
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 2000)
}

createPost({ Title: "The Power Of Subconsious Mind", Author: "Dr Joseph Murphy" }, getPosts)