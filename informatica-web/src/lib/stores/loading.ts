// loading.ts
import { writable } from 'svelte/store';

type LoadingState = {
	active: boolean;
	message: string;
};

const defaultState: LoadingState = {
	active: false,
	message: ''
};

let lockTime = 0; // timestamp when loading started

function createLoadingStore() {
	const { subscribe, set, update } = writable<LoadingState>(defaultState);

	return {
		subscribe,

		start(message = 'Loading...', minTime = 2000) {
			lockTime = Date.now() + minTime;

			update(() => ({
				active: true,
				message
			}));
		},

		stop() {
			const now = Date.now();

			// if minimum time not reached → delay stop
			if (now < lockTime) {
				const delay = lockTime - now;
				setTimeout(() => set(defaultState), delay);
			} else {
				set(defaultState);
			}
		},

		set(activeOrState: boolean | Partial<LoadingState>, message?: string) {
			// When you call loading.set(true)
			if (typeof activeOrState === 'boolean') {
				if (activeOrState) {
					this.start(message);
				} else {
					this.stop();
				}
				return;
			}

			// When calling loading.set({ active: true, message: "..." })
			if (activeOrState.active) {
				this.start(activeOrState.message);
			} else {
				this.stop();
			}
		}
	};
}

export const loading = createLoadingStore();
