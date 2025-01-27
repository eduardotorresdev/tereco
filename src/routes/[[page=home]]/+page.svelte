<script>
	import '+style/global.sass';
	import Header from '+components/Header.svelte';
	import Codo from '../home/Codo.svelte';
	import Citacao from '../home/Citacao.svelte';
	import Tereco from '../home/Tereco.svelte';
	import Glossario from '../home/Glossario.svelte';
	import Projeto from '../home/Projeto.svelte';
	import Ajuda from '../home/Ajuda.svelte';
	export let data;
</script>

<svelte:head>
	<title>No toque do Terecô</title>
	<meta name="theme-color" content="#1A1E2D" />
</svelte:head>

<Header />
<Glossario grupos={data.palavras} />
<Ajuda />
<Projeto />
<Codo />
<Citacao />
<Tereco />
