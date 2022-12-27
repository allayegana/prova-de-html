var btnLimpar = document.getElementById("limpar");

btnLimpar.addEventListener("click", function(event){

	var inputCliente = document.getElementById("campocliente").value = "";
	var inputPeriodeInicio = document.getElementById("inputPeriode").value="";
	var inputPeriodeFinal = document.getElementById("inputPerioded").value="";
	var inputLoja = document.getElementById("loja").value;

   
	var Clienteput = document.getElementById("campocliente").disabled = false;

	var Lojainput = document.getElementById("loja").disabled = false;
  

});





	var inputCliente = document.getElementById("campocliente");

	var inputLoja = document.getElementById("loja");


inputCliente.addEventListener("input",function(){

		var Cliente = document.getElementById("campocliente").value;


      if (Cliente.length == ""  ) {
      
      document.getElementById("loja").disabled = false;

    }
    else{
            document.getElementById("loja").disabled = true;

    }
  console.log(Cliente);
});

inputLoja.addEventListener("input",function(){

		var loja1 = document.getElementById("loja").value;
	

      if (loja1 == 0 ) {
      
      document.getElementById("campocliente").disabled = false;

    }
    else{
            document.getElementById("campocliente").disabled = true;

    }
  console.log(loja);
});
