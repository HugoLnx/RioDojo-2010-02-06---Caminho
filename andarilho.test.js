$(function(){
module("Andarilho");
	test("passo na diagonal come�ando na primeira posi��o", function() {
		matriz = [[2, 4],
				 [4, 1]];
		
		mapa = new Mapa(matriz);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		andarilho.da_um_passo;

		same(andarilho.localizacao, [1,1]);
	});

	test("passo na lateral come�ando na primeira posi��o", function() {
		matriz = [[2, 1],
				 [4, 4]];

		mapa = new Mapa(matriz);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		andarilho.da_um_passo;

		same(andarilho.localizacao, [0,1]);
	});

	test("passo pra baixo come�ando na primeira posi��o", function() {
		matriz = [[2, 4],
				 [1, 4]];

		mapa = new Mapa(matriz);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		andarilho.da_um_passo;

		same(andarilho.localizacao, [1,0]);
	});

	test("passo pra baixo com valor diferente de 1", function() {
		matriz = [[2, 5],
				 [3, 4]];

		mapa = new Mapa(matriz);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		andarilho.da_um_passo;

		same(andarilho.localizacao, [1,0]);
	});

	test("passo pra direita com valor diferente de um", function() {
		matriz = [[3, 2],
				 [6, 4]];

		mapa = new Mapa(matriz);
		coordenada_atual = [0,0];
		andarilho = new Andarilho(mapa,coordenada_atual);
		andarilho.da_um_passo;

		same(andarilho.localizacao, [0,1]);
	});
});