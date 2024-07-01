<script lang="ts">
    export let hours: number = 0;
    export let minutes: number = 0;
    export let seconds: number = 0;

    export let showSecondMarking: boolean = true;
    export let showHourHand: boolean = true;
    export let showMinuteHand: boolean = true;
    export let showSecondHand: boolean = false;
</script>

<svg viewBox='-50 -50 100 100'>

    <circle class='clock-face' r='48'/>

    <!-- markers -->
    {#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
        <line class='major' y1='36' y2='45' transform='rotate({30 * minute})' />

        {#if minute}
            <g transform='rotate({ (minute / 5 - 6) * 6 * (minute / (minute/5)) })'>
                <text class="clock-text"
                    transform='rotate({ ((minute / 5 - 6) * 6 * (minute / (minute/5))) * -1 },0,{ 31 + (1 - (Math.abs((minute/5-6)*6*(minute/(minute/5))) * Math.PI / 180) / Math.PI) })' 
                    text-anchor='middle' 
                    y='{36 + (Math.abs((minute / 5 - 6) * 6 * ( minute / ( minute / 5))) * Math.PI / 180) / Math.PI - 1}'>
                    {minute / 5}
                </text>
            </g>
        {:else}
            <g transform='rotate(-180)'>
                <text 
                            class="clock-text"
                            transform='rotate(180,0,31)' 
                            text-anchor='middle' 
                            y='{36 + (Math.abs(180) * Math.PI / 180) / Math.PI - 1}'
                            >12
                </text>
            </g>
        {/if}

        {#if showSecondMarking}
            {#each [1, 2, 3, 4] as offset}
                <line class='minor' y1='42' y2='45' transform='rotate({6 * (minute + offset)})' />
            {/each}
        {/if}
        
    {/each}

    <!-- hour hand -->
    {#if showHourHand}
        <line class='hour' y1='6' y2='-20' transform='rotate({30 * hours + minutes / 2})' />
    {/if}

    <!-- minute hand -->
     {#if showMinuteHand}
        <line class='minute' y1='6' y2='-30' transform='rotate({6 * minutes + seconds / 10})' />
    {/if}

    <!-- second hand -->
    {#if showSecondHand}
        <!-- <g transform='rotate({6 * $sweep})'> -->
            <line class='second' y1='10' y2='-36'/>
            <line class='second-counterweight' y1='18' y2='4'/>
        <!-- </g> -->
    {/if}

    <!-- pivot -->
    <circle class='fulcrum' r='1.25' />

</svg>

<style>
	svg {
		width: 100%;
		height: 65%;
	}
	.clock-text {
		/* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 0.7em; */
        font-family: 'Helvetica';
		font-size: 0.3em;
	}

	.clock-face {
		stroke: #333;
		fill: white;
	}

	.fulcrum {
		fill: rgb(180,0,0);
	}

	.minor {
		stroke: #999;
		stroke-width: 0.5;
	}

	.major {
		stroke: #333;
		stroke-width: 1;
	}

	.hour {
		stroke: #333;
		stroke-linecap: round;
		stroke-width: 1.5;
	}

	.minute {
		stroke: #333;
		stroke-linecap: round;
		stroke-width: 1;
	}

	.second {
		stroke-width: 0.5;
	}

	.second, .second-counterweight {
		stroke: rgb(180,0,0);
	}

	.second-counterweight {
		stroke-width: 2.5;
	}
</style>