<script>
    import Facebook from '+img/Facebook.svelte';
    import WhatsApp from '+img/Whatsapp.svelte';
    import Twitter from '+img/Twitter.svelte';
    import Email from '+img/Email.svelte';
	import { page } from '$app/stores';
</script>

<style lang="sass">
    @use '+style/color'
    @use '+style/font'
    @use '+style/media' as md

    .share__list
        display: grid
        grid-auto-flow: column
        column-gap: 1.25rem
        align-items: center
        align-content: center
        list-style-type: none
        padding: 0
        margin-top: 0.25rem

    .share__title
        font-family: font.$font-secondary
        color: color.$color-quartenary

    .share__link,
    .share__item
        display: inline-flex
        align-items: center

    .share__link :global(svg)
        color: color.$white
        transition: color 150ms ease

    .share__link:hover :global(svg)
        color: color.$color-primary

    +md.tablet-lg
        .share__list
            justify-content: start
            column-gap: 2rem

        .share__title
            display: inline-block
            margin-bottom: 1rem
</style>


<div class="share">
    <span class="share__title"> Compartilhe: </span>

    <ul class="share__list">
        <li class="share__item">
            <a
                target="_blank"
                href={`https://www.facebook.com/sharer.php?u=${$page.url.href}`}
                class="share__link"
            >
                <Facebook />
            </a>
        </li>
        <li class="share__item">
            <a
                target="_blank"
                href={`https://api.whatsapp.com/send?text=No toque do Terecô ${$page.url.href}`}
                class="share__link"
            >
                <WhatsApp />
            </a>
        </li>
        <li class="share__item">
            <a
                target="_blank"
                href={`https://twitter.com/share?url=${$page.url.href}&text=No toque do Terecô`}
                class="share__link"
            >
                <Twitter />
            </a>
        </li>
        <li class="share__item">
            <a
                target="_blank"
                href={`mailto:?subject=No toque do Terecô&body=Veja agora mesmo o glossário do Terecô: ${$page.url.href}`}
                class="share__link"
            >
                <Email />
            </a>
        </li>
    </ul>
</div>
