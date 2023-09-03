<script lang="ts">
	import { page } from '$app/stores';

	export let route: string;
	export let name: string;

	$: routeId = $page.route.id;
</script>

<li class="h-full flex items-center" class:active={routeId === route}>
	<a href={route} class="h-full flex items-center" class:active={routeId === route}>
		<div class="w-full h-full px-4 py-2 flex items-center uppercase text-xs font-bold">
			{name}
		</div>
	</a>
</li>

<style>
	.active {
		color: #fafaf9;
		background: #4a044e;
	}
</style>
