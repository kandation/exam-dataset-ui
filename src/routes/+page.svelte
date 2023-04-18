<script lang="ts">
  const elements: string[] = [];
  let text = "";
</script>

<div class="mx-auto container bg-slate-600 p-3">
  <div id="box">
    {#each elements as el}
      {el}
    {/each}
    <h1>[i] {text}</h1>
    <div><input type="text" bind:value={text} /></div>
  </div>
  <div>
    <div class="w-10 h-10 bg-orange-400 text-center rounded-md">+</div>
  </div>
</div>
