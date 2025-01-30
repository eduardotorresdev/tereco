<script>
	import Tipbox from '../../components/Tipbox.svelte';
</script>

<style lang="sass">
    @use '+style/font'
    @use '+style/color'
    @use '+style/media' as md
    @use 'sass:math'

    .ajuda
        display: flex
        flex-direction: column
        align-items: center
        position: relative
        overflow: hidden
        padding: 4rem 0 2rem
        margin-top: 0

    .ajuda__title
        background-clip: text
        font-family: font.$font-secondary
        font-size: 3rem
        color: color.$color-secondary
        text-align: center
        margin: 0
        white-space: nowrap

    .ajuda__slides
        overflow: visible

    .ajuda__list
        display: flex
        list-style-type: none
        padding: 0

    .ajuda__item
        flex: 0 0 44%
        min-width: 0
        margin-right: 4%

    .ajuda__media
        position: relative
        background: color.$bg-secondary
        width: 100%
        cursor: pointer
        padding-top: math.div(25, 42) * 100%

    .ajuda__img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        object-fit: cover

    .ajuda__exemplo
        background: color.$bg-tertiary
        font-family: font.$font-primary
        font-size: 1.125rem
        color: color.$white
        text-align: justify
        line-height: 2
        opacity: 0.9
        border-radius: 8px
        padding: 1.125rem 2.125rem 1.125rem 2.125rem
        margin: 2rem 0

    .ajuda__explicacao
        position: relative

    .ajuda__dica
        display: block
        background: rgba(255,255,255,0.2)
        position: absolute
        top: -50px
        left: 50%
        font-size: 1rem
        backdrop-filter: blur(20px)
        white-space: nowrap
        transform: translate(-50%, -100%)
        padding: 12px 20px
        border-radius: 6px

    .ajuda__description
        position: relative
        font-size: 1.125rem
        color: color.$white
        line-height: 1.75
        text-align: justify
        padding-bottom: 5rem
        margin-top: 2rem

        p
            text-indent: 3rem

    .ajuda__glossario
        position: absolute
        right: 0
        bottom: 0
        font-family: font.$font-secondary
        font-size: 4rem
        color: lighten(color.$bg-primary, 9)

    +md.tablet-lg
        .ajuda__title
            font-size: 5rem

    +md.tablet-md
        .ajuda
            padding: 5rem 0 4rem

        .ajuda__title
            font-size: 4.5rem
            top: 0.5rem

    +md.tablet-sm
        .ajuda
            padding: 5rem 0 4rem

        .ajuda__title
            font-size: 4rem
            top: 1rem

        .ajuda__item
            flex: 0 0 60%

        .ajuda__glossario
            font-size: 3rem

    +md.mobile-lg
        .ajuda
            padding: 3rem 0 4rem

        .ajuda__title
            font-size: 3rem
            top: 0.5rem
            
        .ajuda__item
            flex: 0 0 80%

    +md.mobile-md
        .ajuda
            padding: 2.5rem 0 4rem

        .ajuda__title
            font-size: 2.25rem
            top: 0rem

        .ajuda__glossario
            font-size: 2.5rem
</style>

<section class="ajuda" id="ajuda">
	<div class="ajuda__container container">
		<h2 class="ajuda__title title">Como eu leio o Glossário?</h2>
		<div class="ajuda__description">
			<p>
				Para uma proveitosa leitura do glossário, é preciso compreender que
				apresentamos, em ordem alfabética, o vocábulo-termo-entrada em negrito,
				em cor vermelha, com letra inicial maiúscula; em seguida, o campo
				semântico ao qual pertence em negrito e itálico; na linha abaixo, a
				definição do vocábulo-termo-entrada; em colchete, o contexto de uso;
				depois, os dados dos colaboradores (a saber: iniciais, sexo e data de
				realização da entrevista); nos casos em que houve mais de uma
				denominação, dispomos as variantes separadas por duas barras; e, por
				último, nos casos em que houve necessidade, inserimos o sistema de
				remissivas (Ver). Para melhor compreensão, segue o exemplo:
			</p>
		</div>
		<div class="ajuda__exemplo">
            <p></p>
			<Tipbox tip="Vocábulo-termo-entrada">
				<b>Alvorada espiritual</b>
			</Tipbox>.
			<Tipbox tip="Categoria gramatical">
				<i>Sintagma nominal</i>
			</Tipbox>.
			<Tipbox tip="Campo semântico">
				<b>AMER</b>
			</Tipbox>.
				<Tipbox tip="Definição" bottom>
					Matinada religiosa, realizada entre 5 e 6 horas, que dá início à festa
					anual de uma tenda espiritual e na qual são preparados os filhos de
					santo em homenagem a Oxalá para pedir proteção.
				</Tipbox>
			</p>
			<p>
				<Tipbox tip="Contexto de uso" bottom>
					<b>Contexto de uso:</b> [Alvorada é a abertura do trabalho, é quando a
					gente vai fazer a festa da gente ou o festejo, aí tem a alvorada de manhã,
					5h da manhã, que é a primeira abertura do dia que se chama.] (D.S., sexo
					masculino, 08/09/2023)
				</Tipbox>
			</p>
		</div>
	</div>
</section>
