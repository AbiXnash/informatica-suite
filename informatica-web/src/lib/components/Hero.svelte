<script lang="ts">
	import { onMount } from 'svelte';

	// Stores
	import { updatesModal, notifications } from '$lib/stores/notifications';

	import type { Notification } from '$lib/types/notifications';

	let current = 0;
	let notificationList: Notification[] = [];

	// Subscribe to store
	notifications.subscribe((n) => (notificationList = n));

	// Auto-rotate unread notification titles
	onMount(() => {
		const interval = setInterval(() => {
			const unread = notificationList.filter((msg) => !msg.read);
			if (unread.length > 0) {
				current = (current + 1) % unread.length;
			}
		}, 3000);

		return () => clearInterval(interval);
	});

	// Rotate animation
	function rotate(node: Element, { duration = 350 }: { duration?: number }) {
		return {
			duration,
			css: (t: number) => `
				opacity: ${t};
				transform: rotateX(${(1 - t) * 90}deg);
				transform-origin: bottom;
			`
		};
	}
</script>

<div class="bg-base-100">
	<div class="relative isolate overflow-hidden pt-12 lg:pt-16">
		<div
			aria-hidden="true"
			class="absolute -top-[40rem] left-1/2 -z-10 h-[80rem] w-[80rem] -translate-x-1/2 rounded-full bg-[image:linear-gradient(to_right,_#e2e8f0_1px,_transparent_1px),_linear-gradient(to_bottom,_#e2e8f0_1px,_transparent_1px)] bg-[length:70px_70px] [mask-image:radial-gradient(circle,#000_10%,transparent_70%)]"
		></div>
		<div class="px-6 lg:px-8">
			<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div class="hidden sm:mb-8 sm:flex sm:justify-center">
					<button
						onclick={() => updatesModal.set(true)}
						class="relative flex items-center justify-center gap-3 rounded-lg bg-white p-1 pr-2.5 text-sm font-medium leading-6 text-gray-600 shadow-sm ring-1 ring-gray-900/10 hover:bg-gray-50"
					>
						<span
							class="inline-flex items-center gap-2 rounded-md bg-base-100 px-2 py-0.5 border border-base-300 text-base-content/70"
						>
							<!-- Ping indicator -->
							<span class="relative flex h-2 w-2">
								<span
									class="absolute inline-block h-full w-full rounded-full bg-error opacity-75 animate-ping"
								></span>
								<span class="relative inline-block h-full w-full rounded-full bg-error"></span>
							</span>
							Updates
						</span>
						<a href="/" class="inline-flex items-center justify-center gap-1 relative">
							<span class="absolute inset-0" aria-hidden="true"></span>

							<div class="relative h-5 overflow-hidden flex items-center">
								{#key current}
									<span class="block" in:rotate={{ duration: 500 }}>
										{notificationList[current].title}
									</span>
								{/key}
							</div>

							<svg
								class="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									d="M5 12H19M19 12L13 6M19 12L13 18"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
						</a>
					</button>
				</div>
				<div class="sm:text-center">
					<h1
						class="text-pretty text-3xl font-semibold tracking-tight text-base-content sm:text-4xl"
					>
						Build. Break. Innovate. Repeat.
					</h1>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						From workshops to real-world projects, Informatica helps you grow from learner to
						creator.
					</p>
				</div>
				<div class="mt-10 flex items-center justify-start gap-6 sm:justify-center">
					<a
						onclick={() => updatesModal.set(true)}
						href="/"
						class="inline-flex items-center justify-center gap-2 rounded-md bg-pink-500
						px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-400
						focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
						focus-visible:outline-pink-500"
					>
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
								stroke="currentColor"
								stroke-width="2"
							/>
							<path
								d="M10.9 8.8L10.6577 8.66152C10.1418 8.36676 9.5 8.73922 9.5 9.33333L9.5 14.6667C9.5 15.2608 10.1418 15.6332 10.6577 15.3385L10.9 15.2L15.1 12.8C15.719 12.4463 15.719 11.5537 15.1 11.2L10.9 8.8Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Demo
					</a>
					<a href="/" class="text-sm font-semibold leading-6 text-gray-900">Learn more</a>
				</div>
			</div>
		</div>
	</div>
</div>
