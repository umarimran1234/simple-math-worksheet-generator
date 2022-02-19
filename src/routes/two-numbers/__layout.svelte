<script lang="ts">
    import "carbon-components-svelte/css/g10.css";

    import { Accordion, AccordionItem } from "carbon-components-svelte";
    
    // import controls components
    import PrintButton from '$components/config/print-button.svelte';
    
    // import TwoNumbersWorksheetGeneratorForm  from '$components/two-numbers/controls/two-numbers-worksheet-generator-form.svelte';
    // import TwoNumbersPageConfigControlPanel from '$components/two-numbers/controls/two-numbers-page-config-control-panel.svelte';
    // import TwoNumbersWorksheetDataJsonDisplay from '$components/two-numbers/controls/two-numbers-worksheet-data-json-display.svelte';
    // import TwoNumbersWorksheetQuestionCountDisplay from '$components/two-numbers/controls/two-numbers-worksheet-question-count-display.svelte';

    import { 
        TwoNumbersWorksheetGeneratorForm,
        TwoNumbersPageConfigControlPanel,
        TwoNumbersWorksheetDataJsonDisplay,
        TwoNumbersWorksheetQuestionCountDisplay
    } from '$components/two-numbers';
</script>

<body>
    <div class=wrapper>
        <!-- side menu -->
        <aside class="sideNav">
            <!-- worksheet generator form -->
            <TwoNumbersWorksheetGeneratorForm />

            <!-- print button -->
            <PrintButton />
            <!-- <Button on:click={(e) => {e.preventDefault(); window.print()} }>Print Worksheet</Button> -->
        </aside>

        <!--main content-->
        <main class="main-content">
            <div class="main-content-wrapper">
                <div class="main-content-page-layout">
                    <TwoNumbersPageConfigControlPanel />
                    <TwoNumbersWorksheetQuestionCountDisplay />
                </div>

                <!-- display pages content -->
                <div class="main-content-printable-area">
                    <slot/>
                </div>

                <div class="main-content-worksheet-in-json">
                    <Accordion>
                        <AccordionItem title="Worksheet in Json">
                            <TwoNumbersWorksheetDataJsonDisplay />
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </main>
    </div>
</body>


<style>
    body {
        height: 100vh;
    }
    .sideNav {
        flex: 1 0 10%;
        max-width: 400px;
        overflow-y: auto;
    }
    .wrapper {
        display: flex;
        height: 100%;
    }
    .main-content {
        display: block;
        width: 100%;
        height: 100%;
    }
    .main-content-wrapper {
        display: flex;
        flex-direction: column;
        margin-left: 10mm;
    }

    @media print {
        
        .sideNav {
            visibility: hidden;
        }

        .main-content-page-layout{
            display: none;
            visibility: hidden;
            width: 0%;
            height: 0%;
        }

        .main-content-worksheet-in-json {
            display: none;
            visibility: hidden;
            width: 0%;
            height: 0%;
        }

        .main-content-wrapper {
            margin: 0mm;
        }
    }
</style>