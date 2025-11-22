<script>
	let email = '';
	let password = '';

	const handleLogin = () => {
		console.log('Logging in:', { email, password });
	};
</script>

<section class="min-h-screen flex items-center justify-center bg-base-100 px-6">
	<div class="w-full max-w-md space-y-10">
		<!-- Branding -->
		<div class="text-center space-y-3">
			<img
				src="/assets/logo.png"
				alt="Informatica Logo"
				class="mx-auto h-12 w-auto object-contain"
			/>
			<h1 class="text-3xl font-semibold text-base-content tracking-tight">
				Sign in to your account
			</h1>
			<p class="text-base-content/60 text-sm">Use your Informatica credentials</p>
		</div>

		<!-- Form -->
		<form class="space-y-5" on:submit|preventDefault={handleLogin}>
			<!-- Email -->
			<div>
				<label class="block text-sm font-medium text-base-content/80 mb-1">Email</label>
				<input
					bind:value={email}
					type="email"
					placeholder="you@example.com"
					class="input input-bordered w-full bg-base-100 focus:outline-none"
					required
				/>
			</div>

			<!-- Password -->
			<div>
				<label class="block text-sm font-medium text-base-content/80 mb-1">Password</label>
				<input
					bind:value={password}
					type="password"
					placeholder="••••••••"
					class="input input-bordered w-full bg-base-100 focus:outline-none"
					required
				/>
			</div>

			<!-- Forgot -->
			<div class="flex justify-end">
				<a
					href="/auth/forgot"
					class="text-sm text-base-content/70 hover:text-base-content transition"
				>
					Forgot password?
				</a>
			</div>

			<!-- Primary Button -->
			<button
				type="submit"
				class="w-full py-3 rounded-lg bg-base-content text-base-100 font-medium
               hover:bg-base-content/90 transition-colors"
			>
				Sign In
			</button>
		</form>

		<!-- Divider -->
		<div class="text-center text-sm text-base-content/60">
			Don't have an account?
			<a href="/auth/signup" class="text-base-content hover:underline">Create one</a>
		</div>

		<!-- Guest Login -->
		<button
			type="button"
			on:click={() => console.log('Guest login active')}
			class="w-full py-3 rounded-lg border border-base-content/20 text-base-content/80
         font-medium hover:bg-base-200 transition-colors"
		>
			Continue as Guest
		</button>
	</div>
</section>
