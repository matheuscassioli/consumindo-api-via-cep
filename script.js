 async function buscaEndereco(cep) {
     try {
         var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
         var consultaCEPConvervtida = await consultaCEP.json();
         if (consultaCEPConvervtida.erro) {
            throw alert('CEP INEXISTENTE') 
         } 
         var endereco = document.querySelector('#endereco');
         endereco.value = consultaCEPConvervtida.logradouro;

         var localidade = document.querySelector('#cidade');
         localidade.value = consultaCEPConvervtida.localidade;

         var bairro = document.querySelector('#bairro');
         bairro.value = consultaCEPConvervtida.bairro;

         console.log(consultaCEPConvervtida);
         return consultaCEPConvervtida;

     } catch (erro) {
         console.log(erro);
     }
 }

 var cep = document.querySelector('#cep');
 cep.addEventListener('focusout', () => buscaEndereco(cep.value));