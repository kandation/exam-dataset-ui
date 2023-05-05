<script lang="ts">
  let elements: ISubContent[] = [
    { id: 0, type: QuestionType.QUESTION, data: "Question1" },
    {
      id: 1,
      type: QuestionType.INSTRUCTION,
      data: [
        { id: 1.1, type: QuestionType.QUESTION, data: "HELLO" },
        { id: 1.2, type: QuestionType.QUESTION, data: "Q1.2" },
      ],
    },
  ];
  let text = "";
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SideNavDivider,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
    ComboBox,
    TextArea,
    Button,
    TooltipIcon,
    HeaderAction,
    HeaderPanelDivider,
    HeaderPanelLink,
    HeaderPanelLinks,
    HeaderUtilities,
  } from "carbon-components-svelte";

  import Add from "carbon-icons-svelte/lib/Add.svelte";
  import TextBold from "carbon-icons-svelte/lib/TextBold.svelte";
  import TextItalic from "carbon-icons-svelte/lib/TextItalic.svelte";
  import TextUnderline from "carbon-icons-svelte/lib/TextUnderline.svelte";
  import CategoryNew from "carbon-icons-svelte/lib/CategoryNew.svelte";
  import TrashCan from "carbon-icons-svelte/lib/TrashCan.svelte";
  import HeaderEditble from "../libs/components/HeaderEditble.svelte";

  let isSideNavOpen = false;
  let index: number = 1;

  function AddNewTopic() {}
  import { expoIn } from "svelte/easing";
  import { each } from "svelte/internal";
  import ExamComponent from "../libs/components/ExamComponent.svelte";
  import { QuestionType, type ISubContent } from "$type/basic.type";

  let isOpen = false;
  let selected = "0";
  let transitions = {
    "0": {
      text: "Default (duration: 200ms)",
      value: { duration: 200 },
    },
    "1": {
      text: "Custom (duration: 600ms, delay: 50ms, easing: expoIn)",
      value: { duration: 600, delay: 50, easing: expoIn },
    },
    "2": {
      text: "Disabled",
      value: false,
    },
  };

  $: lol = elements;
  function addQUestion() {
    elements = [
      ...elements,
      {
        id: elements.length,
        type: QuestionType.QUESTION,
        data: `QUESTION_${elements.length}`,
      },
    ];
  }

  $: m = 50;
  $: offset = 0;
</script>

<Header company="THP" platformName="ddd">
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <div class="absolute" style="top: {m - offset}px;">
    <Button kind="danger-tertiary" iconDescription="Delete" icon={TrashCan} />
  </div>
  <HeaderNav>
    <HeaderNavItem href="/" text="Link 1" />
    <HeaderNavItem href="/" text="Link 2" />
    <HeaderNavItem href="/" text="Link 3" />
    <HeaderNavMenu text="Menu">
      <HeaderNavItem href="/" text="Link 1" />
      <HeaderNavItem href="/" text="Link 2" />
      <HeaderNavItem href="/" text="Link 3" />
    </HeaderNavMenu>
    <HeaderNavItem href="/" text="Link 4" />
  </HeaderNav>
</Header>

<Content class="bg-gray-500 pl-0 pr-0">
  <Grid narrow={true} fullWidth class="bg-red-300" condensed>
    <Row>
      <Column lg={{ offset: 0 }} class="bg-blue-200">
        <Button
          kind="danger-tertiary"
          iconDescription="Delete"
          icon={TrashCan}
        />
      </Column>
      <Column>
        <Grid fullWidth class="bg-red-400">
          <Row>
            <Column sm={1} md={7} lg={10}>
              <HeaderEditble>x</HeaderEditble>
            </Column>
          </Row>
          {JSON.stringify(lol)}
          {#each Array(10) as a, i}
            {i}

            <p>
              <button
                type="button"
                class="p-1 border-1 bg-yellow-300"
                on:mouseover={(e) => {
                  console.log(e);
                  m = e?.clientY;
                  offset = e?.offsetY;
                }}>{m} DDDDDDDDDDDD</button
              >
            </p>
          {/each}
          <Row>
            <Column>
              <Button
                isSelected={index === 0}
                kind="ghost"
                iconDescription="New Instruction"
                icon={CategoryNew}
                on:click={() => (index = 0)}
              />
              <Button
                isSelected={index === 1}
                kind="ghost"
                iconDescription="Italicize"
                icon={TextItalic}
                on:click={() => (index = 1)}
              />
              <Button
                isSelected={index === 2}
                kind="ghost"
                iconDescription="Underline"
                icon={TextUnderline}
                on:click={() => (index = 2)}
              />
            </Column>
          </Row>
          <Row>
            <Column sm={1} md={7} lg={10}>
              <ExamComponent component={elements} />

              <ComboBox
                placeholder="Select contact method"
                items={[
                  { id: "0", text: "Slack" },
                  { id: "1", text: "Email" },
                  { id: "2", text: "Fax" },
                ]}
              />
              <TextArea placeholder="Enter a description..." />

              <h1>[i] {text}</h1>
              <div><input type="text" bind:value={text} /></div>

              <Button
                iconDescription="Tooltip text"
                icon={Add}
                on:click={addQUestion}
              />
            </Column>
            <Column sm={1} md={1} lg={2}>divsda</Column>
          </Row>
        </Grid></Column
      >
    </Row>
  </Grid>
</Content>
