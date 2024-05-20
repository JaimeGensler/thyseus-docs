<script lang="ts">
	let headings: HTMLElement[] = [];
	$effect(() => {
		headings.push(...(document.querySelectorAll('h1,h2,h3,h4,h5,h6') as any))
	})
</script>

<aside>
	{#if headings.length >= 1}
		<p class="">
			On this page
		</p>
		<ul>
			{#each headings as heading}
				{@render tocItem(heading)}
			{/each}
		</ul>
	{/if}
</aside>

{#snippet tocItem(heading: HTMLElement)}
	<li>
		<a href={`#${heading.id}`}>
			{heading.innerText}
		</a>
	</li>
{/snippet}