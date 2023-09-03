<script lang="ts">
	import NavLink from './NavLink.svelte';
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';

	let menu_list: HTMLElement;

	let animate = false;

	function openMenu() {
		animate = !animate;
		let hidden = menu_list.getAttribute('aria-hidden');
		// let expanded;
		// if (hidden == 'true') {
		// 	animate = false;
		// 	hidden = 'false';
		// 	expanded = 'true';
		// } else {
		// 	animate = true;
		// 	hidden = 'true';
		// 	expanded = 'false';
		// }
		// menu_list.setAttribute('aria-hidden', hidden);
		// menu_btn.setAttribute('aria-hidden', expanded);
	}

	const pages = [
		{
			route: '/',
			name: 'Home'
		},
		{
			route: '/about',
			name: 'About'
		},
		{
			route: '/planning',
			name: 'Planning'
		},
		{
			route: '/kids',
			name: 'Kids'
		},
		{
			route: '/contact',
			name: 'Contact'
		}
	];
	let routeId = $page.route.id;
	// $: if (routeId) {
	// 	animate = !animate;
	// }
</script>

<header class="bg-[#fafaf9] z-50 relative">
	<div class="max-w-4xl mx-auto flex justify-between relative h-12 px-4">
		<div class="my-auto block sm:hidden">
			<button aria-controls="menu" class="btn flex items-center" on:click={openMenu}>
				<div class="i-mdi-menu w-8 h-8" />
			</button>
			{#if animate}
				<nav
					aria-label="Main"
					tabindex="-1"
					class=" bg-fuchsia-100 left-0 absolute top-12 w-full"
					transition:slide
					bind:this={menu_list}
				>
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<ul
						on:click={() => (animate = false)}
						on:keyup={(e) => {
							if (e.key == 'Enter') {
								animate = false;
							}
						}}
					>
						{#each pages as page}
							<NavLink {...page} />
						{/each}
					</ul>
				</nav>
			{/if}
		</div>

		<nav aria-label="Main" aria-hidden="true" class=" w-full hidden sm:flex">
			<ul class="flex items-center">
				{#each pages as page}
					<NavLink {...page} />
				{/each}
			</ul>
		</nav>
		<div class="flex items-center gap-4">
			<a href="/">
				<div class="i-mdi-facebook-box w-6 h-6" />
			</a>
			<a href="/">
				<div class="i-mdi-instagram w-6 h-6" />
			</a>
		</div>
	</div>
</header>

<style>
</style>
