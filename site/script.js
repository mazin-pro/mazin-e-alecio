/**
 * Adiciona valores ao campo de entrada
 * @param {string} value Valor a ser adicionado
 */
function appendValue(value) {
    const resultField = document.getElementById('result');

    // Limpa o campo se houver um erro
    if (resultField.value === 'Erro') {
        resultField.value = '';
    }

    // Verifica se o valor é um operador
    const isOperator = ['+', '-', '*', '/'].includes(value);

    if (isOperator) {
        // Impede sinais consecutivos ou no início
        if (resultField.value === '' || ['+', '-', '*', '/'].includes(resultField.value.slice(-1))) {
            return;
        }
    }

    resultField.value += value; // Adiciona o valor
}

/**
 * Limpa o campo de entrada
 */
function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
}

/**
 * Apaga o último caractere do campo de entrada
 */
function deleteLast() {
    const resultField = document.getElementById('result');
    if (resultField.value === 'Erro') {
        resultField.value = '';
    } else {
        resultField.value = resultField.value.slice(0, -1);
    }
}

/**
 * Calcula o resultado da expressão
 */
function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value) || ''; // Avalia a expressão
    } catch (error) {
        resultField.value = 'Erro'; // Mostra mensagem de erro
    }
}
