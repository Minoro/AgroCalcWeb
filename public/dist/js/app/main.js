$( document ).ready(function(){
    
    //inicia menu mobile
    $(".button-collapse").sideNav();

    //inicial input do tipo select
    $('select').material_select();
    
    $('#volume-pulverizacao #vazao-bico').on('change', calcVolumeAplicacao);
    $('#volume-pulverizacao #vel-trabalho').on('change', calcVolumeAplicacao);
    $('#volume-pulverizacao #volume-pulverizacao').on('change', calcVolumeAplicacao);
    $('#volume-pulverizacao #unidade-area').on('change', calcVolumeAplicacao);
    
    
});


/* Verifica se a função existe para evitar erros */
if (typeof CalcPulverizador.calcVolumeAplicacao == 'function'){
    var calcVolumeAplicacao = function() {
        var vazao = $('#volume-pulverizacao #vazao-bico').val() || 0;
        var velocidade = $('#volume-pulverizacao #vel-trabalho').val() || 1;
        var distancia_bico = $('#volume-pulverizacao #dist-bico').val() || 1;
        
        vazao = parseFloat(vazao);
        velocidade = parseFloat(velocidade);
        distancia_bico = parseFloat(distancia_bico);
        
        var volume = CalcPulverizador.calcVolumeAplicacao(vazao, velocidade, distancia_bico) || 0;
        var unidade = $('#volume-pulverizacao #unidade-area option:selected').val() || "hectare";

        //converte para metros e depois para a unidade escolhida
        volume = CalcPulverizador.converterParaMetros(volume, "hectare");//resultado original em hectares
        volume = CalcPulverizador.converterDeMetros(volume, unidade);

        $('#volume-pulverizacao #resultado-volume').text(volume.toFixed(2));
        
        var labelUnidade = CalcPulverizador.getUnidadeMedida(unidade) || "ha";//recupera a unidade para a label do resultado
        $('#volume-pulverizacao #area').text(labelUnidade);

    };
} else {
    var calcVolumeAplicacao = function(){return false;}
}