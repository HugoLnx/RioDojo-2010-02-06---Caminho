Andarilho = function(mapa,ponto_inicial){
	this.mapa = mapa;
    this.localizacao = ponto_inicial;

    this.da_um_passo = function (){
		coor_menor = [0,1];
		if (mapa.valor_da_coordenada(coor_menor) >= mapa.valor_da_coordenada([1,0]))
			coor_menor = [1,0];
		if (mapa.valor_da_coordenada(coor_menor) >= mapa.valor_da_coordenada([1,1]))
			coor_menor = [1,1];
		this.localizacao = coor_menor;
	}
}