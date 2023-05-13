let NameO = ('lucas'); // errado, não recomendado. Pra variaveis indicado VAR, LET NÃO MUDA
let Name = ('lucas');

var name2 =('Lucas1'); // NO VAR É INDICADO MUDAR, VARIAVEIS SEMPRE CRIAR COM VAR OU LET
var name2 =('Lucas1');


console.log(Name + name2);

const nome = 'Lucas Honorato ';
const sobrenome = 'Lopes';
const idade = 22;
const peso = 60;
const alturaEmM = 1.60; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
 
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;
 
// template strings
 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);