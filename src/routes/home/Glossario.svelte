<script>
	const letras = Array.from({ length: 26 }, (_, index) =>
		String.fromCharCode(65 + index)
	);
</script>

<section class="glossario">
	<div class="glossario__toolbar">
		<ul class="glossario__letras">
			{#each letras as letra}
				<li class="glossario__letra">{letra}</li>
			{/each}
		</ul>
	</div>
    <div class="glossario__body">
        <div class="glossario__header">
            <input type="text" class="glossario__busca">
            <ul class="glossario__grupos">
                <li class="glossario__grupo">
                    <span class="glossario__categoria">
                        
                    </span>
                    <ul class="glossario__palavras">
                        <li class="glossario__palavra">

                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="glossario__description">
            <p></p>
        </div>
        <span class="glossario__title">
            GLOSSÁRIO
        </span>
    </div>
</section>
