<script lang='ts'>
    // import stores
    import { worksheetDataJsonStore } from '$stores/worksheet-data-stores';
</script>

<textarea bind:value={$worksheetDataJsonStore} class="worksheetJsonTextArea" />

<style>
    .worksheetJsonTextArea {
        width: 100%;
        height: 200px;
    }
</style>