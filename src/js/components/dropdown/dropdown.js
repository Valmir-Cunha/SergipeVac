import { scriptRequisicaoBackendUsuario } from "../../service/scriptRequisicaoBackendUsuario.js";
import { scriptRequisicaoBackendSincronizacao } from "../../service/scriptRequisicaoBackendSincronizacao.js";

const carregamentoDeDados = async () => {
  let requisicaoSincronizacao = new scriptRequisicaoBackendSincronizacao();
  let requisicaoUsuario = new scriptRequisicaoBackendUsuario();

  let user = await requisicaoUsuario.obter(4);
  let atualizacaoBancoDedados = await requisicaoSincronizacao.obterUltima();
  
  let divbanco= [];
  if(atualizacaoBancoDedados[0].bemSucedida == true){
    divbanco = [
      '<li><a class="dropdown-item text-success " href="#"><span class="text-success"><i class="fas fa-check"></i><strong> Banco Atualizado</strong></span></a></li>',
      `<li><a class="dropdown-item text-success" href="#"><span class="text-success"><i class="fas fa-check"></i><small><i> Última Atualização: ${atualizacaoBancoDedados[0].ultimaSincronizacao}</i></small></span></a></li>`      
    ]
  }else {
    let novaRequisicao = await requisicaoSincronizacao.obterUltimaBemSucedida()
    divbanco = [
      '<li><a class="dropdown-item text-danger" href="#"><span class="text-danger"><i class="fas fa-check"></i><strong> Banco Desatualizado</strong></span></a></li>',
      `<li><a class="dropdown-item text-success " href="#"><span class="text-success"><i class="fas fa-check"></i><small><i> Última Atualização: ${novaRequisicao[0].ultimaSincronizacao}</i></small></span></a></li>`      
    ]
  }
  // console.log(divbanco);
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