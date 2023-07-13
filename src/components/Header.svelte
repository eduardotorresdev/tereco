<script>
	import { onMount } from 'svelte';
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
	import Bars from '../img/Bars.svelte';

	let open = false;
	let fixed = false;

	onMount(() => {
		window.addEventListener('scroll', (e) => {
			fixed = window.scrollY > 0;
		});
	});
</script>

<style lang="sass">
    @use '+style/color'
    @use '+style/media' as md

    .header--fixed
        position: fixed
        top: 0
        left: 0
        right: 0
        z-index: 10
        background: transparentize(color.$bg-primary, 0.3)
        backdrop-filter: blur(10px)
        padding-bottom: 1rem

        .header__container
            top: 0

        .header__logo
            top: 0

    .header__open
        display: none

    .header__container
        display: grid
        grid-template-columns: auto 1fr
        column-gap: 4rem
        align-items: center
        justify-items: end
        position: relative
        top: 0
        transition: top 200ms ease

    .header__logo
        align-self: start
        position: relative
        // top: -2rem
        transition: top 200ms ease

    +md.desktop-sm
        .header__container,
        .header__logo
            top: 0

    +md.tablet-lg
        .header__container
            column-gap: 2rem

        .header__open
            background: none
            width: 50px
            height: 50px
            cursor: pointer
            border: 0
            margin-top: 1rem

            :global(svg)
                width: 25px
                height: 25px
                color: color.$color-primary

    +md.tablet-md
        .header__open
            display: block

    +md.mobile-md
        .header--fixed
            padding-bottom: 2.5rem
</style>

<header class="header" class:header--fixed={fixed}>
	<div class="container header__container">
		<a href="/" class="header__logo">
			<Logo {fixed} />
		</a>
		<div class="header__nav">
			<button
				on:click|preventDefault={() => (open = true)}
				class="header__open"
			>
				<Bars />
			</button>
			<Nav {fixed} {open} close={() => (open = false)} />
		</div>
	</div>
</header>
