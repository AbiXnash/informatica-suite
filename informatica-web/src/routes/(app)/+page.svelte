<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import UpdatesModal from '$lib/components/UpdatesModal.svelte';
</script>

<Header />
<Hero />
<UpdatesModal />
<slot />
<Footer />
