<script lang="ts">
	import clsx from 'clsx';
	import { page } from '$app/stores';

	import { Header } from '../../components/Header'
	import { DOCS_URL } from ':config';
	import { PencilSquare } from ':icons';

	import { PAGES, PAGES_FLAT, type Page } from './meta';
	
	import DocsNavigation from './DocsNavigation.svelte';
	import TableOfContents from './TableOfContents.svelte';

	let { children } = $props();

	let currentIndex = $derived(PAGES_FLAT.findIndex(x => x.href === $page.url.pathname));
	let currentPage = $derived(PAGES_FLAT[currentIndex]);
	let currentCategory = $derived(PAGES.find(category => category.pages.includes(currentPage)))!;
	let previousPage = $derived(currentIndex > 0 ? PAGES_FLAT[currentIndex - 1] : null);
	let nextPage = $derived(currentIndex < PAGES_FLAT.length - 1 ? PAGES_FLAT[currentIndex + 1] : null);
</script>

<!--
	The docs nav being py-5 and main being py-6 is intentional;
	The text alignment is a little funky and this is the easiest fix.
-->
<div class="h-screen grid grid-rows-[64px_1fr]">
	<Header />
	<div class="grid grid-cols-docs overflow-hidden">
		<div class="overflow-y-auto scrollbar-thin bg-bgSecondary py-5 px-2">
			<DocsNavigation />
		</div>
		<main id="main-content" class="grid grid-cols-toc overflow-y-auto scrollbar-thin py-6 pl-4 pr-2 shadow-inner">
			<article class="max-w-content-column prose prose-dark pb-8">
				<div
					class="not-prose flex flex-col md:gap-2 md:flex-row-reverse md:items-center justify-between text-gray-400 text-xs mb-1"
				>
					<a
						href={`${DOCS_URL}/blob/main/src/routes${currentPage.href}/+page.svx`}
						class="flex items-center gap-1 underline"
					>
						<PencilSquare />
						<span>Edit this page on Github</span>
					</a>
					<p class="uppercase font-semibold">{currentCategory.name}</p>
				</div>
				{@render children()}
				<footer class="not-prose flex items-center gap-2 mt-16 pt-4">
					{#if previousPage !== null}
						{@render footerLink('Previous', previousPage)}
					{/if}
					{#if nextPage !== null}
						{@render footerLink('Next', nextPage)}
					{/if}
				</footer>
			</article>
			<div class="hidden xl:block">
				<TableOfContents />
			</div>
		</main>
	</div>
</div>

{#snippet footerLink(label: string, { title, href }: Page)}
	<a {href} class={clsx('block hocus:bg-bgSecondary transition-colors rounded-lg py-2 px-8', label === 'Next' ? 'ml-auto text-end' : 'mr-auto text-start')}>
		<span class="block">{label}</span>
		<span class="block">{title}</span>
	</a>
{/snippet}

<style>
	.grid-cols-docs {
		grid-template-columns: 1fr;
	}
	.grid-cols-toc {
		grid-template-columns: auto;
	}
	.max-w-content-column {
		max-width: 100%;
	}
	@media (min-width: 768px) {
		.grid-cols-docs {
			grid-template-columns: minmax(256px, auto) minmax(512px, auto);
		}
		.max-w-content-column {
			max-width: 512px;
		}
	}
	@media (min-width: 1024px) {
		.grid-cols-docs {
			grid-template-columns: minmax(256px, auto) minmax(768px, auto);
		}
		.max-w-content-column {
			max-width: 768px;
		}
	}
	@media (min-width: 1280px) {
		.grid-cols-docs {
			grid-template-columns: minmax(256px, auto) minmax(1024px, auto);
		}
		.grid-cols-toc {
			grid-template-columns: 768px minmax(256px, auto);
		} 
	}
	@media (min-width: 1536px) {
		.grid-cols-docs {
			grid-template-columns: minmax(256px, auto) minmax(1280px, auto);
		}
		.grid-cols-toc {
			grid-template-columns: 1024px minmax(256px, auto);
		}
		.max-w-content-column {
			max-width: 1024px;
		}
	}
</style>
