<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	export let fotos = [
		{
			url: '/img/tereco-1.webp',
			alt: 'Terecô'
		},
		{
			url: '/img/tereco-2.webp',
			alt: 'Terecô'
		},
		{
			url: '/img/tereco-3.webp',
			alt: 'Terecô'
		},
		{
			url: '/img/tereco-4.webp',
			alt: 'Terecô'
		},
		{
			url: '/img/tereco-5.webp',
			alt: 'Terecô'
		},
		{
			url: '/img/tereco-6.webp',
			alt: 'Terecô'
		},
		{
			url: '/img/tereco-7.webp',
			alt: 'Terecô'
		},
		{
			url: '/img/tereco-8.webp',
			alt: 'Terecô'
		},
		{
			url: '/img/tereco-9.webp',
			alt: 'Terecô'
		},
	];

	let options = { align: 'center', startIndex: 2 };
</script>

<style lang="sass">
	@use '+style/font'
	@use '+style/color'
	@use '+style/media' as md
	@use 'sass:math'

	.codo
		display: flex
		flex-direction: column
		align-items: center
		position: relative
		overflow: hidden
		padding: 6.5rem 0 4rem
		margin-top: 0

	.codo__title
		position: absolute
		top: 0
		left: 50%
		font-family: font.$font-secondary
		font-size: 6rem
		color: color.$color-primary
		margin: 0
		white-space: nowrap
		transform: translateX(-50%)

	.codo__slides
		overflow: visible

	.codo__list
		display: flex
		list-style-type: none
		padding: 0

	.codo__item
		flex: 0 0 44%
		min-width: 0
		margin-right: 4%

	.codo__media
		position: relative
		background: color.$bg-secondary
		width: 100%
		cursor: pointer
		padding-top: math.div(25, 42) * 100%

	.codo__img
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100%
		object-fit: cover

	.codo__description
		position: relative
		font-size: 1.125rem
		color: color.$white
		line-height: 1.75
		padding-bottom: 5rem
		margin-top: 2rem

	.codo__glossario
		position: absolute
		right: 0
		bottom: 0
		font-family: font.$font-secondary
		font-size: 4rem
		color: lighten(color.$bg-primary, 9)

	+md.tablet-lg
		.codo__title
			font-size: 5rem

	+md.tablet-md
		.codo
			padding: 5rem 0 4rem

		.codo__title
			font-size: 4.5rem
			top: 0.5rem

	+md.tablet-sm
		.codo
			padding: 5rem 0 4rem

		.codo__title
			font-size: 4rem
			top: 1rem

		.codo__item
			flex: 0 0 60%

		.codo__glossario
			font-size: 3rem

	+md.mobile-lg
		.codo
			padding: 3rem 0 4rem

		.codo__title
			font-size: 3rem
			top: 0.5rem
			
		.codo__item
			flex: 0 0 80%

	+md.mobile-md
		.codo
			padding: 2.5rem 0 4rem

		.codo__title
			font-size: 2.25rem
			top: 0rem

		.codo__glossario
			font-size: 2.5rem
</style>

<section class="codo">
	<div class="codo__container container">
		<h2 class="codo__title title">TERECÔ, DE CODÓ</h2>
		<div class="codo__slides" use:emblaCarouselSvelte={{ options }}>
			<ul class="codo__list">
				{#each fotos as foto}
					<li class="codo__item">
						<div href={foto.url} class="codo__media" data-fancybox="gallery">
							<img src={foto.url} alt={foto.title} class="codo__img" />
						</div>
					</li>
				{/each}
			</ul>
		</div>
		<div class="codo__description">
			<span class="codo__glossario">O PROJETO</span>
			<p>
				O glossário terminológico dos terecozeiros/umbandistas de Codó foi
				organizado da seguinte forma: vocábulo-termo-entrada em negrito e com
				inicial maiúscula; categoria gramatical em itálico; sigla do campo
				semântico em itálico e negrito cujo vocábulo-termo foi encontrado;
				definição; entre colchetes o contexto de uso; entre parênteses os dados
				do colaborador, entre duas barras as variantes, se houver.
			</p>
		</div>
	</div>
</section>
