<style lang="sass">
	@use '+style/color'
	@use '+style/font'

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
