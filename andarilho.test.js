$(function(){
module("Andarilho");
	test("recebimento dos argumentos pelo construtor", function() {
		mapa = new Mapa([]);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		same(andarilho.mapa,mapa);
		same(andarilho.localizacao,coordenada_atual);
	});
	test("passo na diagonal começando na primeira posição", function() {
		matriz = [[2, 4],
				  [4, 1]];
		
		mapa = new Mapa(matriz);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		andarilho.da_um_passo();

		same(andarilho.localizacao, [1,1]);
	});

	test("passo na lateral começando na primeira posição", function() {
		matriz = [[2, 1],
				  [4, 4]];

		mapa = new Mapa(matriz);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		andarilho.da_um_passo();

		same(andarilho.localizacao, [0,1]);
	});

	test("passo pra baixo começando na primeira posição", function() {
		matriz = [[2, 4],
				  [1, 4]];

		mapa = new Mapa(matriz);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		andarilho.da_um_passo();

		same(andarilho.localizacao, [1,0]);
	});

	test("passo pra baixo com valor diferente de 1", function() {
		matriz = [[2, 5],
				  [3, 4]];

		mapa = new Mapa(matriz);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		andarilho.da_um_passo();

		same(andarilho.localizacao, [1,0]);
	});

	test("passo pra direita com valor diferente de um", function() {
		matriz = [[3, 2],
				  [6, 4]];

		mapa = new Mapa(matriz);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		andarilho.da_um_passo();

		same(andarilho.localizacao, [0,1]);
	});
	
	test("passo pra baixo quando valor de baixo igual ao da direita", function() {
		matriz = [[3, 2],
				  [2, 4]];

		mapa = new Mapa(matriz);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		andarilho.da_um_passo();

		same(andarilho.localizacao, [0,1]);
	});
	
	test("passo na diagonal quando valor da diagonal igual ao da direita", function() {
		matriz = [[3, 2],
				  [4, 2]];

		mapa = new Mapa(matriz);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		andarilho.da_um_passo();

		same(andarilho.localizacao, [0,1]);
	});
});