<script>
    export let overview;
</script>

<section class="overview-section">
	<div class="container">
		<h1>{ overview }</h1>
	</div>
</section>

<style>
	section.overview-section {
  		display: flex;
 		align-items: center;
  		width: 100vw;
  		height: 85vh;
		background-image: url('/assets/images/mobile/image-hero.jpg');
  		background-repeat: no-repeat;
		background-size: cover;
	}

	section.overview-section h1 {
		text-transform: uppercase;
		color: hsl(0, 0%, 100%);
		width: 100%;
		padding: 2.4rem;
		border: solid 0.2px hsl(0, 0%, 100%);
    }
    
    @media only screen and (min-width: 76.9rem) {
		section.overview-section {
			background-image: url('/assets/images/desktop/image-hero.jpg');
		}
		
		section.overview-section h1 {
			max-width: 65rem;
		}
    }
</style>