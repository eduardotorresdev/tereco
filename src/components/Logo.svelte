<script>
	export let fixed;
</script>

<style lang="sass">
    @use '+style/color'
    @use '+style/media' as md

    .logo
        display: flex
        justify-content: center
        position: relative
        padding: 1.25rem 4.75rem 1.25rem 1rem
        transition: padding 200ms ease

    .logo__autora
        position: absolute
        top: 0
        right: -7rem
        font-size: 0.75rem
        color: color.$color-primary
        transition: right 200ms ease

    .logo__nome
        position: relative
        right: 6px
        height: 52px
        z-index: 2
        transform-origin: center top
        transition: transform 200ms ease

    .logo__detalhe
        position: absolute
        top: -1.8rem
        transition: transform 200ms ease
        transform-origin: center top

    .logo__detalhe--vermelho,
    .logo__detalhe--azul
        z-index: 0

    .logo__detalhe--vermelho
        transform: translateX(-50%)

    .logo__detalhe--amarelo
        z-index: 1

    .logo__detalhe--azul
        transform: translateX(40%)

    .logo--small
        padding: 1.25rem 1rem 1.25rem 1rem

        .logo__autora
            right: -7.5rem

        .logo__nome
            transform: scale(0.8) translateY(-10px)

        .logo__detalhe--amarelo
            transform: scale(0.8)

        .logo__detalhe--vermelho
            transform: scale(0.8) translateX(-36%)

        .logo__detalhe--azul
            transform: scale(0.8) translateX(30%)

    +md.tablet-lg
        .logo__detalhe--vermelho
            transform: translate(-40%, 10%)

        .logo__detalhe--azul
            transform: translate(30%)

    +md.tablet-sm
        .logo__detalhe
            top: 0.25rem

        .logo__nome
            top: 1.75rem

        .logo__autora
            top: 2rem
            right: -5rem

        .logo--small
            .logo__autora
                right: -7rem

    +md.mobile-md
        .logo__autora
            top: 0.5rem
            right: -4rem

        .logo--small
            .logo__autora
                top: 0.5rem
                right: -5.75rem
</style>

<div class="logo" class:logo--small={fixed}>
	<img src="/img/logo-nome.svg" class="logo__nome" alt="No toque Terecô" />
	<img src="/img/logo-detalhe-vermelho.svg" class="logo__detalhe logo__detalhe--vermelho" alt="" />
	<img src="/img/logo-detalhe-amarelo.svg" class="logo__detalhe logo__detalhe--amarelo" alt="" />
	<img src="/img/logo-detalhe-azul.svg" class="logo__detalhe logo__detalhe--azul" alt="" />
	<span class="logo__autora"> Autora: Laryssa Porto </span>
</div>
