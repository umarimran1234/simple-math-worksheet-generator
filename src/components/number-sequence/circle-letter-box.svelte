<script lang="ts">
    export let size = "20mm";
    export let backgroundColor = "#bbb";
    export let borderRadius = "50%";
    export let fontSize = "50mm";

    export let letter = "";
</script>

<div class="circle" 
    style="--size:{size};--backgroundColor:{backgroundColor};--borderRadius:{borderRadius};--fontSize:{fontSize};">
    {@html letter}
</div>

<style>
    .circle {
        height: var(--size);
        width: var(--size);
        background-color: var(--backgroundColor);
        border-radius: var(--borderRadius);
        display: inline-block;
        font-size: var(--fontSize);
        display: inline-grid;
        align-items: center;
        justify-content: center;
    }
</style>