function appendValue(value) {
    const resultField = document.getElementById('result');

    // Limpa o campo se houver um erro
    if (resultField.value === 'Erro') {
        resultField.value = '';
    }

    // Verifica se o valor é um sinal
    const isOperator = ['+', '-', '*', '/'].includes(value);

    if (isOperator) {
        // Evita adicionar um sinal se o campo estiver vazio ou já terminar com um sinal
        if (resultField.value === '' || ['+', '-', '*', '/'].includes(resultField.value.slice(-1))) {
            return;
        }
    }

    // Adiciona o valor ao campo
    resultField.value += value;
}

function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
}

function deleteLast() {
    const resultField = document.getElementById('result');
    if (resultField.value === 'Erro') {
        resultField.value = ''; // Limpa a mensagem de erro ao pressionar delete
    } else {
        resultField.value = resultField.value.slice(0, -1);
    }
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value) || '';
    } catch (error) {
        resultField.value = 'Erro'; // Mostra a mensagem de erro
    }
}
