$(function(){
module("Mapa");
	test("retorna valor de uma coordenada", function() {
		matriz = [[1,2]
				  [3,4]];
		mapa = new Mapa(matriz);
		same(mapa.valor_da_coordenada([0,0]),1);
	});
});