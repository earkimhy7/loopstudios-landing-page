<script>
	import MenuList from './MenuList.svelte';
    export let menuItems;
    export let socialItems;
</script>

<footer>
    <div class="container footer-container">
        <img class="logo" src="/assets/images/logo.svg" alt="loopstudios logo" />
        <MenuList menuItems={menuItems} />

        <ul class="social-list">
            {#each socialItems as social}
                <li><a href="{social.link}"><img src="{social.icon}" alt="{social.icon}"></a></li>
            {/each}
        </ul>

        <p>© 2021 Loopstudios. All rights reserved.</p>
    <div>
</footer>

<style>
	footer {
		padding: 5rem 0;
		background-color: hsl(0, 0%, 0%);
		text-align: center;
    }
    
    footer .footer-container {
        display: grid;
        place-items: center;
    }

	footer .footer-container ul.social-list {
		display: flex;
		align-items: center;
		margin: 2.4rem 0 1.2rem;
	}

	footer .footer-container ul.social-list li {
		margin: 0 0.75rem;
    }
    
    @media only screen and (min-width: 76.9rem) {
        footer {
            padding-bottom: calc(5rem - 3.2rem);
        }

        footer .footer-container {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            grid-template-areas:
                'img social'
                'menu p';
            grid-row-gap: 3.2rem;
            place-items: start;
        }

        footer .footer-container ul.social-list {
            display: flex;
            align-items: center;
            margin: 0;
            grid-area: social;
        }

        footer .footer-container ul.social-list li {
            margin: 0 0.75rem;
        }

        footer .footer-container ul.social-list, p {
            margin-left: auto;
        }
    }
</style>