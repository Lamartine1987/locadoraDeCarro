
class Carro{
    constructor(){

    }

    openModel(){
        //abri modal
        //adicionar a class active ao modal
        document.querySelector('.modal-overlay')
        .classList.add('active')

    }

    close(){
        //fechar o modal
        //remover a classe active do modal 
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }

    listar(){
    }
}

var carro = new Carro();