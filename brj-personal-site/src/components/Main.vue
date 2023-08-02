<template>
      <main> 
          <section class="post-window">
              <!-- 
                  loop posts here, per what we get back from our server, which'll get called by our parent component.
               which depends on which view we're in.
                -->
              <Post />
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
        justify-content: flex-start;
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