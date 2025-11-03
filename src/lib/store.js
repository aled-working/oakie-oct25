import { writable } from 'svelte/store';

export const devMode = writable(false);

export const user_content = writable({ title: '' });
