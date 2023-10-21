import { writable } from 'svelte/store';
import { AppConstants } from '../constants';
// import { browser } from '$app/environment';

// function createAppThemeStore(defaultTheme) {
//     const { subscribe, set, update } = writable(defaultTheme);

//     return {
//         subscribe,
//         set: (state) => set(state),
//         update: (state) => update(state),
//         reset: () => set(defaultTheme)
//     };
// }

// export const appThemeStore = createAppThemeStore(true);

export const SMWG_SELECTED_FUNCTION_KEY = 'smwg-selected-function';
export const SMWG_THEME = 'smwg-theme';

/**
 * https://dev.to/danawoodman/svelte-quick-tip-connect-a-store-to-local-storage-4idi
 */
const selectedTheme = localStorage.getItem(SMWG_THEME);
export const appThemeStore = writable<boolean>(selectedTheme === 'true');
appThemeStore.subscribe((value) => localStorage.setItem(SMWG_THEME, String(value)));

const selectedFunction = localStorage.getItem(SMWG_SELECTED_FUNCTION_KEY);
export const appSelectedFunctionStore = writable(selectedFunction || AppConstants.DEFAULT_SELECTED_FUNCTION);
appSelectedFunctionStore.subscribe(value => localStorage.setItem(SMWG_SELECTED_FUNCTION_KEY, value));