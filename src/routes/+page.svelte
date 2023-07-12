<script>
	import '+style/global.sass';
	import Header from '+components/Header.svelte';
	import Codo from './home/Codo.svelte';
	import Citacao from './home/Citacao.svelte';
	import Tereco from './home/Tereco.svelte';
	import Glossario from './home/Glossario.svelte';
	export let data;
</script>

<svelte:head>
	<title>No toque do Terecô</title>
	<meta name="theme-color" content="#1A1E2D" />
</svelte:head>

<Header />
<Glossario grupos={data.palavras} />
<Codo />
<Citacao />
<Tereco />
