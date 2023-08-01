<template>
  <section class="left">
      <h1>Left Side Panel</h1>
      <h4>links to projects go here</h4>
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
</style>