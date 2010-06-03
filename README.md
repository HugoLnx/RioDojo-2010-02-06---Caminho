# RioDojo Lapa do dia 02/06/2010 #

O problema a ser resolvido era, dada uma matriz de entrada, seria
retornada um caminho que percorreria os menores numeros,por exemplo:

_Entrada:_
| _0_  3 |
| _1_  2 |

_Saida:_
[0,1]

No caso de empate, a prioridade seria a do mais inferior, exemplo:

_Entrada:_
| _0_ 2 4 |
| 3 _2_ 3 |
| 4 _1_ 2 |

_Saida:_
[0,2,1]

No caso de um segundo empate, a prioridade seria a da mais 
a direita, por exemplo...

_Entrada:_
| _0_ 2 5 |
| 2 _2_ 4 |
| 3 3 _1_ |

_Saida:_
[0,2,1]

A "caminhada" termina quando se chega a um número que se encontra 
na extremidade direita ou inferior.