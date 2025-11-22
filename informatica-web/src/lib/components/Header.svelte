<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	const NAV_ITEMS = ['Home', 'About', 'Events', 'Workshop', 'Contact'];

	let scrolled = false;
	let mobileMenuOpen = false;

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const toggleMenu = () => (mobileMenuOpen = !mobileMenuOpen);
	const closeMenu = () => (mobileMenuOpen = false);

	let searchInput: HTMLInputElement | null = null;
	onMount(() => {
		setTimeout(() => {
			searchInput?.focus();
		}, 10);
	});
</script>

<!-- HEADER -->
<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300
    {scrolled
		? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm'
		: 'bg-transparent'}"
>
	<div class="mx-auto max-w-screen-2xl px-6">
		<div class="flex h-12 items-center justify-between md:h-14">
			<!-- Logo -->
			<a href="/" class="group -ml-2 flex items-center space-x-2">
				<img
					src="/assets/logo.png"
					alt="Logo"
					class="h-10 h-22 md:h-12 md:w-52 rounded object-contain transition-transform group-hover:scale-105"
				/>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex flex-1 items-center justify-center">
				<ul class="flex space-x-8 text-sm font-medium text-gray-700 lg:space-x-12">
					{#each NAV_ITEMS as item}
						<li>
							<a href="/{item}" class="transition hover:text-black">{item}</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Icons + Mobile Toggle -->
			<div class="flex items-center space-x-4 md:space-x-6">
				<!-- Search -->
				<button
					aria-label="Search"
					class="hidden md:inline-flex rounded-full p-2 transition hover:bg-gray-100"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>

				<!-- Account -->
				<button aria-label="Account" class="rounded-full p-2 transition hover:bg-gray-100">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
				</button>

				<!-- Mobile Hamburger -->
				<button
					aria-label="Menu"
					class="rounded-full p-2 transition hover:bg-gray-100 md:hidden"
					on:click={toggleMenu}
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</header>

<!-- MOBILE MENU  -->
{#if mobileMenuOpen}
	<div class="fixed inset-0 z-40 bg-base-100/95 backdrop-blur-2xl md:hidden">
		<button
			type="button"
			class="absolute inset-0 w-full h-full cursor-default"
			aria-label="Close menu"
			on:click={closeMenu}
		></button>

		<!-- Menu panel -->
		<div class="relative flex flex-col h-full" transition:fly={{ y: -40, duration: 320 }}>
			<!-- Search -->
			<div class="border-b border-gray-200 px-8 pt-20 pb-5">
				<div class="relative">
					<svg
						class="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>

					<input
						bind:this={searchInput}
						type="text"
						placeholder="Search"
						class="w-full rounded-full bg-gray-100 py-3 pl-12 pr-6 text-[17px]
                   focus:outline-none focus:ring-2 focus:ring-gray-300"
					/>
				</div>
			</div>

			<!-- Nav Links -->
			<nav class="flex-1 overflow-y-auto px-8 py-8">
				<ul class="space-y-5">
					{#each NAV_ITEMS as item}
						<li>
							<a
								href="/"
								class="block text-[22px] font-medium text-gray-900 transition hover:text-gray-500"
								on:click={closeMenu}
							>
								{item}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Bottom Account -->
			<div class="border-t border-gray-200 px-8 py-6">
				<a href="/login" class="block text-[17px] text-gray-600 hover:text-gray-900"> Sign in </a>
			</div>
		</div>
	</div>
{/if}

<style>
	@media (max-width: 768px) {
		img {
			width: 40%;
		}
	}
	@media (max-width: 660px) {
		img {
			width: 50%;
		}
	}
	@media (max-width: 500px) {
		img {
			width: 70%;
		}
	}
</style>
