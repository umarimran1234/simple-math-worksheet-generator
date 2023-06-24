<script lang="ts">
    import { ClickableTile } from "carbon-components-svelte";

    let navItems = [
        { href: "./two-numbers", text: "Two Numbers"},
        { href: "./number-sequence", text: "Number Sequence"}
    ]

</script>

<ul class="horizontalNav">
{#each navItems as item}
    <li><a href={item.href}>{@html item.text}</a></li>
{/each}
</ul>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        position: fixed;
        top: 0;
        width: 100%;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover:not(.active) {
        background-color: #111;
    }

    .active {
        background-color: #04AA6D;
    }

    @media print {
        .horizontalNav {
            display: none;
            visibility: hidden;
            width: 0%;
            height: 0%;
        }
    }
</style>