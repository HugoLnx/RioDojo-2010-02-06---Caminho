Andarilho = function(mapa,ponto_inicial){
	this.mapa = mapa;
    this.localizacao = ponto_inicial;

    this.da_um_passo = function (x){
		matriz = this.mapa.matriz;
		menor = [0,1];
		if (matriz[menor[0]][menor[1]] > matriz[1][1])
			menor = [1,1];
		if (matriz[menor[0]][menor[1]] > matriz[1][0])
			menor = [1,0];
		this.localizacao = menor;
	}
}