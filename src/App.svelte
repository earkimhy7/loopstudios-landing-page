<script lang="ts">
	import Navigation from './Navigation.svelte';

	export let overview: string;
	export let about: {	title: string; description: string; };
	export let creations: any;
	export let menuItems: any;
	export let socialItems: any;

	let isNavOpened = false;
	let src = '/assets/images/icon-hamburger.svg';
	function openNavigation() {
		this.isNavOpened = !this.isNavOpened;

		const navigation = document.getElementById('navigation-overlay');
		if (this.isNavOpened) {
			this.src = '/assets/images/icon-close.svg';
			document.body.style.overflow = 'hidden';
			navigation.style.display = 'flex';
		} else {
			this.src = '/assets/images/icon-hamburger.svg';
			document.body.style.overflow = 'scroll';
			navigation.style.display = 'none';
		}
	}
</script>

<main>
	<!-- NAVIGATION -->
	<nav>
		<img class="logo" src="/assets/images/logo.svg" alt="loopstudios logo" />
		<img on:click={openNavigation} {src} alt="navigation" />
	</nav>

	<Navigation bind:isNavOpened menuItems={menuItems} />

	<!-- OVERVIEW -->
	<section class="overview-section">
		<h1>{ overview }</h1>
	</section>

	<!-- ABOUT -->
	<section class="about-section text-center">
		<img src="/assets/images/mobile/image-interactive.jpg" alt="interactive" />
		<h2>{ about.title }</h2>
		<p>{ about.description }</p>
	</section>

	<!-- CREATIONS -->
	<section class="creations-section">
		<h2 class="text-center">{ creations.title }</h2>

		<div class="creations-item-container">
			{#each creations.items as item}
				<div class="creations-items">
					<img src="{item.mobileImg}" alt="{item.name}" />
					<div class="overlay"></div>
					<h3>{item.name}</h3>
				</div>
			{/each}
			<button class="see-all-btn">See all</button>
		</div>
	</section>

	<!-- FOOTER -->
	<footer class="text-center">
		<img class="logo" src="/assets/images/logo.svg" alt="loopstudios logo" />
		<ul class="menu-list">
			{#each menuItems as menu}
				<li><a href="{menu.link}">{menu.name}</a></li>
			{/each}
		</ul>

		<ul class="social-list">
			{#each socialItems as social}
				<li><a href="{social.link}"><img src="{social.icon}" alt="{social.icon}"></a></li>
			{/each}
		</ul>

		<p>© 2021 Loopstudios. All rights reserved.</p>
	</footer>
</main>

<style>
	nav {
		position: fixed;
		top: 4.8rem;
		left: 2.2rem;
		right: 2.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}

	img.logo {
		height: 2.4rem;
	}

	/* OVERVIEW STYLES */
	section.overview-section {
  		display: grid;
 		place-content: center;
  		width: 100vw;
  		height: 85vh;
		background-image: url('/assets/images/mobile/image-hero.jpg');
  		background-repeat: no-repeat;
		background-size: 100% 100%;
		padding: 0 2.2rem;
	}

	section.overview-section h1 {
		text-transform: uppercase;
		color: hsl(0, 0%, 100%);
		width: 100%;
		padding: 2.4rem;
		border: solid 0.2px hsl(0, 0%, 100%);
	}

	/* ABOUT STYLES */	
	section.about-section {
		padding: 9.5rem 2.2rem;
	}

	section.about-section img {
		width: 100%;
	}

	section.about-section h2, section.about-section p {
		padding: 0 2.4rem;
	}

	section.about-section h2 {
		margin: 4.4rem 0 2.2rem 0;
	}

	/* CREATIONS STYLES */
	section.creations-section {
		padding: 0 2.2rem 9.5rem;
	}

	section.creations-section h2 {
		margin-bottom: 4.4rem;
	}

	section.creations-section .creations-item-container {
		display: flex;
		flex-direction: column;
		margin: -1.1rem 0;
	}

	section.creations-section .creations-item-container .creations-items {
		width: 100%;
  		padding-top: 36.90%; 
		position: relative; 
		margin: 1.1rem 0;
		cursor: pointer;
	}

	section.creations-section .creations-item-container .creations-items img {
		width: 100%;
		position: absolute;
		top: 0;
		z-index: 1;
	}

	section.creations-section .creations-item-container .creations-items .overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 2;
		background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 50%);
	}

	section.creations-section .creations-item-container .creations-items h3 {
		position: absolute;
		left: 2.4rem;
		bottom: 2.4rem;
		color: hsl(0, 0%, 100%);
		max-width: 40%;
		z-index: 3;
	}

	section.creations-section .creations-item-container .see-all-btn {
		border: solid 0.2rem hsl(0, 0%, 55%);
    	padding: 1.2rem 3.6rem;
    	width: fit-content;
    	margin: 0 auto;
    	text-transform: uppercase;
    	letter-spacing: 0.4rem;
		background: none;
		margin-top: 2.2rem;
		color: hsl(0, 0%, 0%);
	}

	/* FOOTER */
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 5rem 2.2rem;
		background-color: hsl(0, 0%, 0%);
	}

	footer ul.menu-list {
		margin: 2.4rem 0;
	}

	footer ul.menu-list li {
		margin: 1.2rem 0;
	}

	footer ul.social-list {
		display: flex;
		align-items: center;
		margin: 2.4rem 0 1.2rem;
	}

	footer ul.social-list li {
		margin: 0 0.75rem;
	}
</style>