const PATH = './src/script/json/Movie.json';

const fs = require('fs');

class Post{
    get(){
        // get posts
        return this.readData()
    }
    getIndividualBlog(postId){
        // get one block post
        const posts = this.readData();
       const foundPost = posts.find((singlePost) => singlePost.id == postId)
        return foundPost
    }
    add(newMovie){
        // add new post
        let currentPost = this.readData();
        currentPost.unshift(newMovie);
        this.writeData(currentPost);
    }
    readData(){
        let rawdata = fs.readFileSync(PATH)
        let movie = JSON.parse(rawdata);
        return movie
    }
    writeData(rawdata){
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH,data)
    }
}

module.exports = Post;