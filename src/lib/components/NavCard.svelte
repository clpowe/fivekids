<script lang="ts">
	export let name: string;
	export let route: string;

	import Planning from '$lib/assets/planning.jpg';

	let grow = false;
</script>

<li class="relative outline outline-stone-50 outline-offset-[-1rem]">
	<a
		href={route}
		class="z-10 relative grid place-content-center h-64 sm:h-80 overflow-hidden outline outline-2 outline-stone-50 outline-offset-[-1rem]"
	>
		<span class="z-10 bg-fuchsia-950 text-stone-50 px-4 py-2">{name} </span>
	</a>
	<img
		src={Planning}
		alt=""
		class="h-full w-full absolute top-0 left-0 object-cover transition-transform duration-400 hover:scale-120 opacity-75"
	/>
</li>
