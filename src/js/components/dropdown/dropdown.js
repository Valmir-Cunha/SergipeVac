import { scriptRequisicaoBackendUsuario } from "../../service/scriptRequisicaoBackendUsuario.js";
import { scriptRequisicaoBackendSincronizacao } from "../../service/scriptRequisicaoBackendSincronizacao.js";
import { getTokenFromCookie } from "../auth/tokenCookie.js";

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
};

const obterUser = async () => {
  const email = getTokenFromCookie('name')
  let requisicaoUsuario = new scriptRequisicaoBackendUsuario();
  const obtertodos = await requisicaoUsuario.obterTodos();


  let userencontrado = null;  
  obtertodos.forEach(user => {
  
    if(user.email == email){
      userencontrado = user;
    }
  });
  return userencontrado;
}

const carregamentoDeDados = async () => {
  let requisicaoSincronizacao = new scriptRequisicaoBackendSincronizacao();
  

  let user = await obterUser();
  console.log(user)
  let atualizacaoBancoDedados = await requisicaoSincronizacao.obterUltima();
  let divbanco= [];
  if(atualizacaoBancoDedados[0].bemSucedida == true){
    const data = new Date(atualizacaoBancoDedados[0].ultimaSincronizacao);
    divbanco = [
      '<li><a class="dropdown-item text-success " href="#"><span class="text-success"><i class="fas fa-check"></i><strong> Banco Atualizado</strong></span></a></li>',
      `<li><a class="dropdown-item text-success" href="#"><span class="text-success"><i class="fas fa-check"></i><small><i> Última Atualização: ${data.toLocaleDateString('pt-BR',options)}</i></small></span></a></li>`      
    ]
  }else {
    let novaRequisicao = await requisicaoSincronizacao.obterUltimaBemSucedida();
    const data = new Date(novaRequisicao[0].ultimaSincronizacao);
    divbanco = [
      '<li><a class="dropdown-item text-danger" href="#"><span class="text-danger"><i class="fas fa-check"></i><strong> Banco Desatualizado</strong></span></a></li>',
      `<li><a class="dropdown-item text-success " href="#"><span class="text-success"><i class="fas fa-check"></i><small><i> Última Atualização: ${data.toLocaleDateString('pt-BR',options)}</i></small></span></a></li>`      
    ]
  }
  var carregandoElement = document.getElementById("carregando");
    
    carregandoElement.parentNode.removeChild(carregandoElement);
    
    var dropdownMenu = document.querySelector("#maisinformacoes");
    var novosElementos = [
        `<li><a class="dropdown-item" href="#"><strong>${user.nome}</strong></a></li>`,
        `<li><a class="dropdown-item" href="#"><strong>${user.email}</strong></a></li>`,
        ...divbanco
    ];
  console.log(novosElementos)
    dropdownMenu.insertAdjacentHTML("beforeend", novosElementos.join(""));
}

document.addEventListener("DOMContentLoaded",function () {
  var carregandoElement = document.getElementById("carregando");
  if(carregandoElement!=undefined){
    carregamentoDeDados();
  }
});