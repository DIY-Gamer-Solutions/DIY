window.addEventListener('load', function () {

    let cadastroForm = document.getElementById('cadastro-from');

    cadastroForm.addEventListener('submit', function (event) {
       
        event.preventDefault();
        

        let validaName = document.getElementById('name');
        let validaEmail = document.getElementById('email');
        let validaTelefone = document.getElementById('telefone');
        let validaCpf = document.getElementById('cpf');
        let validaSenha = document.getElementById('senha');
        let validaConf_senha = document.getElementById('conf-senha');

        

        let errosMessages = [];

        if (validaName.value == '') {
            errosMessages.push('O Campo nome não pode estar vazio');
        } else if (validaName.value.length < 3) {
            errosMessages.push('O nome não pode ter menos de 3 letras');
        };

        if (validaEmail.value == '') {
            errosMessages.push('O Campo Email não pode estar vazio');
        };

        if (validaTelefone.value == '') {
            errosMessages.push('O Campo Telefone não pode estar vazio');
        };

        if (validaCpf.value == '') {
            errosMessages.push('O Campo CPF não pode estar vazio');
        }
        if(validaCpf.length == 11){
            
        }







        if (validaSenha.value == '') {
            errosMessages.push('O Campo Senha não pode estar vazio');
        };
        if (validaConf_senha.value == '') {
            errosMessages.push('Confirme a sua Senha');
        };
        if (validaConf_senha.value === validaSenha.value) {
            errosMessages.push('As senhas não são iguais');
        };

     
     
        if (errosMessages.length > 0) {  
            event.preventDefault();
            let divErrors = document.getElementById('div-erros');
            divErrors.classList.remove('no-erros')
            divErrors.classList.add('erros')

         let ulErros = document.querySelector('div.erros ul');
         ulErros.innerHTML = '';
            for (let i = 0; i < errosMessages.length; i++) {
                ulErros.innerHTML += '<li>' + errosMessages[i] + '<li>';
            }

        }
        
       
        


    });


});