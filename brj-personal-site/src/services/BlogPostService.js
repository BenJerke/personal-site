import axios from "axios";

const blogApi = axios.create({
    baseURL: 'http://localhost:8080'
});


export default{
    getTenMostRecentPosts(){
        //stub method here.
    },
    getPostById(postId){
        return blogApi.get(`/posts/${postId}`)
    }


}