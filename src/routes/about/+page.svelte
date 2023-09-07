<script lang="ts">
	import type { PageData } from './$types';
	import Logo2 from '$lib/assets/logo-two.svg';
	import SmallTitle from '$lib/components/SmallTitle.svelte';
	import Ashley from '$lib/assets/Ashley.jpg';
	import signiture from '$lib/assets/signiture.png';

	export let data: PageData;
</script>

<svelte:head>
	<title>5 kids and Planning | About Me</title>
</svelte:head>

<div class="max-w-4xl px-4 mx-auto">
	<div class="h-96 grid place-content-center hero to-transparent">
		<img src={Logo2} alt="" class="h-16" />
	</div>
	<SmallTitle el="h1" title="about me" />
	<div class="overflow-hidden rounded-full w-88 mx-a">
		<img src={Ashley} alt="Ashley Powe" class="" />
	</div>
	<p class="font-serif text-gray-500">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem sequi id omnis,
		quasi magni illo cum quaerat expedita in perspiciatis laboriosam, modi quibusdam voluptatum
		corrupti sed distinctio quam commodi?
	</p>
	<img src={signiture} alt="" class="w-32 mx-a" />
</div>
