<script lang="ts">
  const elements: string[] = [];
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
  } from "carbon-components-svelte";

  import Add from "carbon-icons-svelte/lib/Add.svelte";
  import TextBold from "carbon-icons-svelte/lib/TextBold.svelte";
  import TextItalic from "carbon-icons-svelte/lib/TextItalic.svelte";
  import TextUnderline from "carbon-icons-svelte/lib/TextUnderline.svelte";
  import CategoryNew from "carbon-icons-svelte/lib/CategoryNew.svelte";
  import Edit from "carbon-icons-svelte/lib/Edit.svelte";

  let isSideNavOpen = false;
  let index: number = 1;

  function AddNewTopic() {}
</script>

<div class="container">
  <script>
  </script>

  <Header company="THP" platformName="ddd" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
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

  <Content>
    <Grid>
      <Row>
        <Column>
          <span>
            <h1 class="inline">EEXX</h1>
            <TooltipIcon
              tooltipText="Top start"
              direction="top"
              align="start"
              icon={Edit}
              inlist
            />
          </span>
        </Column>
      </Row>
      <Row
        ><Column
          ><Button
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
          /></Column
        ></Row
      >
      <Row>
        <Column sm={1} md={7} lg={10}>
          <ComboBox
            placeholder="Select contact method"
            items={[
              { id: "0", text: "Slack" },
              { id: "1", text: "Email" },
              { id: "2", text: "Fax" },
            ]}
          />
          <TextArea placeholder="Enter a description..." />
          {#each elements as el}
            {el}
          {/each}
          <h1>[i] {text}</h1>
          <div><input type="text" bind:value={text} /></div>

          <Button iconDescription="Tooltip text" icon={Add} />
        </Column>
        <Column sm={1} md={1} lg={2}>divsda</Column>
      </Row>
    </Grid>
  </Content>
</div>
