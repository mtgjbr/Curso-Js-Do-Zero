let varA = "A" //B
let varB = "B" //c
let varC = "C" //a

var temp = varA //temp é necessario pois var A vai ser perdido ao assumir varB
varA = varB
varB = varC
varC = temp
console.log(varA, varB, varC);

//ou

varA = "A" ;//B
varB = "B" ;//c
varC = "C"; //a

[varA, varB, varC] = [varB, varC, varA];
console.log (varA, varB, varC)  