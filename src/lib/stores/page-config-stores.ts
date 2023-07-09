import { writable } from 'svelte/store';
import { AppConstants, WorkSheetSize } from '$utils/app-constants';
import type { PageConfig } from '$utils/app-constants';


function createPageConfigStore() {
    const { subscribe, set, update } = writable<PageConfig>(AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.pageConfig);

    return {
        subscribe,
        set: (config: PageConfig) => set(config)
    };
}

export const pageConfigStore = createPageConfigStore();