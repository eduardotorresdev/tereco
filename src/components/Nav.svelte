<script>
	import { onMount } from 'svelte';
	import Share from './Share.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

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
	}

	if (typeof document !== 'undefined' && $page.params.page) scrollTo($page.params.page);

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

    .nav
        padding-left: 2rem

    .nav__list
        display: grid
        grid-auto-flow: column
        column-gap: 3.5rem
        align-items: center
        position: relative
        list-style-type: none
        padding: 0
        justify-content: start

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
            transform: translateX(10.4rem)

    .nav__item--active:nth-child(3)
        ~ .nav__marker
            width: 85px
            transform: translateX(18.3rem)
</style>

<nav class="nav">
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
		<li class="nav__item">
			<Share />
		</li>
		<li class="nav__marker" />
	</ul>
</nav>
