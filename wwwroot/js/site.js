// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Maquina de escrever
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const texto = document.querySelector('.texto');
typeWrite(texto);

//Rolar
$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

//VER MAIS

var button = document.getElementById("botaomais");

button.addEventListener("click", function(){
  var span = document.getElementById("span");
 

  if(span.style.display === "none")
  {
    span.style.display = "block";
    button.innerHTML = "Ver menos";
  }
  else
  {
    span.style.display = "none";
    button.innerHTML = "Ver mais";
  }
})

//HABILIDADES

//HTML
$('#html').mouseover(function(){
  $('#mostrar').css('display', 'block');
});

$('#html').mouseout(function(){
  $('#mostrar').css('display', 'none');
}); 

//CSS
$('#css').mouseover(function(){
  $('#mostrar2').css('display', 'block');
});

$('#css').mouseout(function(){
  $('#mostrar2').css('display', 'none');
}); 
//JAVASCRIPT
$('#js').mouseover(function(){
  $('#mostrar3').css('display', 'block');
});

$('#js').mouseout(function(){
  $('#mostrar3').css('display', 'none');
}); 
//C#
$('#cs').mouseover(function(){
  $('#mostrar4').css('display', 'block');
});

$('#cs').mouseout(function(){
  $('#mostrar4').css('display', 'none');
}); 
//REACT-NATIVE
$('#react').mouseover(function(){
  $('#mostrar5').css('display', 'block');
});

$('#react').mouseout(function(){
  $('#mostrar5').css('display', 'none');
}); 
//NODE-JS
$('#node').mouseover(function(){
  $('#mostrar6').css('display', 'block');
});

$('#node').mouseout(function(){
  $('#mostrar6').css('display', 'none');
}); 
//BOOTSTRAP
$('#bootstrap').mouseover(function(){
  $('#mostrar7').css('display', 'block');
});

$('#bootstrap').mouseout(function(){
  $('#mostrar7').css('display', 'none');
}); 
//MYSQL
$('#sql').mouseover(function(){
  $('#mostrar8').css('display', 'block');
});

$('#sql').mouseout(function(){
  $('#mostrar8').css('display', 'none');
}); 



//RETORNO DO CONTATO

$(function () {
  $('[data-toggle="tooltip"]').tooltip ()
});

function contato()
{
  let parametros = {
    Nome: $("#nome").val(),
    Email: $("#email").val(),
    Mensagem: $("#mensagem").val(),
  }
  $.post("Home/Contato", parametros)

  .done(
      function(retorno)
      {
         if(retorno.status=="Ok")
         {
          $("#contatos").after("<h3>Envio realizado</h3>");
          $("#contatos").hide();
         }
         else
         {
             $("#contatos").after("<h3>"+retorno.mensagem+"</h3>");
             
         }
      }
  )
  .fail(
      function()
      {
          alert("Ocorreu um erro! Tente novamente mais tarde");
      }
  )
}

$(document).ready(function()
{
    $("#frmcadastro").submit(
        function(e)
        {
            e.preventDefault();
            contato();
        }
    );
}

);