<script>
  import "../app.css";
  import "carbon-components-svelte/css/white.css";
</script>

<slot />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
