<script lang='ts'>
    // import stores
    import { twoNumbersWorksheetDataJsonStore } from '$stores/two-numbers/two-numbers-worksheet-data-stores';
</script>

<textarea bind:value={$twoNumbersWorksheetDataJsonStore} class="worksheetJsonTextArea" />

<style>
    .worksheetJsonTextArea {
        width: 100%;
        height: 200px;
    }
</style>