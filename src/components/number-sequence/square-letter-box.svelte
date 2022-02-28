<script lang="ts">

    export let width = '300px';
	export let height = '300px';
    export let letterBoxMargin = '0';
	export let fontSize = '60px';

    export let letter = '';
</script>

<div class="letterBox" style="--height:{height};--width:{width};--letterBoxMargin:{letterBoxMargin};--fontSize:{fontSize}">
	{@html letter}
</div>

<style>
    div.letterBox {
		width: var(--width);
		height: var(--height);
		margin: var(--letterBoxMargin);
		padding: 0px;
		border: 1px solid;
		/* border-radius: 5px; */
		font-size: var(--fontSize);

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>