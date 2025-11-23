<script lang="ts">
	import {
		updatesModal,
		notifications,
		activeTab,
		markAsRead,
		markAllAsRead
	} from '$lib/stores/notifications';

	// Auto-open / close dialog
	let dialogRef: HTMLDialogElement | null = null;

	$effect(() => {
		if (!dialogRef) return;

		if ($updatesModal) {
			console.log('open');
			if (!dialogRef.open) dialogRef.showModal();
		} else {
			console.log('close');
			if (dialogRef.open) dialogRef.close();
		}
	});
</script>

<!-- MODAL -->
<dialog
	id="updatesModal"
	bind:this={dialogRef}
	class="modal modal-bottom sm:modal-middle"
	style="z-index:9999;"
>
	<div class="modal-box space-y-6">
		<h3 class="font-bold text-lg">Notifications</h3>

		<!-- Tabs -->
		<div class="tabs tabs-bordered">
			<button
				class="tab {$activeTab === 'unread' ? 'tab-active' : ''}"
				onclick={() => activeTab.set('unread')}
			>
				Unread ({$notifications.filter((n) => !n.read).length})
			</button>
			<button
				class="tab {$activeTab === 'read' ? 'tab-active' : ''}"
				onclick={() => activeTab.set('read')}
			>
				Read ({$notifications.filter((n) => n.read).length})
			</button>
		</div>

		<!-- LIST -->
		<div class="space-y-4 max-h-80 overflow-y-auto">
			{#each $notifications.filter((n) => n.read === ($activeTab === 'read')) as msg}
				<div class="border border-base-300 rounded-lg p-4 bg-base-100 space-y-2">
					<div class="flex items-center justify-between">
						<h4 class="font-semibold">{msg.title}</h4>

						<!-- priority badge -->
						<span
							class="px-2 py-0.5 rounded text-xs font-medium
							{msg.priority === 'high' ? 'bg-error/20 text-error' : ''}
							{msg.priority === 'medium' ? 'bg-warning/20 text-warning' : ''}
							{msg.priority === 'low' ? 'bg-success/20 text-success' : ''}"
						>
							{msg.priority}
						</span>
					</div>

					<p class="text-sm text-base-content/70">{msg.content}</p>

					<div class="flex justify-between items-center pt-2">
						<span class="text-xs opacity-60">
							{msg.createdAt.toLocaleTimeString()}
						</span>

						{#if !msg.read}
							<button class="btn btn-xs btn-outline" onclick={() => markAsRead(msg.id)}>
								Mark as read
							</button>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<!-- Footer buttons -->
		<div class="modal-action flex justify-between w-full">
			<button class="btn btn-ghost" onclick={() => updatesModal.set(false)}>Close</button>

			<button class="btn btn-primary" onclick={() => markAllAsRead()}> Mark all as read </button>
		</div>
	</div>
</dialog>
