export type Priority = 'low' | 'medium' | 'high';

export interface Notification {
	id: number;
	title: string;
	content: string;
	priority: Priority;
	read: boolean;
	createdAt: Date;
}
