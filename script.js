/* ДЗ-№4 */

                    /* №-1 */

do {
    var num = +prompt('Введите число')
}while(isNaN(num) || num == 0)

do {
    var stp = +prompt('Введите степень')
}while (isNaN(stp) || stp == 0 )

let answer = 1;

for(let i = 0; i < stp; i++) {
    answer = answer * num
}

console.log(answer);

                    /* №-2 */

do{
    var num = +prompt('Введите кол-во ступенек');
}while(isNaN(num) || num <= 0) 

do{
    var sym = prompt('Введите конечный символ');
}while(sym == '')

do{
    var finalSym = prompt('Введите конечный символ');
}while(finalSym == '')

for(let i = 0; i < num; i++) {
    finalSym = sym + finalSym
    console.log(finalSym);
}
