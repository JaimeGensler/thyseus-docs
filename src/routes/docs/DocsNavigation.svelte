<script lang="ts">
	import { PAGES, type Page, type Category } from './meta'
</script>

<nav class="w-64 ml-auto">
	<ul class="space-y-4">
		{#each PAGES as group}
			{@render category(group)}
		{/each}
	</ul>
</nav>

{#snippet category({ name, pages }: Category)}
	<li>
		<span class="uppercase text-sm mb-0.5 font-semibold">
			{name}
		</span>
		<ul>
			{#each pages as page}
				{@render item(page)}
			{/each}
		</ul>
	</li>
{/snippet}
{#snippet item({ title, href }: Page)}
<li class="group ml-1 border-l pl-1 border-gray-600 hocus:text-gray-100 focus-within:text-gray-100 hocus:border-current focus-within:border-current">
	<a
		{href}
		class="block py-px px-1.5 motion-safe:group-hover:translate-x-1 motion-safe:transition-transform"
	>
		{title}
	</a>
</li>
{/snippet}