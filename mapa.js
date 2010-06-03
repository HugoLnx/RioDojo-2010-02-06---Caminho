Mapa = function (matriz){

    this.proxima_coordenada = [];

    this.passo = function (x){
		menor = [0,1];
		if (matriz[menor[0]][menor[1]] > matriz[1][1])
			menor = [1,1];
		if (matriz[menor[0]][menor[1]] > matriz[1][0])
			menor = [1,0];
		this.proxima_coordenada = menor

    };
}

