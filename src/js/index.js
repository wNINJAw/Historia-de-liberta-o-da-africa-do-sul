/* 
  O que precisamos fazer? - quando clicar no botão do foto na lista, temos que marcar o botão como selecionado e mostrar o foto correspondente

    OBJETIVO 1 - quando clicar no botão do foto na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

	OBJETIVO 2 - quando clicar no botão do foto mostrar as informações do foto
        passo 1 - pegar os fotos no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no foto que o usuário selecionou
        passo 3 - verificar se já existe um foto selecionado, se sim, devemos remover a seleção dele 
*/

const botoes = document.querySelectorAll(".botao");
const fotos = document.querySelectorAll(".foto");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarFoto();

		botao.classList.add("selecionado");
		fotos[indice].classList.add("selecionado");
	});
});

function desselecionarFoto() {
	const fotoSelecionado = document.querySelector(".foto.selecionado");
	fotoSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
