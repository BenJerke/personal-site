<template>
  <section class="right">
      <h1>Some of My Friends</h1>
      <a href="https://github.com/brandonmcmaster">Brandon McMaster</a>
      <a href="https://github.com/ATaylorN">Amanda Taylor</a>
      <a href="https://www.linkedin.com/in/thadosburndeveloper/">Thad Osburn</a>
  </section>
</template>

<script>
export default {
    name: "rightside-panel",
}
</script>

<style>
    section.right{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
</style>