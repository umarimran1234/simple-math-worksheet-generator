<script lang="ts">
	import AppPageContainer from '$lib/components/common/app-layout/AppPageContainer.svelte';
	import '../../../../app.css';
	import { writable } from 'svelte/store';
	let isOpen = false;
	let selectedGrade = 'Select Grade';
	const grades = Array.from({ length: 8 }, (_, i) => `Grade ${i + 5}`);
	let dropdownDiv: HTMLDivElement;
	function handleClickOutside(event: MouseEvent) {
		if (dropdownDiv && !dropdownDiv.contains(event.target as Node)) {
			isOpen = false;
		}
	}
	let isLoading = false;
	let worksheetGenerated = false;
	let answerSheetGenerated = false;

	async function generateWorksheet() {
		if (selectedGrade === 'Select Grade') {
			alert('Please select a grade before generating the worksheet.');
			return;
		}

		isLoading = true;

		const gradeNumber = parseInt(selectedGrade.replace('Grade ', ''));
		const requestBody = {
			subject: 'math',
			grade: gradeNumber,
			num_questions: 10
		};

		try {
			const response = await fetch('https://worksheet-test.azurewebsites.net/generate-worksheet', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(requestBody)
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();

			// Show buttons if the response includes worksheet and answer sheet
			worksheetGenerated = !!data.worksheet_pdf;
			answerSheetGenerated = !!data.answer_sheet_pdf;
		} catch (error) {
			console.error('Error:', error);
			alert('An error occurred while generating the worksheet.');
		} finally {
			isLoading = false;
		}
	}

	function downloadWorksheet() {
		const gradeNumber = parseInt(selectedGrade.replace('Grade ', ''));
		const downloadUrl = `https://worksheet-test.azurewebsites.net/download-worksheet/worksheet_grade${gradeNumber}_math.pdf`;
		triggerDownload(downloadUrl, `worksheet_grade${gradeNumber}_math.pdf`);
	}

	function downloadAnswerSheet() {
		const gradeNumber = parseInt(selectedGrade.replace('Grade ', ''));
		const downloadUrl = `https://worksheet-test.azurewebsites.net/download-worksheet/answer_sheet_grade${gradeNumber}_math.pdf`;
		triggerDownload(downloadUrl, `answer_sheet_grade${gradeNumber}_math.pdf`);
	}

	function triggerDownload(downloadUrl: string, fileName: string) {
		const link = document.createElement('a');
		link.href = downloadUrl;
		link.download = fileName;
		link.target = '_blank'; // Opens the link in a new tab
		link.dispatchEvent(new MouseEvent('click'));
	}
</script>

<svelte:window on:click={handleClickOutside} />

<AppPageContainer>
	<span slot="content" class="ml-72 bg-white shadow-inner min-h-screen">
		<div class="bg-white">
			<div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
				<div
					class="relative isolate overflow-hidden bg-white-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
					style="height: 700px;"
				>
					<div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
						<h2 class="text-balance text-3xl text-black font-semibold tracking-tight sm:text-4xl">
							Boost your productivity. Start using our app today.
						</h2>
						<p class="mt-6 text-lg text-black">Free AI Generated Worksheets.</p>

						<div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
							<button
								on:click={generateWorksheet}
								class="rounded-md bg-black text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
								disabled={isLoading}
							>
								{#if isLoading}
									<svg
										class="animate-spin h-5 w-5 mr-3 text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											class="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
										/>
										<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
									</svg>
									Loading...
								{:else}
									Generate
								{/if}
							</button>

							<div class="relative inline-flex" bind:this={dropdownDiv}>
								<button
									on:click={() => (isOpen = !isOpen)}
									class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
									aria-expanded={isOpen}
									aria-haspopup="true"
								>
									{selectedGrade}
									<svg
										class="w-4 h-4 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="m6 9 6 6 6-6" />
									</svg>
								</button>

								{#if isOpen}
									<div class="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg py-1 text-sm">
										{#each grades as grade}
											<button
												on:click={() => {
													selectedGrade = grade;
													isOpen = false;
												}}
												class="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
											>
												{grade}
											</button>
										{/each}
									</div>
								{/if}
							</div>
						</div>

						{#if worksheetGenerated}
							<button
								on:click={downloadWorksheet}
								class="mt-4 rounded-md bg-green-500 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-green-600"
							>
								Download Worksheet
							</button>
						{/if}

						{#if answerSheetGenerated}
							<button
								on:click={downloadAnswerSheet}
								class="mt-4 rounded-md bg-blue-500 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-600"
							>
								Download Answer Sheet
							</button>
						{/if}
					</div>

					<div class="relative mt-16 h-80 lg:mt-8">
						<img
							class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
							src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
							alt="App screenshot"
							width="1824"
							height="1080"
						/>
					</div>
				</div>
			</div>
		</div>
	</span>
</AppPageContainer>
