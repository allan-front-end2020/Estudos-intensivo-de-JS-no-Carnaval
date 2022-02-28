function exibirArtigo(id, callbackSucesso, callbackErro) {

    if (true) {
        callbackSucesso('Funçoes de callback js', 'Funções de call beck sao muito utilizados no mundo Js')
    } else {
        callbackErro('erro ao recuperar os dados')
    }
}
var callbackSucesso = function(titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr/>')
    document.write('<p>' + descricao + '</p>')
}
var callbackErro = function(erro) {
    document.wr
    ite('Erro' + erro + '')
}
exibirArtigo(1, callbackSucesso, callbackErro)