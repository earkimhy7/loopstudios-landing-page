<script>
    export let isNavOpened;
    export let menuItems;
</script>

<!-- {#if isNavOpened} -->
<div class="navigation-overlay" id="navigation-overlay">
        <ul>
            {#each menuItems as menu}
                <li>
                    <a href="{menu.link}">{menu.name}</a>
                </li>
            {/each}
        </ul>
</div>
<!-- {/if} -->

<style>
    .navigation-overlay {
        position: fixed;
        width: 100%;
        height: 100vh;
        display: none;
        background: hsl(0, 0%, 0%);
        z-index: 50;
        padding: 0 2.2rem;
        align-items: center;
    }
    
    .navigation-overlay ul {
        width: 100%;
        list-style: none;
        color: hsl(0, 0%, 100%);
        text-transform: uppercase;
    }

    .navigation-overlay ul li {
        margin: 3.2rem 0;
    }

    .navigation-overlay ul li a {
        font-size: 3.2rem;
        font-family: "Josefin Sans", sans-serif;
        font-weight: 300;
    }
</style>