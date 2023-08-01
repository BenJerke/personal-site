<template>
  <section class="right">
      <h1>Right Side Panel</h1>
      <h4> list of blog posts goes here </h4>
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