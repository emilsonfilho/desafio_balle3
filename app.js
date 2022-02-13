const btn = document.querySelector('#botao')
const textArea = document.querySelector('textarea')
let resultado = document.createElement('p')

btn.addEventListener('click', acionar)

function acionar() {
	let texto = textArea.value
	resultado.innerText = ''
	if (texto.length === 0) {
		// Mensagem de erro
		alert('Por favor, insira um texto')
		reinicializacao()
	} else {
		const textoFormatado = texto.replaceAll(' ', '')
		palavras(textoFormatado)
		const arrayPalavras = texto.split(' ')
		
		for (let i = 0 ; i < arrayPalavras.length ; i++) {
			if (arrayPalavras[i] === '') {
				arrayPalavras.pop(arrayPalavras[i])
			}
		}
		
		frases(arrayPalavras)
		
		const fraseFormatada = texto.replace('.','!')
		const arrayFrases = fraseFormatada.match(/.*?[.!?](?![.!?])(?<!\b\w\w\.)/g)
		
		qntdFrases(arrayFrases)
		
		
	}
}

document.body.appendChild(resultado)

const reinicializacao = function() {
	textArea.value = ''
	textArea.focus()
}

function palavras(tf) {
	resultado.innerText += `O texto tem ${tf.length} caracteres (sem espaço)`
}

function frases(ap) {
	resultado.innerText += `\nO texto tem ${ap.length} palavras`
}

function qntdFrases(af) {
	resultado.innerText += `\nO texto tem ${af.length} frases.`
}