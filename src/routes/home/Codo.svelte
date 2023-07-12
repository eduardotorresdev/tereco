<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { onMount } from 'svelte';

	export let fotos = [
		{
			url: 'https://picsum.photos/420/250?random=1',
			alt: 'Sample'
		},
		{
			url: 'https://picsum.photos/420/250?random=2',
			alt: 'Sample'
		},
		{
			url: 'https://picsum.photos/420/250?random=3',
			alt: 'Sample'
		},
		{
			url: 'https://picsum.photos/420/250?random=4',
			alt: 'Sample'
		},
		{
			url: 'https://picsum.photos/420/250?random=5',
			alt: 'Sample'
		},
		{
			url: 'https://picsum.photos/420/250?random=6',
			alt: 'Sample'
		}
	];

	let options = { align: 'center', startIndex: 2 };

	let fixed = false
	onMount(() => {
		window.addEventListener('scroll', (e) => {
			fixed = window.scrollY > 0;
		});
	});
</script>

<style lang="sass">
	@use '+style/font'
	@use '+style/color'
	@use 'sass:math'

	.codo
		display: flex
		flex-direction: column
		align-items: center
		position: relative
		overflow: hidden
		padding: 6.5rem 0 4rem
		margin-top: 0

		&--fixed
			margin-top: 5.75rem

	.codo__title
		position: absolute
		top: 0
		font-family: font.$font-secondary
		font-size: 6rem
		color: color.$color-primary
		margin: 0

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
		padding-top: math.div(25, 42) * 100%

	.codo__img
		position: absolute
		top: 0
		left: 0
		object-fit: cover

	.codo__description
		position: relative
		color: color.$white
		padding-bottom: 5rem
		margin-top: 2rem

	.codo__glossario
		position: absolute
		right: 0
		bottom: 0
		font-family: font.$font-secondary
		font-size: 4rem
		color: lighten(color.$bg-primary, 9)
</style>

<section class="codo" class:codo--fixed={fixed}>
	<div class="codo__container container">
		<h2 class="codo__title title">UMBANDA, DE CODÓ</h2>
		<div class="codo__slides" use:emblaCarouselSvelte={{ options }}>
			<ul class="codo__list">
				{#each fotos as foto}
					<li class="codo__item">
						<div class="codo__media">
							<img src={foto.url} alt={foto.title} class="codo__img" />
						</div>
					</li>
				{/each}
			</ul>
		</div>
		<div class="codo__description">
			<span class="codo__glossario">GLOSSÁRIO</span>
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
