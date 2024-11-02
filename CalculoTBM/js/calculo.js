let tmb;
class Calculo {
    constructor(genero, peso, altura, idade) {
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
    }

    calcular() {
        let tbmVariavel;

        if (this.genero === "masculino") {
            tbmVariavel = 88.36 + (13.4 * this.peso) + (4.8 * this.altura) - (5.7 * this.idade);
        } else if (this.genero === "feminino") {
            tbmVariavel = 447.6 + (9.2 * this.peso) + (3.1 * this.altura) - (4.3 * this.idade);
        } else {
            return 0;
        }
        return tbmVariavel;
    }
}

function calculateTMB() {
    const genero = document.getElementById("genero").value.toLowerCase();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const idade = parseInt(document.getElementById("idade").value);

    const calculator = new Calculo(genero, peso, altura, idade);
    tmb = calculator.calcular(); 

    if (tmb === 0) {
        document.getElementById("result").innerText = "Erro: Gênero inválido.";
        return;
    }

    document.getElementById("result").innerText = `Sua TMB é: ${tmb.toFixed(2)} calorias/dia`;  // Corrigido
}

document.getElementById("sedentario").onclick = function() {
    exibirTMBComAtividade(1.2);
};
document.getElementById("levementeAtivo").onclick = function() {
    exibirTMBComAtividade(1.375);
};
document.getElementById("moderadoAtivo").onclick = function() {
    exibirTMBComAtividade(1.55);
};
document.getElementById("muitoAtivo").onclick = function() {
    exibirTMBComAtividade(1.725);
};
document.getElementById("extremeAtivo").onclick = function() {
    exibirTMBComAtividade(1.9);
};
function exibirTMBComAtividade(multiplicador) {
    if (tmb) {
        const tmbComAtividade = tmb * multiplicador;
        const resultadoAnterior = document.getElementById("result").innerText;

        document.getElementById("result").innerText = `${resultadoAnterior}\nTMB com atividade: ${tmbComAtividade.toFixed(2)} calorias/dia`;  // Corrigido

        console.log(`${resultadoAnterior}\nTMB com atividade: ${tmbComAtividade.toFixed(2)} calorias/dia`);  // Corrigido
    } else {
        alert("Por favor, calcule sua TMB primeiro!");
    }

}