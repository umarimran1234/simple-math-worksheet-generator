<script lang="ts">
    import "carbon-components-svelte/css/g10.css";
    
    import { Accordion, AccordionItem } from "carbon-components-svelte";

    import { 
        NumberSequenceWorksheetGeneratorForm,
        NumberSequencePageConfigControlPanel 
    } from "$components/number-sequence/controls";
</script>

<body>
    <div class=wrapper>
        <!-- side menu -->
        <aside class="sideNav">
            <!-- worksheet generator form -->
            <NumberSequenceWorksheetGeneratorForm />
        </aside>

        <!--main content-->
        <main class="main-content">
            <div class="main-content-wrapper">
                <div class="main-content-page-layout">
                    <NumberSequencePageConfigControlPanel />
                </div>

                <!-- display pages content -->
                <div class="main-content-printable-area">
                    <slot/>
                </div>

                <div class="main-content-worksheet-in-json">
                    <Accordion>
                        <AccordionItem title="Worksheet in Json">
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
        flex: 1 0 13%;
        max-width: 500px;
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