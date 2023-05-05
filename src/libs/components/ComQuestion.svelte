<script lang="ts">
  export let text = "Question";
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

<TextInput
  hideLabel
  labelText="Title"
  placeholder="Exam title"
  bind:value={text}
  class="font-sans text-4xl font-light bg-transparent pl-0 pt-0 align-top border-none "
  size="xl"
  on:blur={() => {
    isEdit = false;
  }}
/>
