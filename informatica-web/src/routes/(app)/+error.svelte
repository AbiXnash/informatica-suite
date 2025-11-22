<script>
	export const prerender = true;
	export const ssr = false;

	export let status;
	export let error;
</script>

<!-- MAIN 404 CONTENT -->
<section id="error" class="h-screen flex items-center justify-center bg-base-100">
	<div class="text-center px-6 max-w-screen-sm">
		<h1 class="mb-4 text-7xl lg:text-9xl font-extrabold tracking-tight text-base-content/70">
			{status}
		</h1>

		<p class="mb-4 text-3xl md:text-4xl font-bold text-base-content">Something’s missing.</p>

		<p class="mb-6 text-lg text-base-content/60 leading-relaxed">
			Sorry, we can’t find that page.<br />
			You’ll find plenty to explore on the home page.
		</p>

		<a
			href="/"
			class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium
      rounded-lg bg-base-content text-base-100 hover:bg-base-content/90 transition-colors"
		>
			Back to Homepage
		</a>
	</div>
</section>
