let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';


function testeConsole(){
    console.log('O botão foi clicado');
}

function amoJS(){
    alert('Eu amo JS!');
}

function cidade(){
    let territorio = prompt('Diga o nome de uma cidade:');
    alert(`Estive em ${territorio} e lembrei de você.`);
}

function somatorio(){
    let numero1 = parseInt(prompt('Informe o primeiro número:'), 10);
    let numero2 = parseInt(prompt('Informe o segundo número:'), 10);
    let resultado =  numero1 + numero2;
    alert(`O somatório de ${numero1} e ${numero2} é: ${resultado}`);
}