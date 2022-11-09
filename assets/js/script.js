const preencherFormulario = (endereco) => {
   document.getElementById("logradouro").value = endereco.logradouro;
   document.getElementById("bairro").value = endereco.bairro;
   document.getElementById("cidade").value = endereco.localidade;
   document.getElementById("estado").value = endereco.uf;
};

const limparFormulario = (endereco) => {
   document.getElementById("logradouro").value = "";
   document.getElementById("bairro").value = "";
   document.getElementById("cidade").value = "";
   document.getElementById("estado").value = "";
};
//validação do campo do cep ---- esta parecendo o input tenta alterar para o span, que fica melhor,(se de tempo)
const cepValido = (cep) => cep.length === 8 && /^[0-9]+$/.test(cep);
const pesquisarCep = async () => {
   limparFormulario();
   const cep = document.getElementById("cep").value;
   const url = `http://viacep.com.br/ws/${cep}/json/`;
   if (cepValido(cep)) {
      const dados = await fetch(url); //recebendo o valor do fetch
      const endereco = await dados.json(); //pegando os dados e atribuindo a função json
      //tratando erro,caso for apresentado um cep que nao tenha, vai ser avisado ao usuario
      if (endereco.hasOwnProperty("erro")) {
         document.getElementById("logradouro").value = "Cep não encontrado!";
      } else {
         preencherFormulario(endereco);
      }
   } else {
      document.getElementById("cep").value = "Cep incorreto!";
   }
};

document.getElementById("cep").addEventListener("focusout", pesquisarCep); //quando sai do foco do input ele automaticamente inicia.

const modal = document.querySelector(".modal");

const btn = document.querySelector(".button");
const fechar = document.querySelector(".fechar");

function handleClick(event) {
   event.preventDefault();
   modal.classList.add("active");
}

function handleFechar(event) {
   modal.classList.remove("active");
}

btn.addEventListener("click", handleClick);
fechar.addEventListener("click", handleFechar);
