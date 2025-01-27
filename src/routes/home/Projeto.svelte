<style lang="sass">
	@use '+style/font'
	@use '+style/color'
	@use '+style/media' as md
	@use 'sass:math'

	.projeto
		display: flex
		flex-direction: column
		align-items: center
		position: relative
		overflow: hidden
		padding: 6.5rem 0 4rem
		margin-top: 0

	.projeto__title
		background: rgb(57,120,216)
		background: linear-gradient(55deg, rgba(57,120,216,1) 16%, rgba(255,194,13,1) 38%, rgba(255,194,13,1) 64%, rgba(229,70,70,1) 78%)
		background-clip: text
		font-family: font.$font-secondary
		font-size: 6rem
		color: transparent
		margin: 0
		white-space: nowrap

	.projeto__slides
		overflow: visible

	.projeto__list
		display: flex
		list-style-type: none
		padding: 0

	.projeto__item
		flex: 0 0 44%
		min-width: 0
		margin-right: 4%

	.projeto__media
		position: relative
		background: color.$bg-secondary
		width: 100%
		cursor: pointer
		padding-top: math.div(25, 42) * 100%

	.projeto__img
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100%
		object-fit: cover

	.projeto__description
		position: relative
		font-size: 1.125rem
		color: color.$white
		line-height: 1.75
		text-align: justify
		padding-bottom: 5rem
		margin-top: 2rem

		p
			text-indent: 3rem

	.projeto__glossario
		position: absolute
		right: 0
		bottom: 0
		font-family: font.$font-secondary
		font-size: 4rem
		color: lighten(color.$bg-primary, 9)

	+md.tablet-lg
		.projeto__title
			font-size: 5rem

	+md.tablet-md
		.projeto
			padding: 5rem 0 4rem

		.projeto__title
			font-size: 4.5rem
			top: 0.5rem

	+md.tablet-sm
		.projeto
			padding: 5rem 0 4rem

		.projeto__title
			font-size: 4rem
			top: 1rem

		.projeto__item
			flex: 0 0 60%

		.projeto__glossario
			font-size: 3rem

	+md.mobile-lg
		.projeto
			padding: 3rem 0 4rem

		.projeto__title
			font-size: 3rem
			top: 0.5rem
			
		.projeto__item
			flex: 0 0 80%

	+md.mobile-md
		.projeto
			padding: 2.5rem 0 4rem

		.projeto__title
			font-size: 2.25rem
			top: 0rem

		.projeto__glossario
			font-size: 2.5rem
</style>

<section class="projeto">
	<div class="projeto__container container">
		<h2 class="projeto__title title">O PROJETO</h2>
		<div class="projeto__description">
			<p>
					O Glossário Etnoterminológico do Terecô foi produzido em dois anos de
				pesquisa desenvolvida sobre o terecô, em Codó-MA. Para tanto, foram
				realizadas visitas nos salões de terecô, entrevistas, gravações em
				vídeo, fotos (quando autorizadas) e participação em grupo de whatsapp.
				Esse percurso foi importante para adentrarmos no mundo dos terecozeiros
				e compreendermos as organizações denominativas e conceptuais desses
				sujeitos.
			</p>
			<p>
					Nesse percurso, compreendemos que o saber das bibliotecas vivas que
				entrevistamos deveria estar disposto para além das normas impostas pela
				academia. Sabemos que a leitura de trabalhos acadêmicos ainda não é
				democrático e exclui uma boa parte da população brasileira pelo alto
				nível de complexidade. Além disso, sempre nos questionamos sobre como
				fazer a devolução daquilo que nos foi doado, como retribuir o
				conhecimento dado em forma de entrevistas. Foi a partir dessa
				preocupação que pensamos e organizamos o Glossário Etnoterminológico do
				Terecô ora apresentado, a fim de proporcionar, seguindo a metodologia da
				terminologia, uma redação de fácil compreensão, em especial, aos
				terecozeiros.
			</p>
			<p>
					Para além da preocupação redacional, ao longo da pesquisa, logo na
				qualificação, pensamos de que forma divulgar os resultados da pesquisa
				para além da dissertação. A partir dessa necessidade, fizemos este web
				site a fim de valorizar e divulgar os conhecimentos dos terecozeiros,
				proporcionar um espaço de fonte segura para professores da educação
				básica e auxiliar na promoção da igualdade racial.
			</p>
			<p>
					Esta pesquisa justifica-se pela necessidade de investigarmos a
				terminologia do terecô pois, até onde pudemos investigar, não foram
				realizadas, anteriormente, pesquisas de cunho etnoterminológico sobre
				essa importante religião afro-brasileira/maranhense.
			</p>
		</div>
	</div>
</section>
