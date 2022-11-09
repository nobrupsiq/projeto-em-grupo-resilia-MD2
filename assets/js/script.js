const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
};

const limparFormulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
};
//validação do campo do cep
//validação do campo do cep ---- esta parecendo o input tenta alterar para o span, que fica melhor,(se de tempo)
const cepValido = (cep) => cep.length === 8 && /^[0-9]+$/.test(cep);
const pesquisarCep = async () => {
    limparFormulario();
    const pesquisarCep = async () => {};
    pesquisarCep();
};

document.getElementById('cep').addEventListener('focusout', pesquisarCep);
