<script>
	import { onMount } from 'svelte';
	import Share from './Share.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Times from '../img/Times.svelte';

    export let open;
    export let close;
	let current = 'glossario';

	function isActive(element) {
		const rect = element.getBoundingClientRect();
		return rect.top < 100;
	}

	function scrollTo(section) {
		const glossario = document.querySelector('.glossario');
		const codo = document.querySelector('.codo');
		const tereco = document.querySelector('.tereco');

		const sections = {
			glossario,
			codo,
			tereco
		};

		if (!section in sections) return;
		const offset = 90;

		goto(`/${section}`, { noScroll: true, replaceState: true });
		requestAnimationFrame(() => {
			window.scrollTo({
				top: sections[section].offsetTop - offset,
				behavior: 'smooth'
			});
		});
        close()
	}

	if (typeof document !== 'undefined' && $page.params.page)
		scrollTo($page.params.page);

	onMount(() => {
		const codo = document.querySelector('.codo');
		const tereco = document.querySelector('.tereco');

		function getCurrentSection() {
			const exist = [codo, tereco].reduce((prev, element) => {
				if (isActive(element)) return element;

				return prev;
			}, null);
			if (!exist) return 'glossario';

			if (exist === codo) return 'codo';
			if (exist === tereco) return 'tereco';
		}

		window.addEventListener('scroll', () => {
			current = getCurrentSection();
		});
	});
</script>

<style lang="sass">
    @use '+style/color'
    @use '+style/font'
    @use '+style/media' as md

    .nav__list
        display: grid
        grid-auto-flow: column
        column-gap: 4.5rem
        justify-content: space-between
        align-items: center
        position: relative
        list-style-type: none
        padding: 0

    .nav__close
        display: none

    .nav__item
        position: relative
        z-index: 1

    .nav__marker
        content: ''
        display: block
        position: absolute
        left: 0
        background: color.$color-primary
        width: 110px
        height: 40px
        border-radius: 1.25rem
        transition: transform 300ms ease, width 300ms ease

    .nav__link
        display: inline-block
        font-family: font.$font-secondary
        color: color.$white
        text-decoration: none
        padding: 0.55rem 1rem
        border-radius: 1.25rem
        transition: color 150ms ease, background 150ms ease

        &:hover
            color: color.$color-primary
            background: color.$bg-secondary

    .nav__item--active .nav__link
        color: color.$color-quartenary

        &:hover
            background: none

    .nav__item--active:nth-child(2)
        ~ .nav__marker
            width: 69px
            transform: translateX(11.4rem)

    .nav__item--active:nth-child(3)
        ~ .nav__marker
            width: 85px
            transform: translateX(20.3rem)

    +md.desktop-sm
        .nav__list
            margin-top: 2.5rem

    +md.tablet-md
        .nav
            background: rgba(0,0,0,0.7)
            position: fixed
            top: 0
            left: 0
            z-index: 10
            width: 100%
            opacity: 0
            pointer-events: none
            height: 100vh
            transition: opacity 300ms ease

        .nav--open
            opacity: 1
            pointer-events: all

            .nav__list
                transform: translateX(0%)

        .nav__close
            display: inline-block
            position: absolute
            top: 25px
            right: 35px
            background: rgba(0,0,0,0.8)
            border: 0
            cursor: pointer
            width: 60px
            height: 60px

            :global(svg)
                width: 25px
                height: 25px
                color: color.$color-primary

        .nav__list
            background: color.$bg-primary
            width: 70%
            max-width: 400px
            height: 100%
            grid-auto-flow: row
            align-items: start
            justify-content: stretch
            align-content: start
            padding: 3rem 1rem 1rem
            margin: 0
            box-sizing: border-box
            transform: translateX(-100%)
            transition: transform 300ms ease

        .nav__link,
        .nav__item
            width: 100%
            box-sizing: border-box

        .nav__link
            border-radius: 0px
            padding: 1.15rem 5%

        .nav__marker
            width: 92%
            height: 55px
            left: 50%
            transform: translate(-50%, 90%)
            border-radius: 0px

        .nav__item--share
            padding: 0 1rem
            margin-top: 2rem

        .nav__item--active:nth-child(2)
            ~ .nav__marker
                width: 92%
                transform: translate(-50%, 205%)

        .nav__item--active:nth-child(3)
            ~ .nav__marker
                width: 92%
                transform: translate(-50%, 315%)
</style>

<nav class="nav" class:nav--open={open}>
	<button class="nav__close" on:click|preventDefault={close}>
		<Times />
	</button>
	<ul class="nav__list">
		<li class="nav__item" class:nav__item--active={current === 'glossario'}>
			<a
				href="/"
				on:click|preventDefault={() => scrollTo('glossario')}
				class="nav__link"
			>
				Glossário
			</a>
		</li>
		<li class="nav__item" class:nav__item--active={current === 'codo'}>
			<a
				href="/"
				on:click|preventDefault={() => scrollTo('codo')}
				class="nav__link"
			>
				Codó
			</a>
		</li>
		<li class="nav__item" class:nav__item--active={current === 'tereco'}>
			<a
				href="/"
				on:click|preventDefault={() => scrollTo('tereco')}
				class="nav__link"
			>
				Terecô
			</a>
		</li>
		<li class="nav__item nav__item--share">
			<Share />
		</li>
		<li class="nav__marker" />
	</ul>
</nav>
