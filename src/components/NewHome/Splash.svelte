<script lang="ts">
	import { ThyseusLogo } from ':icons';
</script>

<div class="w-full h-screen overflow-hidden flex items-center">
	<div class="px-12">
		<div class="text-6xl flex items-center temp">
			<ThyseusLogo />
			<!-- <Thyseus /> -->
			<h1 class="temp">Thyseus</h1>
		</div>
		<p class="mt-4 mb-8 text-lg">An elegant ECS for modern Javascript</p>
		<a
			class="inline-block rounded-md bg-accent px-4 py-3 text-textInverse font-medium"
			href="/docs"
		>
			Get Started
		</a>
	</div>
</div>

<style>
	.temp {
		background-image: linear-gradient(-45deg, #cc99ff, #6699ff);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
</style>
