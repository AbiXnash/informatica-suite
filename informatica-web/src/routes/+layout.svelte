<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import Loader from '$lib/components/Loader.svelte';
	import { loading } from '$lib/stores/loading';
	import { afterNavigate } from '$app/navigation';
	import UpdatesModal from '$lib/components/UpdatesModal.svelte';

	afterNavigate(() => {
		loading.set(false);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Reactive loading state -->
{#if $loading.active}
	<div class="fixed inset-0 z-[9999] flex items-center justify-center bg-base-100">
		<Loader message={$loading.message} />
	</div>
{:else}
	<UpdatesModal />
	<slot />
{/if}
