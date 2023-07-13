<style lang="sass">
	@use '+style/color'
	@use '+style/font'
	@use '+style/media' as md

	.citacao
		position: relative
		background: color.$bg-tertiary
		padding: 4rem 0

	.citacao__container
		display: flex
		flex-direction: column
		align-items: center

	.citacao__description
		font-size: 2rem
		color: color.$white
		text-align: center

	.citacao__autoria
		font-size: 1.5rem
		color: color.$color-tertiary
		margin-left: -15rem

	.citacao__termos
		position: absolute
		bottom: 1rem
		right: 1rem
		font-family: font.$font-secondary
		font-size: 1.5rem
		color: color.$bg-primary

	+md.mobile-md
		.citacao__description
			font-size: 1.4rem
			margin-left: 0
			margin-right: 0

		.citacao__autoria
			font-size: 1.25rem
			margin-top: 1rem
			margin-left: -8rem

		.citacao__termos
			font-size: 1.125rem
</style>

<section class="citacao">
	<div class="citacao__container container">
		<blockquote class="citacao__description">
			Santa Bárbara, me dê licença<br />
			Pra baiar no Seu salão<br />
			Chamei meu mestre<br />
			Que ele é Rei Salomão
		</blockquote>
		<span class="citacao__autoria">- Doutrina de terecô </span>
		<span class="citacao__termos"> PIFE, ANCESTRALIDADE, CABAÇA </span>
	</div>
</section>
