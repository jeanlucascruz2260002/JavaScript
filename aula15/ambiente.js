var num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O cumprimento de num é ${num.length}`)
/*
for (var c=0; c<num.length; c++){
    console.log(num[c])
}
*/
var pos = num.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor 4 está na posição ${pos}`)
}