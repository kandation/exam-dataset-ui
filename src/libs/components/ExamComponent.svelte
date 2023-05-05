<script lang="ts">
  import { QuestionType, type ISubContent } from "../types/basic.type";
  import ComQuestion from "./ComQuestion.svelte";
  import TypeQuestion from "./ComQuestion.svelte";

  export let component: ISubContent[];
</script>

{#each component as comp, ci}
  <div class="w-100 bg-amber-200 border-2 border-indigo-600 mb-1">
    {#if comp.type === QuestionType.QUESTION}
      <ComQuestion text={comp.data}>
 
      </ComQuestion>
    {:else if comp.type === QuestionType.INSTRUCTION}
      <svelte:self component={comp.data} />
    {/if}
  </div>
{/each}
