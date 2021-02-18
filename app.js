const express = require('express');
const app = express();
const Post = require('./src/api/models/posts');
const postsData = new Post();




app.use((req,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/api/post',(req,res)=>{
   
    res.status(200).send(postsData.get())
});
app.get('/api/post/:post_id', (req,res)=>{
    const postId = req.params.post_id;
    findPost = postsData.getIndividualBlog(postId);
    if(findPost){
        res.status(200).send(findPost);
    } else{
        res.status(404).send('Not Found')
    }
    
})

app.listen(3000, () => console.log('listining on http://localhost:3000'))