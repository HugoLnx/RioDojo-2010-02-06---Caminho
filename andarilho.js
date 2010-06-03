Andarilho = function(){
    this.localizacao = [];

    this.da_um_passo = function (x){
		menor = [0,1];
		if (matriz[menor[0]][menor[1]] > matriz[1][1])
			menor = [1,1];
		if (matriz[menor[0]][menor[1]] > matriz[1][0])
			menor = [1,0];
		this.proxima_coordenada = menor
}