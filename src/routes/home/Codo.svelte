<script>
	export let fotos = [];
</script>

<section class="codo">
	<h2 class="codo__title title">UMBANDA, DE CODÓ</h2>
	<div class="codo__slides">
		<ul class="codo__list">
			{#each fotos as foto}
				<li class="codo__item">
					<div class="codo__media">
						<img src={foto.url} alt={foto.title} class="codo__img" />
					</div>
				</li>
			{/each}
		</ul>
	</div>
	<div class="codo__description">
        <span class="codo__glossario">GLOSSÁRIO</span>
		<p>
			O glossário terminológico dos terecozeiros/umbandistas de Codó foi
			organizado da seguinte forma: vocábulo-termo-entrada em negrito e com
			inicial maiúscula; categoria gramatical em itálico; sigla do campo
			semântico em itálico e negrito cujo vocábulo-termo foi encontrado;
			definição; entre colchetes o contexto de uso; entre parênteses os dados do
			colaborador, entre duas barras as variantes, se houver.
		</p>
	</div>
</section>
