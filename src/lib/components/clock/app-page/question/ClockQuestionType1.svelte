<script lang="ts">

    import Analogclock from "./analogclock.svelte";

    import AnalogClockSvg from "./analog-clock-svg.svelte";

    export let showQuestionNo: boolean = false;
    export let questionNo:number = 1;

    export let showSecondMarking: boolean = true;

    export let showHourHand: boolean = true;
    export let showMinuteHand: boolean = true;
    export let showSecondHand: boolean = false;
    

    export let showDigitalClockHour: boolean = true;
    export let showDigitalClockMinute: boolean = true;

    let width: string = "75mm";
    let height: string = "90mm";
    let margin: string = "3mm";
    let padding: string = "2mm";
    let fontsize: string = "30px";

    let clockWidth: string = '12rem';
    let clockHeight: string = '12rem';

    let now = new Date();
    // let seconds = now.getSeconds();
    export let seconds = 0;
    export let minutes = now.getMinutes();
    export let hours = now.getHours();

    export let amPmMode: boolean = true;


    const getHoursDisplayStr = (hours: number) => {
        let hoursInAmPm: number = hours % 12;
        hoursInAmPm = (hoursInAmPm == 0) ? 12 : hoursInAmPm;

        return String(amPmMode ? hoursInAmPm : hours);
    }

    const getMinutesDisplayStr = (minutes: number) => {
        return String(minutes).padStart(2, '0');
    }

    $: ampm = hours >= 12 ? 'pm' : 'am';
    $: hoursDisplayStr = getHoursDisplayStr(hours);
    $: minutesDisplayStr = getMinutesDisplayStr(minutes);
</script>

<div class="clockQuestionType1" style="--height:{height};--width:{width};--margin:{margin};--padding:{padding};--fontsize:{fontsize}">
    {#if showQuestionNo}
        <div class="questionNo">{questionNo}.</div>
    {/if}

    <!-- <Analogclock width= {clockWidth} height= {clockHeight} hours= {hours} minutes= {minutes} seconds={seconds} 
        showHourHand={showHourHand} showMinuteHand={showMinuteHand}
        showSecondHand={showSecondHand} showSecondMarking={showSecondMarking} /> -->
    
    <AnalogClockSvg hours={hours} minutes={minutes} seconds={seconds} 
        showHourHand={showHourHand} showMinuteHand={showMinuteHand}
        showSecondHand={showSecondHand} showSecondMarking={showSecondMarking} />

    <div class="timeContainer">
        <div class="timeBox">{ showDigitalClockHour ? hoursDisplayStr : ''}</div>
        <div>:</div>
        <div class="timeBox">{ showDigitalClockMinute ? minutesDisplayStr : ''}</div>
        {#if amPmMode}
            <div class="timeStr">({ampm})</div>
        {/if}
    </div>
</div>

<style>
    .clockQuestionType1 {
        height: var(--height);
        width: var(--width);
        /* margin: var(--margin); */
        /* padding: var(--padding); */
        font-size: var(--fontsize);
        color: black;
        /* border: 1px solid; */
        /* border-radius: 5mm; */
        /* background-color: ivory; */
        font-family: Verdana, sans-serif;
    }

    .questionNo {
        font-size: 20px;
    }

   

    .rotate-degree {
        -webkit-transform: rotate(var(--rotateDegree));
        -moz-transform: rotate(var(--rotateDegree));
        transform: rotate(var(--rotateDegree))
    }

    .timeContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .timeBox {
        border: solid;
        width: 15mm;
        height: 10mm;
        text-align: center;
    }
</style>