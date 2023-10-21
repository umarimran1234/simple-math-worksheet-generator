<script lang="ts">
    import {onMount} from 'svelte';

    import { slide } from 'svelte/transition';

    import { base } from '$app/paths';

    // SMUI TopAppBar
    import type {TopAppBarComponentTopDev} from '@smui/top-app-bar';
    import TopAppBar, {Row, Section, Title, AutoAdjust} from '@smui/top-app-bar';

    // SMUI IconButton
    import IconButton from '@smui/icon-button';

    // SMUI Drawer
    import Drawer, {AppContent, Content, Header, Title as DrawerTitle, Subtitle as DrawerSubtitle, Scrim, } from '@smui/drawer';
	  import { LargeScreenMinWidth } from '$lib/constants/AppConstants';

    // theme toggle
    import { appThemeStore } from '$lib/stores';

    // app function select
    import { AppFunctionSelect } from '../app-controls/function-select';
		
    let topAppBar: TopAppBarComponentDev;

    // let materialThemeHerf = 'https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0-beta.14/themes/material.min.css';
    // let materialDarkThemeHerf = 'https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0-beta.14/themes/material-dark.min.css';

    let materialThemeHerf = "smui.min.css";
    let materialDarkThemeHerf = "smui-dark.min.css";

    // onMount(() => {
    //     $appThemeStore = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // });

    const  toggleMode = () => {
      // console.log('current $appThemeStore: ', $appThemeStore);
      appThemeStore.set(!$appThemeStore);
    }

    let screenWidth;

    let drawerOpen: boolean = true;
    const toggleDrawer = () => {
      drawerOpen = !drawerOpen;
    };
</script>

<svelte:window bind:innerWidth={screenWidth} />

<svelte:head>  
  {#if !$appThemeStore}
    <link rel="stylesheet" href="{base}/{materialThemeHerf}" media="print" />
    <link rel="stylesheet" href="{base}/{materialDarkThemeHerf}" media="screen" />
  {:else}
    <link rel="stylesheet" href="{base}/{materialThemeHerf}" />
  {/if}

</svelte:head>


  <TopAppBar bind:this="{topAppBar}" variant="fixed" dense >
  <!-- <TopAppBar bind:this="{topAppBar}" variant="fixed" > -->
    <Row>
      <Section>
        <IconButton class="material-icons" 
          on:click="{toggleDrawer}">menu</IconButton>
        <Title></Title>

        {#if screenWidth >= LargeScreenMinWidth}
          <AppFunctionSelect />
        {/if}

        <slot name="topAppBar" />
      </Section>
      <Section align="end" toolbar>
        <IconButton class="material-icons"
          on:click="{toggleMode}"
          aria-label="{$appThemeStore ? 'Light theme' : 'Dark theme'}"
          title="{$appThemeStore ? 'To dark theme' : 'To light theme'}">
            {$appThemeStore ? 'dark_mode' : 'light_mode'}
        </IconButton>
      </Section>
    </Row>
  </TopAppBar>


<AutoAdjust {topAppBar}>
    {#if screenWidth >= LargeScreenMinWidth}
      <Drawer class="nonPrintable" variant="dismissible" fixed={false} bind:open={drawerOpen} style="z-index:auto;">
          <Content class="">
            <div class="columns margins ">
              <slot name="sideBar" />
            </div>         
          </Content>
      </Drawer>
    {/if}
    

    <!-- <Scrim fixed={false} /> -->
    <AppContent class="app-content">    
        <main class="main-content">
          {#if screenWidth < LargeScreenMinWidth }
            <AppFunctionSelect />

            <div style="margin-left:0.5em" class="nonPrintable" transition:slide>
              <details class="mdc-typography--subtitle1"
                style="margin-left:0.5em; padding-top:0.5em" bind:open={drawerOpen}>
                  <summary>Worksheet Generator</summary>
                  <slot name="sideBar" />
              </details>
            </div>
          {/if}
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
