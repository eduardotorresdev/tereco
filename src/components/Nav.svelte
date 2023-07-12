<script>
	import Share from './Share.svelte';
</script>

<style lang="sass">
    @use '+style/color'

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
        width: 100px
        height: 40px
        border-radius: 1.25rem
        transition: transform 300ms ease, width 300ms ease

    .nav__link
        display: inline-block
        color: color.$white
        text-decoration: none
        padding: 0.25rem 1rem
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
            transform: translateX(9.7rem)

    .nav__item--active:nth-child(3)
        ~ .nav__marker
            width: 85px
            transform: translateX(17.5rem)
</style>


<nav class="nav">
	<ul class="nav__list">
		<li class="nav__item nav__item--active">
			<a href="/" class="nav__link"> Glossário </a>
		</li>
		<li class="nav__item">
			<a href="/" class="nav__link"> Codó </a>
		</li>
		<li class="nav__item">
			<a href="/" class="nav__link"> Terecô </a>
		</li>
		<li class="nav__item">
			<Share />
		</li>
        <li class="nav__marker"></li>
	</ul>
</nav>
