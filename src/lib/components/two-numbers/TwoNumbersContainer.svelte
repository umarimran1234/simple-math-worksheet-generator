<script>
    // stores import
    import { twoNumbersQuestionStyleConfigStore, twoNumbersWorksheetDataWithPageSplitStore } from '$stores/two-numbers';
    import { pageConfigStore } from '$stores/page-config-stores';
    import { pageSizeStore } from '$stores/page-size-stores';

    import AppPageContainer from "$components/app-layout/AppPageContainer.svelte";

    import { Accordion, AccordionItem } from "carbon-components-svelte";
    
    import { 
        TwoNumbersWorksheetGeneratorForm,
        TwoNumbersPageConfigControlPanel,
        TwoNumbersWorksheetDataJsonDisplay,
        TwoNumbersWorksheetQuestionCountDisplay
    } from '$components/two-numbers/controls';

    

    // import components
    import TwoNumbersQuestionPagesContainer from './two-numbers-question-pages-container.svelte';
</script>

<AppPageContainer>
    <span slot="sideNav">
        <!-- worksheet generator form -->
        <TwoNumbersWorksheetGeneratorForm />
    </span>

    <span slot="mainContentPageLayout">
        <TwoNumbersPageConfigControlPanel />
        <TwoNumbersWorksheetQuestionCountDisplay />
    </span>

    <span slot="mainContentPrintableArea">
        <TwoNumbersQuestionPagesContainer
            worksheets = { $twoNumbersWorksheetDataWithPageSplitStore }
            pageSize = { $pageSizeStore }
            pageConfig = { $pageConfigStore }
            twoNumbersQuestionStyleConfig = { $twoNumbersQuestionStyleConfigStore } 
        />
    </span>

    <span slot="mainContentDataJsonDisplay">
        <Accordion>
            <AccordionItem title="Worksheet in Json">
                <TwoNumbersWorksheetDataJsonDisplay />
            </AccordionItem>
        </Accordion>
    </span>
</AppPageContainer>