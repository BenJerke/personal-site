<template>
  <section class="left">
      <h1>Projects</h1>
      <a href="https://github.com/BenJerke/2doku">Sudoku Thing</a>
      <a href="https://github.com/BenJerke/goldfish-brain">Goldfish Brain</a>
      <br>
      <h2>My Stack</h2>
      <span>Vue.js</span>
      <span>Java/SpringBoot</span>
      <span>JavaScript/Node.js</span>
      <span>PostgreSql</span>
      <span>Python 3</span>
      
  </section>
</template>

<script>
export default {
    name: "leftside-panel",
}
</script>

<style>
    section.left{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    section a{
        margin: 5px;
    }
    section span{
        margin: 5px;
    }
</style>