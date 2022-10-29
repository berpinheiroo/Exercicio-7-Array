/* Crie um algoritmo com dois vetores e os preencha com números inteiros e
positivos, o usuário deve dizer quando não quer mais inserir valores mas os vetores
devem ter a mesma quantidade de números. Depois crie um terceiro vetor que irá
receber apenas os números que estão em ambos os vetores anteriores ou forem
ímpar.
Ex.: entrada - arrayA[2,3,4,8,1] arrayB[7,4,1,6,8]
 saída - arrayC[3,4,8,1] */

 var arrayA = []
 var arrayB = []
 var arrayC = []
 var pergunta

 var continuar = true
 while(continuar){
   for(var i = 0; continuar; i++){
    arrayA[i] = prompt("Insira um numero para A")
    arrayB[i] = prompt("Insira um numero para B")
    pergunta = parseInt(prompt("Para parar digite 1"))
    if(pergunta == 1){
      continuar = false
    }
   }
 }

 for(var i = 0; i < arrayA.length; i++){
  for(var index = i + 1; index < arrayA.length; index++){
    if(arrayB[index] == arrayA[i] || arrayA[i] % 2 != 0 || arrayB[i] %2 != 0){
      arrayC[index - 1] = arrayB[index]
    }
  }
 }

 console.log(arrayA)
 console.log(arrayB)
 console.log(arrayC)
