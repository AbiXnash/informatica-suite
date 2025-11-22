<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { updatesModal } from '$lib/stores/notifications';
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
							<a
								href="/{item}"
								onclick={() => {
									updatesModal.set(true);
								}}
								class="transition hover:text-black">{item}</a
							>
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
					id="toggle"
					onclick={() => updatesModal.set(true)}
					class="md:hidden rounded-full p-2 hover:bg-base-200 transition relative"
					aria-label="Notifications"
				>
					<!-- Bell Icon -->
					<svg
						viewBox="0 0 24 24"
						class="h-5 w-5"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>

					<!-- Ping (mobile-friendly) -->
					<span class="absolute top-1 right-1 flex h-2 w-2">
						<span
							class="absolute inline-block h-full w-full rounded-full bg-error opacity-75 animate-ping"
						></span>
						<span class="relative inline-block h-full w-full rounded-full bg-error"></span>
					</span>
				</button>

				<button
					aria-label="Menu"
					class="rounded-full p-2 transition hover:bg-gray-100 md:hidden"
					onclick={toggleMenu}
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
			onclick={closeMenu}
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
						class="w-full rounded-full bg-gray-100 py-3 pl-12 pr-6 text-[17px] focus:outline-none focus:ring-2 focus:ring-gray-300"
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
								onclick={closeMenu}
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
