# RioDojo Lapa do dia 02/06/2010 #

O problema a ser resolvido era, dada uma matriz de entrada, seria
retornada um caminho que percorreria os menores numeros,por exemplo:

_Entrada:_
<table>
  <tr>
    <td>_0_</td><td>3</td>
  </tr>
  <tr>
    <td>_1_</td><td>2</td>
  </tr>
</table>

_Saida:_
[0,1]

No caso de empate, a prioridade seria a do mais inferior, exemplo:

_Entrada:_
<table>
  <tr>
    <td>_0_</td><td>2</td><td>4</td>
  </tr>
  <tr>
    <td>4</td><td>_2_</td><td>3</td>
  </tr>
  <tr>
    <td>4</td><td>_1_</td><td>2</td>
  </tr>
</table>

_Saida:_
[0,2,1]

No caso de um segundo empate, a prioridade seria a da mais 
a direita, por exemplo...

_Entrada:_
<table>
  <tr>
    <td>_0_</td><td>2</td><td>5</td>
  </tr>
  <tr>
    <td>2</td><td>_2_</td><td>4</td>
  </tr>
  <tr>
    <td>3</td><td>3</td><td>_1_</td>
  </tr>
</table>

_Saida:_
[0,2,1]

A "caminhada" termina quando se chega a um número que se encontra 
na extremidade direita ou inferior.