<script lang="ts">
	import { onMount } from 'svelte';    
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    import { appSelectedFunctionStore } from '$lib/stores/AppStores';

    import { getAppFunctionById } from '$lib/constants';

    // SMUI Menu
    import Menu from '@smui/menu';
    import { Anchor } from '@smui/menu-surface';
    import List, { Item, Separator, Text as ListText, PrimaryText, SecondaryText } from '@smui/list';

    let menu: Menu;
    let anchor: HTMLDivElement;
    let anchorClasses: { [k: string]: boolean } = {};

    // SMUI Chip 
    import Chip, { Set, Text as ChipText, TrailingIcon } from '@smui/chips';

    // SMUI Touch target wrapper
    import Wrapper from '@smui/touch-target';
    

    // SMUI select
    // import Select, { Option } from '@smui/select';    
    import { AppFunctionSelectList, type AppFunctionType } from '$lib/constants';

    let selectedFunction: AppFunctionType = getAppFunctionById($appSelectedFunctionStore);

    const handleSelectedAppFunction = (func: AppFunctionType) => {
        console.log('handleSelectedAppFunction func id[' + func.id + ']'
            + ' label[' + func.label + ']' 
            + ' route[' + func.route+ ']'
        );
        $appSelectedFunctionStore = func.id;
        goto(base + func.route);
    }


    onMount(() => {
        console.log('AppFunctionSelect onMount $appSelectedFunctionStore=[' + $appSelectedFunctionStore + ']');
        selectedFunction = getAppFunctionById($appSelectedFunctionStore);
        console.log('AppFunctionSelect onMount selectedFunction.id=[' + selectedFunction.id + ']');

    });
</script>

    <!-- <Select
        key={(appFunction) => `${appFunction ? appFunction.id : ''}`} 
        bind:value={selectedFunction} 
        label="Worksheet"
        on:SMUISelect:change={handleSelectedAppFunction(selectedFunction)}>
        {#each AppFunctionSelectList as appFunction (appFunction.label)}
            <Option value={appFunction}>{appFunction.label}</Option>
        {/each}
    </Select> -->

    <div class={Object.keys(anchorClasses).join(' ')}
        use:Anchor={{
            addClass: (className) => {
            if (!anchorClasses[className]) {
                anchorClasses[className] = true;
            }
            },
            removeClass: (className) => {
            if (anchorClasses[className]) {
                delete anchorClasses[className];
                anchorClasses = anchorClasses;
            }
            },
        }}
        bind:this={anchor}
    >
        <Wrapper>
            <Set chips={[selectedFunction.label]} let:chip style="display: inline-flex;">
                <Chip {chip} on:click={() => menu.setOpen(true)}>
                    <ChipText tabIndex={0}>{chip}</ChipText>
                    <TrailingIcon class="material-icons">unfold_more</TrailingIcon>
                </Chip>
            </Set>
        </Wrapper>
        <Menu bind:this={menu}
            anchor={false}
            bind:anchorElement={anchor}
            anchorCorner="BOTTOM_LEFT"
        >
            <List twoLine>
                {#each AppFunctionSelectList as appFunction (appFunction.label)}
                    <Item on:SMUI:action={() => (handleSelectedAppFunction(appFunction))}>
                        <ListText>
                            <PrimaryText>{appFunction.label}</PrimaryText>
                        </ListText>
                    </Item>
                {/each}
            </List>
        </Menu>
    </div>

<style>    
</style>