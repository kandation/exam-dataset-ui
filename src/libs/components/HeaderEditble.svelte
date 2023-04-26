<script lang="ts">
  export let title = "Example #1";
  import { TooltipIcon } from "carbon-components-svelte";
  import EditIcon from "carbon-icons-svelte/lib/Edit.svelte";

  let isEdit = false;
</script>

<span>
  {#if !isEdit}
    <h1 class="inline">{title}</h1>
  {:else}
    <span>dasd</span>
  {/if}
  <TooltipIcon
    tooltipText="Top start"
    direction="top"
    align="start"
    icon={EditIcon}
    inlist
    on:click={() => {
      isEdit = !isEdit;
    }}
  />
</span>
n