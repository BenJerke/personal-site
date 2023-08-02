<template>
  <div id="post"> 
       <zero-md src="/test/test.md">
      </zero-md>  
 
  </div>
</template>

<script>

export default {
    name: 'blog-post',
    props:['postData'],
    // data(){
    //     return {
    //         postContent: marked.parse(this.postData),
    //     }        
    // }
    // My server needs to throw a string of markdown at me. 
}
</script>

<style>
#post{
    display: flex;
    justify-content: flex-start;    
}


</style>