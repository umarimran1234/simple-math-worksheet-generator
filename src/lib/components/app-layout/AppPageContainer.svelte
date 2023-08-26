<script>
</script>

<div class=wrapper>
    <!-- side menu -->
    <aside class="sideNav">
        <slot name="sideNav" />
    </aside>

    <!--main content-->
    <main class="main-content">
        <div class="main-content-wrapper">
            <div class="main-content-page-layout">
                <slot name="mainContentPageLayout" />
            </div>

            <!-- display pages content -->
            <div class="main-content-printable-area">
                <slot name="mainContentPrintableArea" />
            </div>

            <div class="main-content-worksheet-in-json">
                <slot name="mainContentDataJsonDisplay" />                
            </div>
        </div>
    </main>
</div>

<style>    
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
            width: 0%;
            height: 0%;
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

        .main-content, .main-content-wrapper {
            margin: 0mm;
            padding: 0mm;
        }
    }
</style>