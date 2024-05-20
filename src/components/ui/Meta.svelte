<script lang="ts">
	type Props = {
		title: string;
	};
	let { title }: Props = $props();
</script>

<svelte:head>
	<title>{`${import.meta.env.DEV ? '[DEV] ' : ''}${title} | Thyseus`}</title>
</svelte:head>
