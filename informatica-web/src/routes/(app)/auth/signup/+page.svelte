<script>
	let name = '';
	let email = '';
	let password = '';
	let confirm = '';

	const handleSignup = () => {
		console.log('Signup:', { name, email, password, confirm });
	};
</script>

<div class="mockup-window bg-base-100 border border-base-300">
	<section class="min-h-screen flex items-center justify-center bg-base-100 px-6">
		<div class="w-full max-w-md space-y-10">
			<div class="text-center space-y-3">
				<img src="/assets/logo.png" alt="Logo" class="mx-auto h-12 w-auto" />
				<h1 class="text-3xl font-semibold text-base-content tracking-tight">Create your account</h1>
				<p class="text-base-content/60 text-sm">Join the Informatica ecosystem</p>
			</div>

			<form class="space-y-5" on:submit|preventDefault={handleSignup}>
				<!-- Name -->
				<div>
					<label class="block text-sm font-medium text-base-content/80 mb-1">Full Name</label>
					<input
						bind:value={name}
						type="text"
						placeholder="John Doe"
						class="input input-bordered w-full bg-base-100"
						required
					/>
				</div>

				<!-- Email -->
				<div>
					<label class="block text-sm font-medium text-base-content/80 mb-1">Email</label>
					<input
						bind:value={email}
						type="email"
						placeholder="you@example.com"
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

				<!-- Confirm -->
				<div>
					<label class="block text-sm font-medium text-base-content/80 mb-1">Confirm Password</label
					>
					<input
						bind:value={confirm}
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
					Create Account
				</button>
			</form>

			<div class="text-center text-sm text-base-content/60">
				Already have an account?
				<a href="/auth/login" class="text-base-content hover:underline">Sign in</a>
			</div>
		</div>
	</section>
</div>
