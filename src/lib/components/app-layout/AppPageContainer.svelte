<script lang="ts">
    import {onMount} from 'svelte';

    // SMUI TopAppBar
    import type {TopAppBarComponentTopDev} from '@smui/top-app-bar';
    import TopAppBar, {Row, Section, Title, AutoAdjust} from '@smui/top-app-bar';

    // SMUI IconButton
    import IconButton from '@smui/icon-button';

    // SMUI Drawer
    import Drawer, {AppContent, Content, Header, Title as DrawerTitle, Subtitle as DrawerSubtitle, Scrim, } from '@smui/drawer';

    let topAppBar: TopAppBarComponentDev;

    let darkTheme: boolean = false;
    let materialThemeHerf = 'https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0-beta.14/themes/material.min.css';
    let materialDarkThemeHerf = 'https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0-beta.14/themes/material-dark.min.css';

    $: modeLabel = `switch to ${darkTheme ? 'light' : 'dark'} mode`;

    // This icon represents the mode to which the user can switch.
    $: modeIcon = darkTheme ? 'light_mode' : 'dark_mode';

    onMount(() => {
        darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const toggleMode = () => (darkTheme = !darkTheme);

    let drawerOpen: boolean = true;
    const toggleDrawer = () => (drawerOpen = !drawerOpen);
</script>

<svelte:head>
  {#if darkTheme === undefined}
  <link
    rel="stylesheet"
    href="{materialThemeHerf}"
    media="(prefers-color-scheme: light)"
  />
  <link
    rel="stylesheet"
    href="{materialDarkThemeHerf}"
    media="screen and (prefers-color-scheme: dark)"
  />
  {:else if darkTheme}
    <link rel="stylesheet" href="{materialThemeHerf}" media="print" />
    <link rel="stylesheet" href="{materialDarkThemeHerf}" media="screen" />
  {:else}
    <link rel="stylesheet" href="{materialThemeHerf}" />
  {/if}
</svelte:head>


  <TopAppBar bind:this="{topAppBar}" variant="fixed" dense >
    <Row>
      <section class="">
        <IconButton 
          class="material-icons"
          on:click="{toggleDrawer}"
        >menu</IconButton>
        <title>Standard</title>
      </section>
      <section class="">
        <IconButton
          aria-label="{modeLabel}"
          class="material-icons"
          on:click="{toggleMode}"
          title="{modeLabel}"
        >
          {modeIcon}
        </IconButton>
      </section>
      <section class="" align="end" toolbar>
          <slot name="topAppBar" />
      </section>
    </Row>
  </TopAppBar>


<AutoAdjust {topAppBar}>    
    <Drawer class="nonPrintable" variant="dismissible" fixed={false} bind:open={drawerOpen} style="z-index:auto;">        
        <Content class="">            
              <slot name="sideBar" />            
        </Content>
    </Drawer>
    

    <!-- <Scrim fixed={false} /> -->
    <AppContent class="app-content">    
        <main class="main-content">          
          <slot name="config" />
          <slot name="content" />
        </main>
    </AppContent>
</AutoAdjust>

<style>
    * :global(.app-content) {
        flex: auto;
        overflow: auto;
        position: relative;
        flex-grow: 1;
    }

    @media print {
      .app-content {
        margin-left: 0 !important;
        margin-right: 0 !important;
        display: contents !important;        
      }

      .mdc-drawer-app-content {
        margin-left: 0 !important;
        margin-right: 0 !important;
        display: contents !important;
      }
    }
</style>