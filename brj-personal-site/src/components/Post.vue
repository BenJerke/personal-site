<template>
  <div id="post" v-if="postSrc"> 
       <zero-md id="mdr" :src="postSrc" ></zero-md>          
  </div>
</template>

<script>

export default {
    name: 'blog-post',
    props:['postSrc'],
    // data(){
    //     return {
    //         postString: this.postSrc,
    //     }        
    // }

}
</script>

<style>
#post{
    display: flex;
    justify-content: flex-start;    
}

#mdr {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px;
}



</style>