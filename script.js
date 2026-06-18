let expressaoAtual = '';

function adicionarNumero(numero) {
    const visor = document.getElementById('visor-fofinho');
    
    if (visor.innerText.length >= 12) {
        return; 
    }
    
  
    if (visor.innerText === 'Erro') {
        visor.innerText = '';
        expressaoAtual = '';
        visor.style.backgroundColor = '#fff0f3';
    }
    
    if (visor.innerText === '0') {
        visor.innerText = '';
    }
    
    visor.innerText += numero;
    expressaoAtual += numero;
}


function definirOperacao(operador) {
    const visor = document.getElementById('visor-fofinho');
    
    if (visor.innerText === 'Erro') {
        return; 
    }
    
    let sinalParaOTela = operador;
    if (operador === '*') sinalParaOTela = 'x';
    if (operador === '/') sinalParaOTela = '÷';
    
    visor.innerText += ' ' + sinalParaOTela + ' '; 
    expressaoAtual += operador; 
}

function limparVisor() {
    const visor = document.getElementById('visor-fofinho');
    visor.innerText = '0';
    expressaoAtual = '';
    visor.style.backgroundColor = '#fff0f3'; 
}


function calcularResultado() {
    const visor = document.getElementById('visor-fofinho');
    try {
        let resultado = eval(expressaoAtual);
        visor.innerText = resultado;
        expressaoAtual = resultado.toString(); 
    } catch (invalido) {
        visor.innerText = 'invalido';
        expressaoAtual = '';
        
       
        visor.style.backgroundColor = '#ffdde2'; 
    }
}
