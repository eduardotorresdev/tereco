const dados = [
	{
		name: 'A',
		grupo: [
			{
				name: 'Alvorada espiritual',
				conteudo:
					'<b>Alvorada espiritual</b>. <i>Sintagma nominal</i>. <b><i>AMER</i></b>. Matinada religiosa, realizada entre 5 e 6 horas, que dá início à festa anual de uma tenda espiritual e na qual são preparados os filhos de santo em homenagem a Oxalá para pedir proteção. [Alvorada é a abertura do trabalho, é quando a gente vai fazer a festa da gente ou o festejo, aí tem a alvorada de manhã, 5h da manhã, que é a primeira abertura do dia que se chama.] (D.S., sexo masculino, 08/09/2023)'
			}
		]
	},
	{
		name: 'B',
		grupo: [
			{
				name: 'Babá',
				conteudo:
					'<b>Babá</b>. <i>Adjetivo</i>. <b><i>CCS</i></b>. Pessoa responsável por cuidar do médium que está em transe e de seus pertences. [A gente chama de babá, né. Aquela pessoa que cuida da santidade da pessoa, ela é a babá do santo.] (W.S.A., sexo masculino, 01/05/2023) // Variante: Servidor de santo, servente do santo, quedil'
			},
			{
				name: 'Bronze',
				conteudo:
					"<b>Bronze</b>. <i>Substantivo</i>. <b><i>CCS</i></b>. Meio de pagamento solicitado pelas entidades. [Condição que eles pedem: 'Me dá uma condição?'. Aí, outros não sabem que é o bronzo.] (M.N.N., sexo feminino, 06/09/2023) // Variantes: Condição, corre mundô"
			}
		]
	},
	{
		name: 'C',
		grupo: [
			{
				name: 'Cabaceiro',
				conteudo:
					'<b>Cabaceiro</b>. <i>Adjetivo</i>. <b><i>CCS</i></b>. Pessoa que toca o maracá e tem a função de chamar os seres espirituais. [Dentro do terecô se costuma dizer que quem toca o maracá são os cabaceiros.] (A.J.P.F., sexo masculino, 06/09/2023)'
			},
			{
				name: 'Cavalo',
				conteudo:
					'<b>Cavalo</b>. <i>Adjetivo</i>. <b><i>CCS</i></b>. Pessoa que tem mediunidade e recebe os encantados. [Cavalo, tem gente que chama cavalo, minha moça, meu rapaz, é assim. Meu aparelho são essas palavras que eles chamam né?] (M.N.N., sexo feminino, 06/09/2023) // Variantes: Médium, brincante, aparelho, minha moça, meu rapaz'
			},
			{
				name: 'Corpo sujo',
				conteudo:
					'<b>Corpo sujo</b>. <i>Sintagma adjetival</i>. <b><i>CCS</i></b>. Estado físico antes do cumprimento das obrigações religiosas. [Ah! Eh... a questão do médium que esconde as coisas. Ele... por exemplo, ele sabe que hoje é dia de obrigação. Ele passou a semana toda na casa dele, aí lá ele teve relação, ele teve relação, namorou, não se cuidou, não se preparou, de repente ele vem pra obrigação.] (A.J.P.F., sexo masculino, 06/09/2023)'
			},
			{
				name: 'Corrente',
				conteudo:
					'<b>Corrente</b>. <i>Substantivo</i>. <b><i>AMER</i></b>. Organização estrutural de entidades espirituais que se manifestam por meio da incorporação em seus médiuns. [A corrente ela se divide em sete. Tem a corrente do Tobossa, tem a corrente do caboclo, tem a corrente do povo das águas, tem a corrente de preto velho.] (A.J.P.F., sexo masculino, 06/09/2023)'
			}
		]
	},
	{
		name: 'D',
		grupo: [
			{
				name: 'Deitar para o santo',
				conteudo:
					'<b>Deitar para o santo</b>. <i>Sintagma verbal</i>. <b><i>AMER</i></b>. Recolher-se para o sagrado durante três ou sete dias para preparar o médium. [Deitar pro santo é você ter certeza que é do terecô, ter certeza que aquilo vai seguir na religião, ter certeza que é do santo e vai receber um trabalho.] (A.J.P.F., sexo masculino, 06/09/2023)'
			},
			{
				name: 'Despacho de alma',
				conteudo:
					'<b>Despacho de alma</b>. <i>Sintagma nominal</i>. <b><i>CCS</i></b>. Ritualística de despedida do médium morto a fim de devolver os materiais, como guia e roupas, à natureza. [A casa faz, a casa primeiramente a casa fica de luto por um ano.] (W.A.S., sexo masculino, 01/05/2023)'
			},
			{
				name: 'Doutrina',
				conteudo:
					'<b>Doutrina</b>. <i>Substantivo</i>. <b><i>IM</i></b>. Conjunto de músicas religiosas em homenagem às entidades. [Na questão do terecô não é chamado de música, é doutrinas.] (A.J.P.F., sexo masculino, 06/09/2023)'
			}
		]
	},
	{
		name: 'E',
		grupo: [
			{
				name: 'Encantado',
				conteudo:
					'<b>Encantado</b>. <i>Substantivo</i>. <b><i>AMER</i></b>. Ser capaz de auxiliar e incorporar-se em seres humanos. [São essas entidades, né?! Que o ser humano tá na umbanda, na roda, aí recebe o pai de santo que chama, e aí eles incorpora pra pessoa.] (M.N.N., sexo feminino, 06/09/2023)'
			},
			{
				name: 'Entidade veio só de passagem',
				conteudo:
					'<b>Entidade veio só de passagem</b>. <i>Sintagma verbal</i>. <b><i>AMER</i></b>. Ser espiritual que se manifesta, com brevidade, nos médiuns em determinado local ou situação. [A entidade veio só de passagem significa dizer que a entidade ela incorpora e não fica, não fica na croa do médium.] (A.J.P.F., sexo masculino, 06/09/2023)'
			},
			{
				name: 'Espumosa',
				conteudo:
					'<b>Espumosa</b>. <i>Substantivo</i>. <b><i>CB</i></b>. Bebida alcoólica feita, geralmente, à base de cevada. [A cerveja, as entidades costumam chamar de espumosa ou espumosa, como as pessoas chamam.] (A.J.P.F., sexo masculino, 06/09/2023)'
			}
		]
	},
	{
		name: 'F',
		grupo: [
			{
				name: 'Farda',
				conteudo:
					'<b>Farda</b>. <i>Substantivo</i>. <b><i>VA</i></b>. Vestuário usado por homens e mulheres para culto religioso. [Como é que chama as roupas das mulheres que usam dentro do terreiro?] (S.S.C., sexo masculino, 22/05/2023)'
			},
			{
				name: 'Fazer visita',
				conteudo:
					'<b>Fazer visita</b>. <i>Sintagma verbal</i>. <b><i>AMER</i></b>. Ato de participar de um salão espiritual em celebração à festa de um conjunto de religião. [E que eles fazem pra gente e a gente tem que fazer por eles também.] (S.S.C., sexo masculino, 01/05/2023)'
			}
		]
	},
	{
		name: 'G',
		grupo: [
			{
				name: 'Força',
				conteudo:
					'<b>Força</b>. <i>Substantivo</i>. <b><i>AMER</i></b>. Poder ou energia ancestral. [Força é basicamente como a galera chama o axé em Codó.] (D.N.M.A., 22/07/2023)'
			},
			{
				name: 'Gulepo',
				conteudo:
					'<b>Gulepo</b>. <i>Substantivo</i>. <b><i>CB</i></b>. Bebida alcoólica de origens diversas dada às entidades religiosas e praticantes do terecô. [Na verdade, todas as bebidas, independentemente do que elas sejam, as entidades costumam chamar de gulepo.] (M.N.N., sexo feminino, 06/09/2023)'
			},
			{
				name: 'Guna',
				conteudo:
					'<b>Guna</b>. <i>Substantivo</i>. <b><i>AMER</i></b>. Estaca de madeira colocada no meio do salão para indicar onde os dogmas religiosos são saudados pelos terecozeiros. [Guna é o assento que tem no meio da sala do salão do barracão, que se chama guna.] (M.J.D.C., sexo feminino, 22/03/2023)'
			}
		]
	},
	{
		name: 'J',
		grupo: [
			{
				name: 'Jurema',
				conteudo:
					'<b>Jurema</b>. <i>Substantivo</i>. <b><i>CB</i></b>. Bebida alcoólica ardosa preparada com vinho e gengibre, em um pote de barro, para os caboclos. [Aqui na minha casa, a gente costuma fazer uma mistura do vinho e o gengibre que quando ele é misturado a gente coloca ele no pote e tem a preparação, no pote de barro.] (A.J.P.F., sexo masculino, 06/09/2023)'
			}
		]
	},
	{
		name: 'L',
		grupo: [
			{
				name: 'Lava-prato',
				conteudo:
					'<b>Lava-prato</b>. <i>Substantivo</i>. <b><i>AMER</i></b>. Celebração de encerramento da festa principal de uma tenda espírita. [O lava-prato é igual tipo uma festa. Tem o carnaval. O pessoal faz o carnaval na data certa que é no mês de fevereiro.] (A.J.P.F., sexo masculino, 06/09/2023)'
			},
			{
				name: 'Limpeza de corrente',
				conteudo:
					'<b>Limpeza de corrente</b>. <i>Sintagma nominal</i>. <b><i>AMER</i></b>. Ritual de purificação do corpo por meio de banhos, sacudimentos, rezas, benzimentos, defumação para tirar más energias. [A limpeza de corrente é uma preparação que eu vou fazer e eu costumo fazer direto na minha casa.] (A.J.P.F., sexo masculino, 06/09/2023)'
			},
			{
				name: 'Louvaria',
				conteudo:
					'<b>Louvaria</b>. <i>Substantivo</i>. <b><i>AMER</i></b>. Celebração religiosa de abertura dos cultos de terecô na qual os filhos de santo colocam os joelhos e as mãos no chão batendo-as para chamar os encantados. [O louvário é a abertura dos trabalhos.] (A.J.P.F., sexo masculino, 06/09/2023)'
			}
		]
	},
	{
		name: 'M',
		grupo: [
			{
				name: 'Manjar do céu',
				conteudo:
					'<b>Manjar do céu</b>. <i>Sintagma nominal</i>. <b><i>CB</i></b>. Bebida não alcoólica, transparente, sem cheiro e sem sabor, dado às entidades religiosas em cerimônia religiosa. [INQ.- E água tem algum nome específico? COL.- Tem, dentro do espiritismo é chamado de manjá do céu.] (A.J.P.F., sexo masculino, 08/09/2023)'
			},
			{
				name: 'Maracá',
				conteudo:
					'<b>Maracá</b>. <i>Substantivo</i>. <b><i>IM</i></b>. Instrumento musical de percussão, oval, feito de cabaça e com sementes de sombrinhão dentro, batido com a mão. [A cabaça, ela é nascida de uma rama, planta a semente e ela nasce, é uma rama.] (M.N.N., sexo feminino, 06/09/2023)'
			},
			{
				name: 'Médium encostado',
				conteudo:
					'<b>Médium encostado</b>. <i>Sintagma adjetival</i>. <b><i>CCS</i></b>. Pessoa preparada espiritualmente em um espaço religioso distinto do que frequenta regularmente. [A partir do momento que eu preparo um santo na cabeça dele que não veio daquela outra casa de quando ele saiu de lá, aí ele não está mais encostado na minha casa, ele é filho da casa.] (A.J.P.F., sexo masculino, 06/09/2023)'
			},
			{
				name: 'Médium tombador',
				conteudo:
					'<b>Médium tombador</b>. <i>Sintagma adjetival</i>. <b><i>CCS</i></b>. Pessoa com mediunidade que, por não ter sido preparada por liderança religiosa, cai em qualquer lugar ao receber o santo. [Quando há confirmação se ele é daquela casa, é o acolhimento do zelador de santo já pra poder cuidar de seu médium.] (W.A.S., sexo masculino, 01/05/2023)'
			}
		]
	},
	{
		name: 'P',
		grupo: [
			{
				name: 'Panha',
				conteudo:
					'<b>Panha</b>. <i>Substantivo</i>. <b><i>VA</i></b>. Touca constituída por um longo pedaço de pano usado para proteger a cabeça dos médiuns. [INQ.- Como se chama aquele material usado para proteger a cabeça? COL.- E uma touca, né?! Panha que eles chamam.] (S.S.C., sexo masculino, 22/05/2023)'
			},
			{
				name: 'Pátio do barracão',
				conteudo:
					'<b>Pátio do barracão</b>. <i>Sintagma nominal</i>. <b><i>CCS</i></b>. Recinto fora do abrigo onde as entidades dançam e fazem as suas obrigações. [Ali às vezes os terreiros do lado de fora, que é chamado de pátio do barracão.] (A.J.P.F., sexo masculino, 06/09/2023)'
			}
		]
	},
	{
		name: 'S',
		grupo: [
			{
				name: 'Salão',
				conteudo:
					'<b>Salão</b>. <i>Substantivo</i>. <b><i>AMER</i></b>. Espaço religioso no qual as pessoas dançam, recebem as entidades e fazem as suas obrigações. [Salão, Terreiro, salão, casa de santo.] (M.N.N., sexo feminino, 06/09/2023)'
			},
			{
				name: 'Sororoca',
				conteudo:
					'<b>Sororoca</b>. <i>Substantivo</i>. <b><i>IM</i></b>. Semente de planta colocada dentro do maracá para dar sonoridade. [A partir do momento que eu tiro ela de lá e coloco as sororocas dentro do maracá, que a gente coloca a sororoca, que é tipo umas pedrinhas pra poder dar o som.] (A.J.P.F., sexo masculino, 06/09/2023)'
			}
		]
	},
	{
		name: 'T',
		grupo: [
			{
				name: 'Tambor da mata',
				conteudo:
					'<b>Tambor da mata</b>. <i>Sintagma nominal</i>. <b><i>IM</i></b>. Instrumento musical de madeira, coberto de couro posto entre as pernas para ser tocado com as mãos. [O do terecô é aquele que o abatazeiro costuma bater ele escanchado em cima dele.] (A.J.P.F., sexo masculino, 06/09/2023)'
			},
			{
				name: 'Terecô',
				conteudo:
					'<b>Terecô</b>. <i>Substantivo</i>. <b><i>AMER</i></b>. Religião afro-brasileira que consiste no culto aos encantados e na preservação de dogmas e mistérios religiosos pelos praticantes. [Terecô pra mim é uma religião, tipo assim, pros encantados dançar e se divertir, pra mim é uma festa de encantados.] (M.N.N., sexo feminino, 06/09/2023)'
			}
		]
	},
	{
		name: 'V',
		grupo: [
			{
				name: 'Vista limpa',
				conteudo:
					'<b>Vista limpa</b>. <i>Sintagma adjetival</i>. <b><i>AMER</i></b>. Capacidade espiritual que permite ao médium visualizar seres espirituais. [E a clarivisão, a vidência. Era um traço muito comum dos terecozeiros antigos, a gente ouvia falar.] (D.N.M.A., 22/07/2023)'
			}
		]
	},
	{
		name: 'Z',
		grupo: [
			{
				name: 'Zelador',
				conteudo:
					'<b>Zelador</b>. <i>Substantivo</i>. <b><i>CCS</i></b>. Pessoa responsável por cuidar da espiritualidade das pessoas, das entidades religiosas e da tenda. [A minha função dentro do terreiro é zelar tanto o terreiro como zelar os voduns e o que eles representam, né?!] (A.J.P.F., sexo masculino, 06/09/2023)'
			}
		]
	}
];

const setIDs = (dados) =>
	dados.map(({ name, grupo }) => {
		let id = 1;

		return {
			name,
			grupo: grupo.map((palavra) => ({
				id: id++,
				...palavra
			}))
		};
	});

export default setIDs(dados);
