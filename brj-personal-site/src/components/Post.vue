<template>
  <div id="post"> 
       <zero-md id="mdr" v-if="postSrc" :src="postSrc" ></zero-md>
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
  padding-bottom: 20px;
  padding-top: 20px;
}
.spacer{
  padding: 10px;
}



</style>