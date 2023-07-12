<script>
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
</script>

<style lang="sass">
    .header__container
        display: grid
        grid-template-columns: auto auto 1fr
        column-gap: 2.25rem
        align-items: center

    .header__logo
        align-self: start

    .header__brasao
        width: 60px
        height: 60px
        object-fit: contain
        padding: 2rem 0

</style>

<header class="header">
	<div class="container header__container">
		<div class="header__logo">
			<Logo />
		</div>
		<div class="header__cidade">
			<img src="/img/brasao-codo.svg" alt="Brasão de Codó" class="header__brasao" />
		</div>
		<div class="header__nav">
			<Nav />
		</div>
	</div>
</header>
