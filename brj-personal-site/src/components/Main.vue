<template>
      <main> 
          <h1>Main Content Here</h1>
          <section>
              <md-block src="">

              </md-block>
              <!-- 
                  This is where the stuff goes, once I figure out what it is.
                  Okay - let's say this is where I'd show a blog post. 
                  I'd need it to: 
                  - get a markdown file for the given post. 
                  - render markdown files somehow. 
                    - Figure out a way to put workable links inside markdown files (should be easy enough, right? it's all just posts, innit?)  
                  - scroll independently from the rest of the content on screen. 


               -->

          </section>
      </main>
</template>

<script>
export default {
    name: "main-display", 
}
</script>

<style>
    main{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>