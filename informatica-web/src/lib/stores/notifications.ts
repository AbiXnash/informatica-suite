import { writable } from 'svelte/store';
import type { Notification } from '$lib/types/notifications';

export const activeTab = writable<'unread' | 'read'>('unread');

export const notifications = writable<Notification[]>([
	{
		id: 1,
		title: 'Feature Release',
		content: 'Explore our latest features',
		priority: 'medium',
		read: false,
		createdAt: new Date()
	},
	{
		id: 2,
		title: 'System Update',
		content: 'New updates are rolling out',
		priority: 'low',
		read: false,
		createdAt: new Date()
	},
	{
		id: 3,
		title: 'Performance Boost',
		content: 'Optimized for faster performance',
		priority: 'high',
		read: true,
		createdAt: new Date()
	}
]);

export const updatesModal = writable(false);

export function markAsRead(id: number) {
	notifications.update((list) => list.map((msg) => (msg.id === id ? { ...msg, read: true } : msg)));
}

export function markAllAsRead() {
	notifications.update((list) => list.map((msg) => ({ ...msg, read: true })));
}
