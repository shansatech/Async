const posts = [
    { Title: "Atomic Habits", Author: "James Clear" },
    { Title: "Attitude is everything", Author: "Teff Keller" }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `${post.Title} \n`;
        });
        console.log(output)
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve()
            } else {
                reject('Error: Something went wrong')
            }
        }, 2000)
    })
}

async function init() {
    await createPost({ Title: "The Power Of Subconsious Mind", Author: "Dr Joseph Murphy" })

    getPosts();
}

init()