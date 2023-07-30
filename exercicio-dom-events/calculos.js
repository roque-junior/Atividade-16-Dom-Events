/* Desenvolva aqui a rotina */


// 1. Tornar a planilha de cálculos dinâmica com DOM Events. Ao clicar no
// botão calcular efetuar os cálculos solicitados na página.
 
//Receitas

const ValorBase = document.getElementById('valor_base');
const AjudaComTransporte = document.getElementById('valor_transporte')
const AjudaAlimentacao = document.getElementById('valor_alimentacao')
const ValorReceita = document.getElementById('valor_receita')


//Descontos

const DescontoDoAutomovel = document.getElementById('valor_automovel');
const Faltas = document.getElementById('faltas')
const  DescontoTotal = document.getElementById('valor_descontos')

//total
const total = document.getElementById('valor_total')

// 2. Alterar o cálculo do botão calcular para que a cada vez que o
// usuário digitar um valor e sair do input o formulário seja
// automaticamente recalculado.

function somar() {
    const ValueValorBase  = parseFloat(ValorBase.value ); 
    const ValueAjudaAliment = parseFloat(AjudaAlimentacao.value);
    const ValueTransport = parseFloat(AjudaComTransporte.value);
    const receitatotal = ValueValorBase + ValueAjudaAliment + ValueTransport
    ValorReceita.value = receitatotal

    const Descont_Automo  = parseFloat(DescontoDoAutomovel.value );
    const Falta1 = parseFloat(Faltas.value );
    
    const Descont_Total = Descont_Automo + Falta1
    DescontoTotal.value = Descont_Total
    
    total.value = receitatotal - Descont_Total
  }

  document.getElementById('btn_calcular').addEventListener('click', somar);

  const inputFields = document.querySelectorAll('input[type="number"]');
inputFields.forEach((input) => {
  input.addEventListener('blur', somar);
});
