<script lang="ts">
  export let title = "Example #1";
  import {
    Button,
    Column,
    Row,
    TextInput,
    TooltipIcon,
    Tile,
  } from "carbon-components-svelte";
  import EditIcon from "carbon-icons-svelte/lib/Edit.svelte";

  let isEdit = false;

  function titleClick() {
    isEdit = true;
  }

  function titleSave() {}
</script>

<Row>
  <Column>
    {#if !isEdit}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <h1 class="font-sans text-4xl font-light" on:click={titleClick}>
        {title}
      </h1>
    {:else}
      <TextInput
        hideLabel
        labelText="Title"
        placeholder="Exam title"
        bind:value={title}
        class="font-sans text-4xl font-light bg-transparent pl-0 pt-0 align-top border-none "
        size="xl"
        on:blur={() => {
          isEdit = false;
        }}
      />
    {/if}
  </Column>
</Row>
