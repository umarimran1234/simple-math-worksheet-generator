<script lang="ts">
    export let width: string = '12rem';
    export let height: string = '12rem';
    export let hours: number;
    export let minutes: number;
    export let seconds: number;
    export let showHourHand: boolean = true;
    export let showMinuteHand: boolean = true;
    export let showSecondHand: boolean = true;
    export let showSecondMarking: boolean = true;

    let secondsDegrees = ((seconds / 60) * 360) + 90;
    let minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    let hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;

    // console.log('hoursDegrees ', hoursDegrees, ' minutesDegrees ', minutesDegrees, 'secondsDegrees ', secondsDegrees);

</script>

<div class="clock" style="--clockWidth:{width};--clockHeight:{height}">
    <div class="outer-clock-face">

        {#each Array(180) as _, i}
            <!-- <li>{i + 1}</li> -->
            {#if ((i==0) || (i % 30 == 0))}
                <div class="min-marking rotate-degree" style="--rotateDegree:{i}deg;" />
            {:else if i % 6 == 0}
                {#if showSecondMarking }
                    <div class="second-marking rotate-degree" style="--rotateDegree:{i}deg;" />
                {/if}
            {/if}
        {/each}
    </div>
    
    <div class="inner-clock-face">
        <!-- display clock numbers -->
        {#each Array(360) as _, i}
            {#if i==0}
                <div class="number rotate-degree" style="--rotateDegree:0deg;">
                    <div>12</div>
                </div>
            {:else if (i % 30 == 0)}
                <div class="number rotate-degree" style="--rotateDegree:{i}deg;">
                    <div class="rotate-degree" style="--rotateDegree:{-i}deg;">{i/30}</div>
                </div>
            {/if}
        {/each}

        {#if showHourHand}
            <div class="hand hour-hand rotate-degree" style="--rotateDegree:{hoursDegrees}deg;"></div>
        {/if}
        {#if showMinuteHand}
            <div class="hand min-hand rotate-degree" style="--rotateDegree:{minutesDegrees}deg;"></div>
        {/if}            
        {#if showSecondHand}
            <div class="hand second-hand rotate-degree" style="--rotateDegree:{secondsDegrees}deg;"></div>
        {/if}
    </div>
</div>


<style>
    .clock {
        width: var(--clockWidth);
        height: var(--clockHeight);
        position: relative;
        padding: 0.5rem;
        border: 7px solid #282828;
        /*   box-shadow: -4px -4px 10px rgba(67,67,67,0.5),
                        inset 4px 4px 10px rgba(0,0,0,0.5),
                        inset -4px -4px 10px rgba(67,67,67,0.5),
                        4px 4px 10px rgba(0,0,0,0.3); */
        border-radius: 50%;
        margin: 20px auto;
    }

    .outer-clock-face {
        position: relative;
        /*   background: #282828; */
        background: #ffffff;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }

    /* .outer-clock-face::after {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        transform: rotate(90deg)
    } */

    /* .outer-clock-face::after, */
    /* .outer-clock-face::before, */
    .outer-clock-face .min-marking{
        content: '';
        position: absolute;
        width: 5px;
        height: 100%;
        /* background: #1df52f; */
        z-index: 0;
        left: 49%;
    }

    .outer-clock-face .min-marking {
        /* background: #bdbdcb; */
        background: #282828;
        width: 5px;
    }

    .outer-clock-face .second-marking {
        content: '';
        position: absolute;
        height: 100%;
        z-index: 0;
        left: 49%;
        background: #282828;
        width: 2px;
    }

    .outer-clock-face .rotate-degree {
        -webkit-transform: rotate(var(--rotateDegree));
        -moz-transform: rotate(var(--rotateDegree));
        transform: rotate(var(--rotateDegree))
    }

    .inner-clock-face .rotate-degree {
        -webkit-transform: rotate(var(--rotateDegree));
        -moz-transform: rotate(var(--rotateDegree));
        transform: rotate(var(--rotateDegree))
    }

    .inner-clock-face .number {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 1.3rem;
    }

    .inner-clock-face {
        position: absolute;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
        /*   background: #282828; */
        background: #ffffff;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        z-index: 1;
    }

    .inner-clock-face::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        border-radius: 18px;
        margin-left: -9px;
        margin-top: -6px;
        background: #4d4b63;
        z-index: 11;
    }

    .hand {
        width: 50%;
        right: 50%;
        height: 6px;
        background: #61afff;
        position: absolute;
        top: 50%;
        border-radius: 6px;
        transform-origin: 100%;
        transform: rotate(90deg);
        transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
    }

    .hand.hour-hand {
        width: 30%;
        z-index: 3;
    }

    .hand.min-hand {
        height: 3px;
        z-index: 10;
        width: 40%;
    }

    .hand.second-hand {
        background: #ee791a;
        width: 45%;
        height: 2px;
    }
</style>