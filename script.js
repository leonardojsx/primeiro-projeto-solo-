function cadastro() {

let nom = document.getElementById('txt1').value
let ida = document.getElementById('txt2').value
let erroIdade = document.getElementById('erroIdade')
let cad = document.getElementById('cad')

if (nom == '' || ida == '') {
  alert('voce nao inseriu os dados necessarios')
} if (ida <= 17) {
    cad.style.display = "none"
    erroIdade.innerHTML = '<div id= "menor" > VOCE E MENOR DE IDADE E NAO PODE SER CADASTRADO </div>'
    erroIdade.style.display = "block"
} else {

cad.innerHTML = 'voce foi cadastrado com sucesso!'

}

}

function testeeee() {
    const containerModal = document.getElementById("container-modal")
    containerModal.style.visibility = "visible"
    containerModal.style.opacity = "1"
    containerModal.style.transition = "ease-in all 0.3s"
}

function closeModal() {
    const containerModal = document.getElementById("container-modal")
    containerModal.style.visibility = "hidden"
    containerModal.style.opacity = "0"
    containerModal.style.transition = "ease-in all 0.3s"

}