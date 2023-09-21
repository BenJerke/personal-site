<template>
      <main> 
          <section class="post-window" v-if="loaded">
                <Post v-for="postString, index in posts" :key="index" :postSrc="postString"/>
          </section>
      </main>
</template>

<script>
import Post from '@/components/Post.vue';
import fb from '@/services/FirebaseAppConfig.js'; 
import {getStorage, ref, list, getDownloadURL, getMetadata} from 'firebase/storage';

const storage = getStorage(fb.app); 

export default {
    name: "main-display",
    components:{
        Post
    },
    data(){
        return{
            testPost: "", 
            unsortedPosts: [],
            loaded: false,
            posts: []        
        }
    },
    methods:{
        async getPostsList(){
            let postsRef = ref(storage, 'posts');
            let postList = [];
            await list(postsRef)
                    .then(data => { 
                        console.log('setting post list to list() output')   
                        postList = data.items;
                                   
                    })
                    .catch(error => {
                        console.error(error); 
                    });
                console.log('returning post list array')
            return postList;  
        },

        async getListItemTimeCreated(data){
            let postPlusTimestamp = {
                url: await getDownloadURL(data), 
                timeCreated: await (await getMetadata(data)).timeCreated           
            }
            return postPlusTimestamp;  
        }, 
        compareTimestamps(a, b){
            console.log('sorting: ' + a.timeCreated + ' vs ' + b.timeCreated)
            if(a.timeCreated < b.timeCreated){
                return -1; 
            }
            if(a.timeCreated > b.timeCreated){
                return 1; 
            }
            return 0;
        }
        
    },    
    async created(){   
            console.log('running it.')
            this.getPostsList()
                .then(async posts => {
                    let i = 0;
                    while (this.unsortedPosts.length < posts.length){
                        this.unsortedPosts[i] = await this.getListItemTimeCreated(posts[i]); 
                        i++ 
                    }
                })
                .finally(() =>{
                    this.unsortedPosts.sort(this.compareTimestamps);
                    this.unsortedPosts.forEach(post=> {
                        this.posts.unshift(post.url); 
                    })
                    this.loaded = true; 
                })
 



        
        // postsPlusTimestamps.forEach( async element => {
        //     let url = await this.getDownloadURLForPost(element.storageReference); 
        //     console.log(url);
        //     this.posts.unshift(url);
        // });
        // console.log(this.posts);
        
    }    
}
</script>

<style scoped>

    .post-window::-webkit-scrollbar{
        display: none;
    }
    .post-window::-webkit-scrollbar-track-piece{
        display: none;
    }
    .post-window::-webkit-scrollbar-thumb{
        border-radius: 5rem;
    }
    main{
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        overflow-y: scroll;
        border: none;
        padding: 10px;     
        /* align-items: center; */        
    }
    main::-webkit-scrollbar{
        display: none;
    }
    main > section > div > zero-md > div.markdown-body > p {
        text-align: left;
    }
    .post-window{
        display: flex; 
        flex-direction: column;
        align-items: center;
    }
</style>