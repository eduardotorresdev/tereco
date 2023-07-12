<script>
	export let grupos;
	import { onMount } from 'svelte';
    import emblaCarouselSvelte from 'embla-carousel-svelte'
	import ArrowVertical from '../../img/ArrowVertical.svelte';

	const letras = Array.from({ length: 26 }, (_, index) =>
		String.fromCharCode(65 + index)
	);

	let fixed = false;
	onMount(() => {
		window.addEventListener('scroll', (e) => {
			fixed = window.scrollY > 0;
		});
	});

	const cores = ['primary', 'secondary', 'tertiary', 'quartenary'];

	function gerarIndice(id) {
		const indice = id % cores.length;
		return indice;
	}

	let conteudo = '';

	const open = (palavra) => {
		conteudo = palavra.conteudo;
	};

    const options = {align: 'start'}

    const letterExists = (letter) => {
        return grupos.find(grupo => grupo.name === letter) !== undefined
    }
</script>

<style lang="sass">
    @use '+style/color'
    @use '+style/font'

    .glossario
        margin: 5rem 0 4rem

        &--fixed
            margin-top: 10.75rem

    .glossario__container
        position: relative

    .glossario__toolbar
        display: grid
        justify-items: center
        position: absolute
        top: 0
        left: -1.25rem
        height: 100%
        overflow: hidden
        transform: translateX(-100%)
        
    

    .glossario__letras
        display: grid
        row-gap: 1rem
        list-style-type: none
        padding: 0
        height: 100%
        overflow: hidden

    .glossario__letra
        font-family: font.$font-secondary
        font-size: 1.25rem

    .glossario__letra--disabled
        pointer-events: none
        opacity: 0.3

        .glossario__link
            filter: grayscale(100%)

    .glossario__body
        background: color.$bg-tertiary
        height: 450px
        border-radius: 8px
        padding: 1.125rem
        padding-top: 0
        padding-right: 0
        overflow-y: scroll

    .glossario__header
        display: grid
        grid-template-columns: 200px 1fr
        column-gap: 2rem
        position: sticky
        background: color.$bg-tertiary
        top: 0
        z-index: 5
        align-content: center
        align-items: center
        padding: 1.125rem 0

    .glossario__grupos,
    .glossario__grupo,
    .glossario__palavras
        display: grid
        grid-auto-flow: column
        padding: 0
        list-style-type: none
        justify-content: start
        justify-items: start
        align-items: center
        align-content: center
        margin: 0

    .glossario__wrap
        overflow: hidden

    .glossario__grupos
        cursor: grab
        column-gap: 2.5rem

        &:active
            cursor: grabbing

    .glossario__grupo
        column-gap: 1rem

    .glossario__categoria
        display: inline-block
        background: color.$bg-primary
        font-family: font.$font-secondary
        font-size: 1.25rem
        color: color.$white
        padding: 0.25rem 1rem

    .glossario__palavra
        .glossario__link
            display: inline-block
            background: color.$color-primary
            color: color.$white
            line-height: 1.25
            white-space: nowrap
            border-radius: 6px
            padding: 0.25rem 0.5rem
            transition: background 150ms ease, color 150ms ease

            &:hover 
                background: color.$white
                color: color.$bg-tertiary

    .glossario__palavra--secondary
        .glossario__link
            background: color.$color-secondary

    .glossario__palavra--tertiary
        .glossario__link
            background: color.$color-tertiary

    .glossario__palavra--quartenary
        .glossario__link
            background: color.$color-quartenary

    .glossario__title
        position: absolute
        top: 0
        right: 0
        font-family: font.$font-secondary
        font-size: 4rem
        color: color.$bg-tertiary
        transform-origin: left center
        transform: rotate(90deg) translate(5%, -26rem)

    .glossario__link
        color: color.$color-quartenary
        text-decoration: none
        transition: color 150ms ease

        &:hover
            color: color.$color-primary

    .glossario__nav
        background: color.$bg-primary
        border: 0
        color: color.$color-primary
        cursor: pointer
        transition: color 150ms ease, opacity 150ms ease

        &:hover
            color: color.$color-tertiary

    .glossario__nav--prev
        transform: rotate(180deg)

    .glossario__nav:disabled
        pointer-events: none
        color: color.$white
        opacity: 0.3

    .glossario__busca
        background: lighten(color.$bg-primary, 10%)
        font-family: font.$font-primary
        color: color.$white
        border: 0
        border-radius: 8px
        height: 90%
        box-sizing: border-box
        padding: 0 1rem

        &:focus
            outline: 2px solid color.$color-quartenary

    .glossario__description
        font-family: font.$font-primary
        color: color.$white
        text-align: justify
        line-height: 2.5
        opacity: 0.9
        padding: 0 2.125rem 0 1rem
        margin-top: 1rem
</style>

<section class="glossario" class:glossario--fixed={fixed}>
	<div class="glossario__container container">
		<div class="glossario__toolbar">
			<button class="glossario__nav glossario__nav--prev" disabled>
				<ArrowVertical />
			</button>
			<ul class="glossario__letras">
				{#each letras as letra}
					<li class="glossario__letra" class:glossario__letra--disabled={!letterExists(letra)}>
						<a href="/" class="glossario__link">
							{letra}
						</a>
					</li>
				{/each}
			</ul>
			<button class="glossario__nav">
				<ArrowVertical />
			</button>
		</div>
		<div class="glossario__body">
			<div class="glossario__header">
				<input
					type="text"
					class="glossario__busca"
					placeholder="procure aqui a tua palavra"
					autocomplete="off"
				/>
				<div class="glossario__wrap" use:emblaCarouselSvelte={options}>
					<ul class="glossario__grupos">
						{#each grupos as grupo}
							<li class="glossario__grupo">
								<span class="glossario__categoria">{grupo.name}</span>
								<ul class="glossario__palavras">
									{#each grupo.grupo as palavra}
										<li
											class={`glossario__palavra glossario__palavra--${
												cores[gerarIndice(palavra.id)]
											}`}
										>
											<a
												href="/"
												class="glossario__link"
												on:click|preventDefault={() => open(palavra)}
											>
												{palavra.name}
											</a>
										</li>
									{/each}
								</ul>
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<div class="glossario__description">
				{@html conteudo}
			</div>
			<span class="glossario__title"> GLOSSÁRIO </span>
		</div>
	</div>
</section>
