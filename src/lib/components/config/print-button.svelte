<script lang='ts'>
    // import carbon icon svelte
    import Printer from "carbon-icons-svelte/lib/Printer.svelte";

    // import carbon components
    import { Button } from "carbon-components-svelte";

    // import stores
    import { pageSizeStore } from "$stores/page-size-stores";

    // import print utils
    import { triggerPrinter } from "$utils/print-utils";

</script>

<!-- print button -->
<Button on:click={(e) => {e.preventDefault(); triggerPrinter($pageSizeStore)}} icon={Printer} >Print Worksheet</Button>

