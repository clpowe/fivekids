<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import { animate, scroll } from 'motion';
	import NavLink from './NavLink.svelte';
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import Logo2 from '$lib/assets/logo-two.svg';

	let menu_list: HTMLElement;
	let head: HTMLElement;

	let animates = true;

	function openMenu() {
		animates = !animates;
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

	onMount(() => {});

	const scrollNavBar = 300;

	if (browser) {
		window.onscroll = () => {
			if (window.scrollY > scrollNavBar) {
				animate(head, { y: 0 });
			} else {
				animate(head, { y: -64 });
			}
		};
		onDestroy(() => {
			window.onscroll = () => {};
		});
	}

	onMount(() => {
		animate(head, { y: [-64, -64] });
	});
</script>

<!-- <svelte:window on:scroll={scrollcontrol} /> -->

<header
	class="bg-[#fafaf9] z-50 fixed w-full"
	bind:this={head}
	style="transform: translateY(-64px)"
>
	<div class="h-16 grid place-content-center hero to-transparent">
		<img src={Logo2} alt="" class="h-8" />
	</div>
	<div class="max-w-4xl mx-auto flex justify-between relative h-12 px-4">
		<div class="my-auto block sm:hidden">
			<button aria-controls="menu" class="btn flex items-center" on:click={openMenu}>
				<div class="i-mdi-menu w-8 h-8" />
			</button>
			{#if animates}
				<nav
					aria-label="Main"
					tabindex="-1"
					class=" bg-fuchsia-100 left-0 absolute top-12 w-full"
					transition:slide
					bind:this={menu_list}
				>
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<ul
						on:click={() => (animates = false)}
						on:keyup={(e) => {
							if (e.key == 'Enter') {
								animates = false;
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
