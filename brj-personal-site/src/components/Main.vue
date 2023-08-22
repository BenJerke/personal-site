<template>
      <main> 
          <section class="post-window">

                <!-- 

                v-for posts based on post array, to be fetched via API call.
                bind each postSrc to the link on each post in the post array. 
                for now, let's use Google Drive.  
                also... container required here. let's not be exposing my credentials.
                
                -->
              <Post postSrc="/test/test.md" />
              <span>Previous Posts (not relevant yet)</span>
          </section>
      </main>
</template>

<script>
import Post from '@/components/Post';

export default {
    name: "main-display",
    props: ['posts'], 
    components:{
        Post
    },
    data(){
        return{
            testPost: "",
        }
    }
}
</script>

<style>

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
</style>