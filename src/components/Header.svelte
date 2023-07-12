<script>
	import { onMount } from 'svelte';
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';

	let fixed = false;

	onMount(() => {
		window.addEventListener('scroll', (e) => {
			fixed = window.scrollY > 0;
		});
	});
</script>

<style lang="sass">
    @use '+style/color'

    .header--fixed
        position: fixed
        top: 0
        left: 0
        right: 0
        z-index: 10
        background: transparentize(color.$bg-primary, 0.3)
        backdrop-filter: blur(10px)

        .header__container
            top: 0

        .header__logo
            top: 0

    .header__container
        display: grid
        grid-template-columns: auto auto 1fr
        column-gap: 4rem
        align-items: center
        position: relative
        top: 2rem
        transition: top 200ms ease

    .header__logo
        align-self: start
        position: relative
        top: -2rem
        transition: top 200ms ease
</style>

<header class="header" class:header--fixed={fixed}>
	<div class="container header__container">
		<a href="/" class="header__logo">
			<Logo {fixed} />
		</a>
		<div class="header__nav">
			<Nav {fixed} />
		</div>
	</div>
</header>
