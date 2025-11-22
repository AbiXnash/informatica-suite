<script>
	let username = '';
	let password = '';

	const handleAdminLogin = () => {
		console.log('Admin Login:', { username, password });
	};
</script>

<div class="mockup-window bg-base-100 border border-base-300">
	<section class="min-h-screen flex items-center justify-center bg-base-100 px-6">
		<div class="w-full max-w-md space-y-10">
			<!-- Branding -->
			<div class="text-center space-y-3">
				<img src="/assets/logo.png" alt="Logo" class="mx-auto h-12 w-auto" />

				<h1 class="text-3xl font-semibold text-base-content tracking-tight">Administrator Login</h1>

				<p class="text-base-content/60 text-sm">Restricted access — authorized personnel only.</p>
			</div>

			<form class="space-y-5" on:submit|preventDefault={handleAdminLogin}>
				<!-- Username -->
				<div>
					<label class="block text-sm font-medium text-base-content/80 mb-1">Username</label>
					<input
						bind:value={username}
						type="text"
						placeholder="admin"
						class="input input-bordered w-full bg-base-100"
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
						class="input input-bordered w-full bg-base-100"
						required
					/>
				</div>

				<!-- Button -->
				<button
					type="submit"
					class="w-full py-3 rounded-lg bg-base-content text-base-100 font-medium
               hover:bg-base-content/90 transition-colors"
				>
					Login as Admin
				</button>
			</form>

			<div class="text-center text-xs text-base-content/50">
				Informatica Internal Access · Unauthorized login attempts are logged.
			</div>
		</div>
	</section>
</div>
