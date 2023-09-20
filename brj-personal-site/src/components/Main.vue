<template>
      <main> 
          <section class="post-window" v-if="loaded">
                <Post v-for="postString, index in posts" :key="index" :postSrc="postString"/>                
              <span>Previous Posts (not relevant yet)</span>
          </section>
      </main>
</template>

<script>
import Post from '@/components/Post.vue';
import fb from '@/services/FirebaseAppConfig.js'; 
import {getStorage, ref, list, getDownloadURL} from 'firebase/storage';

const storage = getStorage(fb.app); 

export default {
    name: "main-display",
    components:{
        Post
    },
    data(){
        return{
            testPost: "", 
            posts: [],
            loaded: false,     
        }
    },
    created() {
        let postsRef = ref(storage, 'posts');         
        list(postsRef)
            .then(data => {                
                data.items.forEach(item => {          
                            
                    // getDownloadURL(item)
                    //     .then(link => {
                    //         this.posts.push(link);
                    //     })
                    //     .catch(error =>{
                    //         console.log(error);
                    //     });
                    //console.log(item.toString());
                    getDownloadURL(item)
                        .then(url =>{
                            this.posts.push(url);
                        })
                    
                });
            })
            .catch(error => {
                console.log(error);
            })
            .finally(this.loaded = true)
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