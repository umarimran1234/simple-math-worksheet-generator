<script lang="ts">
    
    import EmojiIcon from "$lib/components/common/emoji-icons/emoji-icon.svelte";
    import { getEmojiByCategory } from "$lib/components/common/utils/emoji-icon-utils";
    
    export let imgCategory: string = '';

    export let num1: number = 1;
    export let num1ImgIndex = 1;

    export let operator: string;

    export let num2: number = 1;
    export let num2ImgIndex = 1;

    export let showAnswer: boolean = true;
    export let answer: number = 0;

    export let numberBoxHeight: string = '14mm';
    export let numberBoxWidth: string = '14mm';
    export let numberBoxMargin: string = '5px';
</script>

<div class="pictureAlgebraRowContainer">    

    <EmojiIcon emoji={ getEmojiByCategory(imgCategory, num1ImgIndex) } />

    <div class="operator">{@html operator}</div>

    <EmojiIcon emoji={ getEmojiByCategory(imgCategory, num2ImgIndex) } />

    <div class="operator">=</div>

    <div class="numberBox" style="--numberBoxHeight:{numberBoxHeight};--numberBoxWidth:{numberBoxWidth};--numberBoxMargin:{numberBoxMargin}">
        {showAnswer ? answer : ''}
    </div>
</div>

<style>
    .pictureAlgebraRowContainer {
        display: flex;		
		flex-flow: row wrap;
        align-items: center;
        height: 20mm
    }

    .pictureAlgebraLeftSection {
        display: flex;		
		flex-flow: row wrap;
        width: 15mm;
    }

    .pictureAlgebraRightSection {
        display: flex;		
		flex-flow: row wrap;
        margin-left: auto;
    }

    .operator {
        padding: 0;
        margin: 2mm;
        display: flex;
        align-items: center;
        
    }

    .numberBox {
		width: var(--numberBoxWidth);
		height: var(--numberBoxHeight);
		margin: var(--numberBoxMargin);
		padding: 0;
		/* border: 1px solid; */
		/* border-radius: 5px; */
        display: flex;
        align-items: center;
        justify-content: center;
	}

    img.fruits {
        height: 11mm;
    }

    img.mcdonalds {
        height: 11mm;
    }

    img.animals {
        height: 11mm;
    }
</style>