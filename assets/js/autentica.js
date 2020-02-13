$(document).ready(function(){

  $("#btnAutentic").click(function(verificaOperador){
    var usuario   = document.getElementById("JOperator").value;
    var senha     = document.getElementById("JPassword").value;
    var autentica = false;

    for (let i = 0; i < operadores.length; i++){
      if(usuario == operadores[i].nome && senha == operadores[i].senha){
        $("#JOperator,#JPassword").addClass("inputsCorrect");
        $("#JOperator,#JPassword").removeClass("inputsError");
        $.notify("Usuário autenticado, prossiga com o cadastro", "success");
        $("#JOperator,#JPassword").prop("disabled",true);
        $("#btnAutentic").hide();
        $("#JName,#JVolume,#JTextArea,#JRadio1,#JRadio11,#JRadio2,#JRadio22,#JTerms1,#JTerms11,#JReset,#JSubmit").removeAttr("hidden");
        autentica = true;
      }
    };

    if (autentica == false){
      $("#JOperator,#JPassword").addClass("inputsError");
      $("#JOperator,#JPassword").removeClass("inputsCorrect");
      $(".rightbox").notify("Preencha os campos corretamente para autenticar usuário.", { position:"top center" });
      $("#JOperator").focus();
    }
  });

  $("#JReset").click(function(apagarCampos){
    $("#JName,#JVolume,#JTextArea,#JRadio1,#JRadio11,#JRadio2,#JRadio22,#JTerms1,#JTerms11,#JReset,#JSubmit").attr("hidden",true);
    $("#JOperator,#JPassword").prop("disabled",false);
    $("#btnAutentic").show()
    $("#JOperator,#JPassword,#JName,#JVolume").removeClass("inputsCorrect inputsError");
    $("#JTextArea").removeClass("TextAreaCorrect");
  });

  $("#JName").blur(function(verificaNome){
    var valorNome = $("#JName").val();
    if (valorNome.length <= 2) {
      $("#JName").addClass("inputsError");
      $("#JName").removeClass("inputsCorrect");
      $(".rightbox").notify("Preencha o nome do produto!", { position:"top center" });
    }else {
      $("#JName").addClass("inputsCorrect");
      $("#JName").removeClass("inputsError");
    }
  });

  $("#JVolume").blur(function(verificaNome){
    var valorVolume = $("#JVolume option:selected").val();
    if (valorVolume <= 0) {
      $("#JVolume").addClass("inputsError");
      $("#JVolume").removeClass("inputsCorrect");
      $(".rightbox").notify("Escolha o volume do produto!", { position:"top center" });
    }else {
      $("#JVolume").addClass("inputsCorrect");
      $("#JVolume").removeClass("inputsError");
    }
  });

  $("#JTextArea").blur(function(verificaNome){
    var valorTextArea = $("#JTextArea").val();
    if (valorTextArea.length > 2) {
      $("#JTextArea").addClass("TextAreaCorrect");
    }
  });

});
