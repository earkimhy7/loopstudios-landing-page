<script lang="ts">
	import Overview from './Overview.svelte';
	import Footer from './Footer.svelte';
	import Navigation from './Navigation.svelte';
	import MediaQuery from "./MediaQuery.svelte";
	import SeeAllButton from './SeeAllButton.svelte';

	export let overview: string;
	export let about: {	title: string; description: string; };
	export let creations: any;
	export let menuItems: any;
	export let socialItems: any;

	let y;

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
	<nav class:on-scroll={y > 50}>
		<div class="container navigation-container">
			<img class="logo" src="/assets/images/logo.svg" alt="loopstudios logo" />
			<img on:click={openNavigation} {src} alt="navigation" />
		</div>
	</nav>

	<Navigation menuItems={menuItems} />

	<!-- OVERVIEW -->
	<Overview overview={overview} />

	<!-- ABOUT -->
	<section class="container about-section">
	<MediaQuery query="(min-width: 60rem)" let:matches>
		{#if matches}
			<img src="/assets/images/desktop/image-interactive.jpg" alt="interactive" />
		{:else}
			<img src="/assets/images/mobile/image-interactive.jpg" alt="interactive" />
		{/if}
	</MediaQuery>
	<div class="about-info">
		<h2>{about.title}</h2>
		<p>{about.description}</p>
	</div>
		
	</section>

	<!-- CREATIONS -->
	<section class="container creations-section">
		<div class="creations-header">
			<h2>{creations.title}</h2>
			<MediaQuery query="(min-width: 60rem)" let:matches>
				{#if matches}
					<SeeAllButton />
				{/if}
			</MediaQuery>
		</div>

		<div class="creations-item-container">
			{#each creations.items as item}
				<div class="creations-items">
				<MediaQuery query="(min-width: 60rem)" let:matches>
					{#if matches}
						<img src="{item.desktopImg}" alt="{item.name}" />
					{:else}
						<img src="{item.mobileImg}" alt="{item.name}" />
					{/if}
					<div class="overlay"></div>
					<h3>{item.name}</h3>
				</MediaQuery>
				</div>
			{/each}
		</div>
		<MediaQuery query="(min-width: 60rem)" let:matches>
			{#if !matches}
				<SeeAllButton />
			{/if}
		</MediaQuery>
	</section>

	<!-- FOOTER -->
	<Footer menuItems={menuItems} socialItems={socialItems} />
</main>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: 4.8rem 0;
		background-color: transparent;
		transition: padding 0.4s ease-out, background-color 0.5s ease-out;
		z-index: 100;
	}

	nav.on-scroll {
		padding: 2.4rem 0;
		background-color: rgba(0, 0, 0, 0.9);
	}

	.navigation-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	img.logo {
		height: 2.4rem;
	}

	/* ABOUT STYLES */	
	section.about-section {
		padding: 9.5rem 0;
	}

	section.about-section img {
		width: 100%;
		margin-bottom: 4.4rem;
	}

	section.about-section .about-info {
		text-align: center;
		padding: 0 2.4rem;
	}

	section.about-section .about-info h2 {
		margin-bottom: 2.2rem;
	}

	/* CREATIONS STYLES */
	section.creations-section {
		padding: 0 0 9.5rem;
	}

	section.creations-section .creations-header {
		display: flex;
		justify-content: center;
	}

	section.creations-section .creations-header h2 {
		margin-bottom: 4.4rem;
	}

	section.creations-section .creations-item-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-row-gap: 2.2rem;
	}

	section.creations-section .creations-item-container .creations-items {
		width: 100%;
  		padding-top: 36.90%; 
		position: relative;
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
		background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(255, 255, 255, 0) 50%);
	}

	section.creations-section .creations-item-container .creations-items h3 {
		position: absolute;
		left: 2.4rem;
		bottom: 2.4rem;
		color: hsl(0, 0%, 100%);
		max-width: 40%;
		z-index: 3;
	}

	@media only screen and (min-width: 60rem) {
		img.logo {
			height: auto;
		}

		section.about-section {
			position: relative;
			padding: 16rem 0;
			display: flex;
		}

		section.about-section img {
			margin-bottom: 0;
			width: 65%;
		}

		section.about-section .about-info {
			text-align: start;
			position: absolute;
			bottom: 15.9rem;
			right: 0;
			max-width: 50%;
			background-color: hsl(0, 0%, 100%);
			padding: 9.6rem 0 0 9.6rem;
		}

		section.about-section .about-info h2 {
			margin-bottom: 4.4rem;
		}

		section.creations-section {
			padding: 0 0 16rem;
		}

		section.creations-section .creations-header {
			display: flex;
			justify-content: space-between;
		}

		section.creations-section .creations-header h2 {
			margin-bottom: 8.4rem;
		}

		section.creations-section .creations-item-container {
			grid-template-columns: repeat(4, 1fr);
			grid-column-gap: 2.8rem;
			grid-row-gap: 2.8rem;
		}

		section.creations-section .creations-item-container .creations-items {
  			padding-top: 175.75%;
		}

		section.creations-section .creations-item-container .creations-items .overlay {
			background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(255, 255, 255, 0) 50%);
		}

		section.creations-section .creations-item-container .creations-items h3 {
			left: 4.2rem;
			bottom: 4.2rem;
			right: 4.2rem;
			max-width: unset;
			z-index: 3;
		}
	}
</style>

<svelte:window bind:scrollY={y} />
