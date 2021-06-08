<script>
    export let menuItems;
</script>

<ul class="menu-list">
    {#each menuItems as menu}
            <li><a href="{menu.link}">{menu.name}</a></li>
    {/each}
</ul>

<style>
	ul.menu-list {
        margin: 2.4rem 0;
	}

	ul.menu-list li {
		margin: 1.2rem 0;
    }
    
    
    @media only screen and (min-width: 76.9rem) {
        ul.menu-list {
            flex-direction: row;
            display: flex;
            margin: 0 -1.4rem;
            grid-area: menu;
        }

        ul.menu-list li {
            margin: 0 1.4rem;
        }
    }
</style>