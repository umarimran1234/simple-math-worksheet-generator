<script lang="ts">
    
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { base } from '$app/paths';

    import { appSelectedFunctionStore } from "$lib/stores/AppStores";

    import { getAppFunctionById } from "$lib/constants/AppConstants";
    

    onMount(() => {
        console.log('$appSelectedFunctionStore [' +  $appSelectedFunctionStore + ']');
        console.log('getAppFunctionById [' + getAppFunctionById($appSelectedFunctionStore) + ']');
        goto(base + getAppFunctionById($appSelectedFunctionStore).route);
    });
</script>

<style>    
</style>