<script lang="ts">
	import clsx from 'clsx';

	import { Github, Discord } from ':icons';
	import { DISCORD_INVITE_URL, PROJECT_URL } from ':config';

	import Search from './Search.svelte';

	const linkClasses = "rounded-lg transition-colors hocus:text-textPrimary hocus:bg-bgSecondary"
</script>

<header class="h-16 w-full shadow-lg py-2 px-2 bg-bgPrimary text-textSecondary">
	<div class="container mx-auto h-full flex items-center justify-between">
		<div class="flex">
			<a
				href="#main-content"
				class={clsx(linkClasses, "sr-only focus:not-sr-only underline focus:py-2 focus:px-4")}
			>
				Skip to content
			</a>
			<a class="" href="/">LOGO Thyseus</a>
		</div>
		<div class="flex items-center gap-4">
			<nav class="block h-full">
				<ul class="flex items-center gap-1">
					{@render navLink('Docs', '/docs')}
					{@render navLink('Blog', '/blog')}
				</ul>
			</nav>
			<Search />
			<div class="flex items-center gap-1">
				{@render iconLink(Github, 'Github', PROJECT_URL)}
				{@render iconLink(Discord, 'Discord', DISCORD_INVITE_URL)}
			</div>
		</div>
	</div>
</header>

{#snippet navLink(name: string, href: string)}
	<li>
		<a
			{href}
			class={clsx(linkClasses, 'px-2 py-2 text-xs font-semibold uppercase tracking-wider')}
		>
			{name}
		</a>
	</li>
{/snippet}
{#snippet iconLink(Icon: any, name: string, href: string)}
<a {href} class={clsx(linkClasses, 'px-2 py-2')}>
	<Icon />
	<span class="sr-only">{name}</span>
</a>
{/snippet}