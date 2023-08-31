
class Carro{
    constructor(){
        this.id = 1;
        this.arrayCarros = [];
    }

    openModel(){
        //abri modal
        //adicionar a class active ao modal
        document.querySelector('.modal-overlay')
        .classList.add('active')

    }

    cancelar(){
        //fechar o modal
        //remover a classe active do modal 
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }

    salvar(){
        let carro = this.lerDados();

        if(this.validaCampo(carro)){
            this.adicionar(carro);
        }

        this.listaTabela();
        
    }

    adicionar(carro){
        this.arrayCarros.push(carro);
        this.id++;
    }

    lerDados(){
        let carro = {}

        carro.id = this.id;
        carro.marcaCarro = document.getElementById('marca').value;
        carro.nomeCarro = document.getElementById('nome').value;
        carro.anoCarro = document.getElementById('ano').value;
        carro.corCarro = document.getElementById('cor').value;

        return carro;
    }

    validaCampo(){
        let msg = '';

        if(carro.marcaCarro == ''){
            msg += '- Informe a marca do carro.'
        }

        
        if(carro.nomeCarro == ''){
            msg += '- Informe o nome do carro.'
        }

        
        if(carro.anoCarro == ''){
            msg += '- Informe o ano do carro.'
        }

        
        if(carro.corCarro == ''){
            msg += '- Informe a cor do carro.'
        }

        if(msg != ''){
            alert(msg)
            return false
        }

        return true;
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');

        for(let i=0; i< this.arrayCarros.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell()
            let td_marca = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_ano = tr.insertCell();
            let td_cor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayCarros[i].id;
            td_marca.innerText = this.arrayCarros[i].marca;

        };
    }
}

var carro = new Carro();