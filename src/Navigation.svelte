<script>
    export let isNavOpened;
    export let menuItems;
</script>

<!-- {#if isNavOpened} -->
<div class="navigation-wrapper" id="navigation-wrapper">
    <div class="navigation-overlay" >
        <ul>
            {#each menuItems as menu}
                <li>
                    <a href="{menu.link}">{menu.name}</a>
                </li>
            {/each}
        </ul>
    </div>
</div>
<!-- {/if} -->

<style>
    .navigation-wrapper {
        position: fixed;
        width: 100%;
        height: 100vh;
        display: none;
        z-index: 50;
    }

	.navigation-wrapper .navigation-overlay {
		position: absolute;
    	left: 0;
    	top: 0;
    	bottom: 0;
        right: 0;
        display: grid;
        background: hsl(0, 0%, 0%);
        place-items: center;
        padding: 0 2.2rem;
    }
    
    .navigation-wrapper .navigation-overlay ul {
        width: 100%;
        list-style: none;
        color: hsl(0, 0%, 100%);
        text-transform: uppercase;
    }

    .navigation-wrapper .navigation-overlay ul li {
        margin: 3.2rem 0;
    }

    .navigation-wrapper .navigation-overlay ul li a {
        font-size: 3.2rem;
        font-family: "Josefin Sans", sans-serif;
        font-weight: 300;
    }
</style>