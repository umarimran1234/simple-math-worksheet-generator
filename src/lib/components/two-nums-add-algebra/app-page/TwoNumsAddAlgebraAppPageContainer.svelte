<script lang="ts">
    // import components
    import AppPageContainer from "$lib/components/common/app-layout/AppPageContainer.svelte";

    // import two numbers components
    import TopAppBar from "./TopAppBar.svelte";
    import SideBar from "./SideBar.svelte";
    import ConfigPanel from "./ConfigPanel.svelte";
    import Worksheet from "./worksheet/Worksheet.svelte";

    // import stores
    import {        
        questionConfigStore,
        columnMethodStyleConfigStore,
        worksheetConfigStore,
        worksheetContainerStyleConfig,

        worksheetDataWithPageSplitStore
    } from "../stores";
</script>

<AppPageContainer>
    <span slot="topAppBar">
        <TopAppBar/>
    </span>

    <span slot="sideBar">
        <SideBar />
    </span>

    <span slot="config">
        <ConfigPanel />
    </span>

    <span slot="content">
        <Worksheet 
                worksheetPages={$worksheetDataWithPageSplitStore}
                questionConfig={$questionConfigStore}
                columnMethodStyleConfig={$columnMethodStyleConfigStore}
                worksheetConfig={$worksheetConfigStore}
                worksheetCointainerStyleConfig={$worksheetContainerStyleConfig}
            />
    </span>
</AppPageContainer>