<script lang="ts">
    
    import EmojiIcon from "$lib/components/common/emoji-icons/emoji-icon.svelte";
    import { getEmojiByCategory } from "$lib/components/common/utils/emoji-icon-utils";
    
    export let imgCategory: string = '';

    export let num1: number = 1;
    export let num1ImgIndex = 1;
    export let num1ShowAnswer = false;

    export let num2: number = 2;
    export let num2ImgIndex = 2;
    export let num2ShowAnswer = false;

    export let num3: number = 3;
    export let num3ImgIndex = 3;
    export let num3ShowAnswer = false;

    export let numberBoxHeight: string = '14mm';
    export let numberBoxWidth: string = '14mm';
    export let numberBoxMargin: string = '5px';
</script>

<div class="pictureAlgebraWithOperatorAnswerRowContainer">
    
    <div class="pictureAlgebraAnswer">
        <EmojiIcon emoji={ getEmojiByCategory(imgCategory, num1ImgIndex) } />
        <div class="operator">=</div>
        <div class="numberBox" style="--numberBoxHeight:{numberBoxHeight};--numberBoxWidth:{numberBoxWidth};--numberBoxMargin:{numberBoxMargin}">
            {num1ShowAnswer ? num1 : ''}
        </div>
    </div>

    <div class="pictureAlgebraAnswer">
        <EmojiIcon emoji={ getEmojiByCategory(imgCategory, num2ImgIndex) } />
        <div class="operator">=</div>
        <div class="numberBox" style="--numberBoxHeight:{numberBoxHeight};--numberBoxWidth:{numberBoxWidth};--numberBoxMargin:{numberBoxMargin}">
            {num2ShowAnswer ? num2 : ''}
        </div>
    </div>

    <div class="pictureAlgebraAnswer">
        <EmojiIcon emoji={ getEmojiByCategory(imgCategory, num3ImgIndex) } />
        <div class="operator">=</div>
        <div class="numberBox" style="--numberBoxHeight:{numberBoxHeight};--numberBoxWidth:{numberBoxWidth};--numberBoxMargin:{numberBoxMargin}">
            {num3ShowAnswer ? num3 : ''}
        </div>
    </div>
</div>

<style>
    .pictureAlgebraWithOperatorAnswerRowContainer {
        display: flex;		
		flex-flow: row wrap;
        align-items: center;
        height: 30mm
    }

    .pictureAlgebraAnswer {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
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
		border: 1px solid;
		border-radius: 5px;
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