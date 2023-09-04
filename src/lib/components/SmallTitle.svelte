<script lang="ts">
	export let title: string;
	export let el: string;
</script>

<svelte:element
	this={el}
	class="grid grid-flow-col text-center items-center text-gray-700 text-sm capitalize before:content-[''] before:block before:bg-gray-400 before:h-0.5 before:w-full after:content-[''] after:block after:bg-gray-400 after:h-0.5 after:w-full"
>
	{title}
</svelte:element>
