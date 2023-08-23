<template>
      <header>          
          <h1>Ben Jerke</h1>
          <span class="break"></span>
          <h4>Software developer based in Columbus, Ohio </h4>

      </header>
</template>

<script>
export default {
    name: "header-display",
}
</script>

<style>
    header{
        display: flex; 
        justify-content: flex-start;
        align-items: flex-end;
        flex-wrap: wrap;
        margin-bottom: 0%;
    }
    .break {
        flex-basis: 100%; 
        height: 0;
    }
    

</style>