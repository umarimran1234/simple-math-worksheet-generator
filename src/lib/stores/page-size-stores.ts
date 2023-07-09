import { writable } from 'svelte/store';
import { AppConstants, WorkSheetSize } from '$utils/app-constants';

function createPageSizeStore() {
    const { subscribe, set } = writable<WorkSheetSize>(AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.pageSize);

    return {
        subscribe,
        set: (pageSize) => set(pageSize),
        reset: () => set(AppConstants.WORKSHEET_DEFAULT_CONFIG.A4.pageSize)
    };
}

export const pageSizeStore = createPageSizeStore();