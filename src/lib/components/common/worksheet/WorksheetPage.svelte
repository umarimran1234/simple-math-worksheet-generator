<script lang='ts'>
	export let size: string;
	export let padding: string;

	export let contentHeight: string;
	export let contentFlexDirection: string;
	export let contentFlexWrap: string;
	export let contentJustifyContent: string;
	export let contentAlignContent: string;

	$: orientation = size.includes("landscape") ? "landscape" : "auto";
</script>

<div class="{size} pageBreak">
	<!-- Each sheet element should have the class "sheet" -->
	<!-- "padding-**mm" is optional: you can set 10, 15, 20 or 25 -->
	<section class="sheet sheet-padding" style="--pagePadding:{padding}">
		<div
			class="pageContentContainer"
			style="--pageContentContainerHeight:{contentHeight}; 
			--pageContentContainerFlexDirection:{contentFlexDirection}; 
			--pageContentContainerFlexWrap:{contentFlexWrap}; 
			--pageContentContainerJustifyContent:{contentJustifyContent};
			--pageContentAlignContent:{contentAlignContent}" >
			<slot />
		</div>
	</section>
</div>

<style>
	@page {
		margin: 0;
	}
	div {
		margin: 0;
	}
	.pageBreak {
		page-break-before: always;
	}

	.sheet {
		margin: 0;
		overflow: hidden;
		position: relative;
		box-sizing: border-box;
		/* page-break-after: always; */

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/** Paper sizes **/
	div.A3 .sheet {
		width: 297mm;
	}
	div.A3.landscape .sheet {
		width: 420mm;
	}
	div.A4 .sheet {
		width: 210mm;
	}
	div.A4.landscape .sheet {
		width: 297mm;
	}
	div.A5 .sheet {
		width: 148mm;
	}
	div.A5.landscape .sheet {
		width: 210mm;
	}
	div.letter .sheet {
		width: 216mm;
	}
	div.letter.landscape .sheet {
		width: 280mm;
	}
	div.legal .sheet {
		width: 216mm;
	}
	div.legal.landscape .sheet {
		width: 357mm;
	}

	/** Padding area **/
	.sheet.padding-10mm {
		padding: 10mm;
	}
	.sheet.padding-15mm {
		padding: 15mm;
	}
	.sheet.padding-20mm {
		padding: 20mm;
	}
	.sheet.padding-25mm {
		padding: 25mm;
	}

	.sheet-padding {
		padding: var(--pagePadding);
	}

	/** For screen preview **/
	@media screen {
		body {
			background: #e0e0e0;
		}
		.sheet {
			background: white;
			box-shadow: 0 0.5mm 2mm rgba(0, 0, 0, 0.3);
			margin: 5mm auto;
		}
	}

	@media only screen {
		div.A3 .sheet {
			width: 297mm;
			height: 419mm;
		}
		div.A3.landscape .sheet {
			width: 420mm;
			height: 296mm;
		}
		div.A4 .sheet {
			width: 210mm;
			height: 296mm;
		}
		div.A4.landscape .sheet {
			width: 297mm;
			height: 209mm;
		}
		div.A5 .sheet {
			width: 148mm;
			height: 209mm;
		}
		div.A5.landscape .sheet {
			width: 210mm;
			height: 147mm;
		}
		div.letter .sheet {
			width: 216mm;
			height: 279mm;
		}
		div.letter.landscape .sheet {
			width: 280mm;
			height: 215mm;
		}
		div.legal .sheet {
			width: 216mm;
			height: 356mm;
		}
		div.legal.landscape .sheet {
			width: 357mm;
			height: 215mm;
		}
	}

	/** Fix for Chrome issue #273306 **/
	@media print {
		div.A3.landscape {
			width: 420mm;
		}
		div.A3,
		div.A4.landscape {
			width: 297mm;
		}
		div.A4,
		div.A5.landscape {
			width: 210mm;
		}
		div.A5 {
			width: 148mm;
		}
		div.letter,
		div.legal {
			width: 216mm;
		}
		div.letter.landscape {
			width: 280mm;
		}
		div.legal.landscape {
			width: 357mm;
		}

		.sheet {
			background: white;
			/* box-shadow: 0 0.5mm 2mm rgba(0, 0, 0, 0.3); */
			margin: 0;
		}

		.sheet-padding {
			padding: 0 !important;
		}

		.pageContentContainer {
			/* display: block;
			flex-direction: var(--pageContentContainerFlexDirection);
			flex-wrap: var(--pageContentContainerFlexWrap);
			justify-content: var(--pageContentContainerJustifyContent);
			height: var(--pageContentContainerHeight);
			align-content: flex-start; */
			margin:0;
			padding: 0;
		}
	}

	.pageContentContainer {
		display: flex;
		flex-direction: var(--pageContentContainerFlexDirection);
		flex-wrap: var(--pageContentContainerFlexWrap);
		justify-content: var(--pageContentContainerJustifyContent);
		height: var(--pageContentContainerHeight);
        align-content: var(--pageContentAlignContent);
	}
</style>