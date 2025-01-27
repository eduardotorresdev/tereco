<script>
	export let grupos;
	import { onMount } from 'svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import ArrowVertical from '../../img/ArrowVertical.svelte';
	import Fuse from 'fuse.js';

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

	const options = { align: 'start', skipSnaps: true };
	let optionsLetras = {
		align: 'start',
		axis: 'y',
		slidesToScroll: 4,
		skipSnaps: true
	};

	let apiLetras;

	const letterExists = (letter) => {
		return grupos.findIndex((grupo) => grupo.name === letter);
	};

	let busca = '';
	let buscaTimeout = 0;
	const handleBusca = (e) => {
		clearTimeout(buscaTimeout);
		buscaTimeout = setTimeout(() => {
			busca = e.target.value;
		}, 300);
	};

	const filtrar = (dados, busca) => {
		if (busca === '') return dados;

		const fuse = new Fuse(dados, {
			keys: ['name', 'grupo.conteudo'],
			includeScore: true
		});

		apiPalavras.scrollTo(0);

		return fuse.search(busca).map((item) => item.item);
	};

	let apiPalavras;
	const onInit = (e) => {
		apiPalavras = e.detail;
	};

	const scrollPalavras = (index) => {
		apiPalavras.scrollTo(index);
	};
</script>

<style lang="sass">
    @use '+style/color'
    @use '+style/font'
    @use '+style/media' as md

    .glossario
        margin: 5rem 0 4rem

        &--fixed
            margin-top: 10.75rem

    .glossario__container
        position: relative

    .glossario__ajuda
        display: inline-block
        background: rgb(229,70,70)
        background: linear-gradient(65deg, rgba(229,70,70,1) 25%, rgba(255,194,13,1) 60%)
        background-size: 150% 100%
        background-position: right center
        font-family: font.$font-secondary
        font-size: 1.25rem
        color: color.$bg-primary
        text-decoration: none
        cursor: pointer
        border: 0
        border-radius: 8px
        padding: 10px 16px
        margin: 20px 0
        transition: background 500ms ease

        &:hover
            background-position: left center

    .glossario__toolbar
        display: grid
        justify-items: center
        position: absolute
        top: 0
        left: -1.25rem
        height: 100%
        overflow: hidden
        transform: translateX(-100%)

        .glossario__wrap
            padding: 1rem 0

    .glossario__letras
        display: flex
        flex-direction: column
        list-style-type: none
        padding: 0
        height: 100%
        user-select: none

    .glossario__letra
        font-family: font.$font-secondary
        font-size: 1.25rem
        height: 20px
        touch-action: pan-y
        margin-bottom: 1rem

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
        grid-template-columns: 240px 1fr
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

    .glossario__palavras
        column-gap: 0.35rem
        padding-right: 1rem

    .glossario__wrap
        overflow: hidden
        cursor: grab

        &:active
            cursor: grabbing

    .glossario__grupos
        cursor: grab
        column-gap: 2rem

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
            padding: 0.35rem 0.65rem
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
        margin-top: 1rem

        &:hover
            color: color.$color-tertiary

    .glossario__nav--prev
        margin-top: 0
        margin-bottom: 1rem
        transform: rotate(180deg)

    .glossario__nav:disabled
        pointer-events: none
        color: color.$white
        opacity: 0.3

    .glossario__busca
        background: lighten(color.$bg-primary, 10%)
        font-family: font.$font-primary
        font-size: 0.875rem
        color: color.$white
        border: 0
        border-radius: 8px
        height: 100%
        box-sizing: border-box
        padding: 0.5rem 1rem

        &:focus
            outline: 2px solid color.$color-quartenary

    .glossario__description
        font-family: font.$font-primary
        font-size: 1.125rem
        color: color.$white
        text-align: justify
        line-height: 2
        opacity: 0.9
        padding: 0 2.125rem 0 1rem
        margin-top: 1rem

    +md.tablet-lg
        .glossario--fixed
            margin-top: 10.8rem

        .glossario__title
            display: none

        .glossario__toolbar
            left: -0.5rem

    +md.tablet-md
        .glossario__body
            width: 95%
            margin-left: 2.5%

        .glossario__toolbar
            left: 0.5rem

    +md.tablet-sm
        .glossario__header
            grid-template-columns: 1fr
            row-gap: 0.75rem
            padding: 1.125rem

        .glossario__body
            width: 93%
            padding: 0 0 1.125rem
            margin-left: 5%

        .glossario__toolbar
            left: 1rem

    +md.mobile-md
        .glossario__body
            width: 88%
            margin-left: 10%

        .glossario__toolbar
            left: 2rem
</style>

<section class="glossario" class:glossario--fixed={fixed}>
	<div class="glossario__container container">
		<a href="/#ajuda" class="glossario__ajuda"> Como eu leio o glossário? </a>
	</div>
	<div class="glossario__container container">
		<div class="glossario__toolbar">
			<button
				class="glossario__nav glossario__nav--prev"
				on:click|preventDefault={() => {
					apiLetras?.scrollPrev();
				}}
			>
				<ArrowVertical />
			</button>
			<div
				class="glossario__wrap"
				use:emblaCarouselSvelte={{ options: optionsLetras }}
				on:emblaInit={(e) => {
					apiLetras = e.detail;
				}}
			>
				<ul class="glossario__letras">
					{#each letras as letra}
						<li
							class="glossario__letra"
							class:glossario__letra--disabled={letterExists(letra) === -1}
						>
							<a
								href="/"
								class="glossario__link"
								on:click|preventDefault={() => {
									const index = letterExists(letra);

									if (index !== -1) scrollPalavras(index);
								}}
							>
								{letra}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<button
				class="glossario__nav"
				on:click|preventDefault={() => {
					apiLetras?.scrollNext();
				}}
			>
				<ArrowVertical />
			</button>
		</div>
		<div class="glossario__body">
			<div class="glossario__header">
				<input
					type="text"
					class="glossario__busca"
					placeholder="Procure aqui a tua palavra"
					autocomplete="off"
					on:input={handleBusca}
				/>
				<div
					class="glossario__wrap"
					use:emblaCarouselSvelte={{ options }}
					on:emblaInit={onInit}
				>
					<ul class="glossario__grupos">
						{#each filtrar(grupos, busca) as grupo}
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
