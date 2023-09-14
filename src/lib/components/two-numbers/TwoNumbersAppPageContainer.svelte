<script lang="ts">
    // import components
    import AppPageContainer from "$lib/components/app-layout/AppPageContainer.svelte";

    // import two numbers components
    import TopAppBar from "./TopAppBar.svelte";
    import SideBar from "./SideBar.svelte";
    import ConfigPanel from "./ConfigPanel.svelte";
    import TwoNumbersWorksheet from "./worksheet/TwoNumbersWorksheet.svelte";

    // import stores
    import {        
        twoNumbersQuestionConfigStore,
        twoNumbersQuestionHorizontalMethodStyleConfigStore,
        twoNumberQuestionColumnMethodStyleConfigStore,
        twoNumberWorksheetConfigStore,
        twoNumberWorksheetContainerStyleConfig,

        twoNumbersWorksheetDataWithPageSplitStore
    } from "$lib/stores/two-numbers";
	

    // import type { AppPageTopBarFunction } from '$lib/constants/AppConstants';
    // let topAppBarFunctions: AppPageTopBarFunction[] = [
    //     { iconButtonName: "check_circle", fn: generateWorksheet}, 
    //     { iconButtonName: "print", fn: printWorksheet}
    // ];
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
        <TwoNumbersWorksheet 
                worksheetPages={$twoNumbersWorksheetDataWithPageSplitStore}
                questionConfig={$twoNumbersQuestionConfigStore}
                columnMethodStyleConfig={$twoNumberQuestionColumnMethodStyleConfigStore}
                horizonalMethodStyleConfig={$twoNumbersQuestionHorizontalMethodStyleConfigStore}
                worksheetConfig={$twoNumberWorksheetConfigStore}
                worksheetCointainerStyleConfig={$twoNumberWorksheetContainerStyleConfig}
            />
    </span>
</AppPageContainer>