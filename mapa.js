Mapa = function(matriz){
	this.matriz = matriz;
	
	this.valor_da_coordenada = function(coordenada){
		x = coordenada[0];
		y = coordenada[1];
		return this.matriz[x][y];
	}
	
}