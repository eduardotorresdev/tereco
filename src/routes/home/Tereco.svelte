<style lang="sass">
    @use '+style/color'
    @use '+style/font'

    .tereco
        padding: 5rem 0 4rem

    .tereco__container
        display: flex
        flex-direction: column
        align-items: center

    .tereco__header
        position: relative
        background: #fff
        width: 115%
        height: 320px

    .tereco__title
        position: absolute
        left: 1rem
        z-index: 1
        bottom: 0
        font-family: font.$font-secondary
        font-size: 5rem
        color: color.$bg-primary
        margin: 0

    .tereco__body
        display: grid
        grid-template-columns: 1fr 300px
        column-gap: 2rem
        text-align: justify
        margin-top: 3rem

    .tereco__description
        color: color.$white

    .tereco__termos
        display: grid
        row-gap: 1rem
        list-style-type: none
        align-content: start

    .tereco__termo
        font-family: font.$font-secondary
        font-size: 3rem
        color: lighten(color.$bg-primary, 10)

        &:nth-child(even)
            color: lighten(color.$bg-primary, 20)

    .tereco__video
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        object-fit: cover
        opacity: 0.5
        filter: brightness(1.3)
</style>

<section class="tereco">
	<div class="tereco__container container">
		<header class="tereco__header">
			<h2 class="tereco__title title">TERECÔ</h2>
			<!-- svelte-ignore a11y-media-has-caption -->
			<video
				class="tereco__video"
				autoplay
				loop
				src="/video/video-tereco.mp4"
                playsinline
			/>
		</header>
		<div class="tereco__body">
			<div class="tereco__description">
				<p>
					O terecô também é denominado de tambor da mata ou brinquedo de
					Barbasoeiro, Verequete ou pajé (FERRETTI, 2000). O terecô foi
					fortemente repreendido pela polícia codoense. Por isso, os toques de
					terecô aconteciam nos espaços mais afastados, adentrando as matas
					codoenses para não serem descobertos.
				</p>
				<p>
					Em Codó-MA, foi possível que as palavras terecô e umbanda foram usados
					como sinônimos para denominar a religião nascida nas matas codoenses.
					A religião afro-brasileira terecô tem como patrona a entidade Barba
					Soeiro, por esse motivo é padroeira de várias casas de culto do
					terecô. A base ritualística do terecô está ligada à encantaria. A
					encantaria é um processo místico em que pessoas somem e são
					rebatizadas para ajudar os pecadores na terra. Os encantados são seres
					mais evoluídos que descem para ajudar as pessoas pela intervenção dos
					médiuns. No mundo dos encantados, não há pecadores e nem santos, os
					encantados ficam entre o céu e a terra.
				</p>
			</div>
			<ul class="tereco__termos">
				<li class="tereco__termo">___ PIFE</li>
				<li class="tereco__termo">ENCANTADO</li>
				<li class="tereco__termo">BABÁ___</li>
				<li class="tereco__termo">_VINHANÇA_</li>
				<li class="tereco__termo">MANJÁ__</li>
			</ul>
		</div>
	</div>
</section>
